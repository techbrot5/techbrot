/* Shared schema + helper for find-an-accountant city-child pages (growth phase).
 * ONE source for the JSON-LD @graph so every city page emits identical, correct
 * schema shape (proven-equivalent to the founder-approved San Francisco proof):
 *   WebPage + BreadcrumbList + Service + FAQPage + speakable, reviewedBy
 *   #david-westgate. Locale specifics come from each city's .11tydata.js via
 *   data.cityMeta; this file only assembles the shape. Not processed by 11ty
 *   (lives under _build/), required by each city data file with a relative path. */

const ORIGIN = "https://techbrot.com";

function stripTags(html){
  return String(html).replace(/<[^>]+>/g,"")
    .replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘")
    .replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”")
    .replace(/&mdash;/g,"—").replace(/&ndash;/g,"–")
    .replace(/&rarr;/g,"→").replace(/&amp;/g,"&")
    .replace(/&nbsp;/g," ").replace(/&middot;/g,"·")
    .replace(/&sect;/g,"§").replace(/&hellip;/g,"…")
    .replace(/\s+/g," ").trim();
}

// Build the city-child @graph from merged page data.
// Expects: data.slug, data.faq, data.breadcrumb (relative hrefs), and
// data.cityMeta = { url, name, description, serviceName, serviceType,
//   serviceDesc, areaServed:[{type,name,sameAs?}], audienceType, offerPrice }.
function buildCityGraph(data){
  const m = data.cityMeta || {};
  const url = m.url;
  const crumb = (data.breadcrumb || []).map(function(item, idx){
    const li = { "@type":"ListItem", "position": idx+1, "name": item.name };
    if (item.href) li.item = item.href.indexOf("http")===0 ? item.href : (ORIGIN + item.href);
    return li;
  });
  return {"@context":"https://schema.org","@graph":[
    {"@type":"WebPage","@id":url+"#webpage","url":url,"name":m.name,"description":m.description,
      "isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},
      "publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},
      "inLanguage":"en-US",
      "speakable":{"@type":"SpeakableSpecification","cssSelector":["#"+data.slug+"-summary","#"+data.slug+"-ai-summary-list"]},
      "reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-17"},
    {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":crumb},
    {"@type":"Service","@id":url+"#service","name":m.serviceName,"serviceType":m.serviceType,
      "description":m.serviceDesc,"provider":{"@id":ORIGIN+"/#organization"},
      "areaServed":(m.areaServed||[]).map(function(a){
        const o={"@type":a.type||"Place","name":a.name}; if(a.sameAs) o.sameAs=a.sameAs; return o;}),
      "audience":{"@type":"BusinessAudience","audienceType":m.audienceType},
      "offers":{"@type":"Offer","priceCurrency":"USD","price":String(m.offerPrice||"400"),
        "description":"Monthly bookkeeping starting price; engagements quoted fixed-fee against written scope."}},
    {"@type":"FAQPage","@id":url+"#faq","mainEntity":(data.faq||[]).map(function(i){
      return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
  ]};
}

module.exports = { stripTags, buildCityGraph, ORIGIN };

/* /find-an-accountant/florida/speak-to-a-proadvisor/ — FL HONEST-TRIAGE (money cluster BOFU).
 * t-bofu. Bespoke body (speak-to-a-proadvisor.njk). APPROVED CA pattern (founder sign-off 2026-06-18),
 * localized to Florida: not-Intuit boundary is the #1 gate; "Certified QuickBooks ProAdvisor" = a held
 * certification, not affiliation; Intuit account/billing/login intent routed AWAY to Intuit; we do the
 * books, the CPA files; FL agency = the Florida Department of Revenue. Founder-name-zero. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
module.exports = {
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/speak-to-a-proadvisor/",
    name: "Speak to a Florida QuickBooks ProAdvisor",
    description: "Speak to a Certified QuickBooks ProAdvisor at TechBrot — an independent firm, not Intuit or QuickBooks support. A free, no-obligation call about your Florida books. Independent firm; does not file Florida taxes.",
    serviceName: "Florida QuickBooks ProAdvisor Discovery Call",
    serviceType: "QuickBooks ProAdvisor advisory and discovery call",
    serviceDesc: "A free, no-obligation discovery call with a Certified QuickBooks ProAdvisor for Florida businesses — reviewing the client's own QuickBooks file and recommending setup, cleanup, monthly management, or advisory. Independent firm, not Intuit or QuickBooks product support; does not provide Intuit account/billing support or file Florida tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida businesses wanting to speak with an independent Certified QuickBooks ProAdvisor about their own books",
    offerPrice: "0",
  },
  summary: [
    "<strong>Speaking to a TechBrot ProAdvisor is a free, no-obligation call with an actual Certified QuickBooks ProAdvisor</strong> who works with Florida businesses &mdash; not a salesperson, not a call center, and not Intuit. We review your own QuickBooks file, answer your questions, and tell you honestly what you need: setup, cleanup, monthly bookkeeping, or advisory.",
    "One boundary up front, so no one wastes a call: this is <strong>not Intuit and not QuickBooks product support</strong>. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification this firm holds from Intuit; it doesn&rsquo;t mean Intuit affiliation. For an Intuit account, billing, subscription, or login problem, contact Intuit directly &mdash; we can&rsquo;t access your Intuit account. And for filing Florida tax returns or representing you before the Florida Department of Revenue, that&rsquo;s your CPA or EA. What we do is the accounting work inside your own books.",
  ],
  split: [
    { tag: "Call us", title: "Talk to a ProAdvisor if&hellip;", body: "Your call is about how your own books and QuickBooks file are set up and run. A Certified ProAdvisor can help with:", list: [
      "Your QuickBooks file is a mess and you want an honest read",
      "You&rsquo;re behind and need cleanup or catch-up",
      "You want monthly bookkeeping by a named ProAdvisor",
      "You have Florida-specific questions (6%+surtax sales tax by county, the taxability of services, the 5.5% corporate tax, tangible personal property)",
      "You want CFO-level advisory once the books are clean",
    ], cta: "Book the discovery call &rarr;", href: "/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=BOFU" },
    { tag: "Contact Intuit", title: "Contact Intuit directly if&hellip;", body: "These are Intuit account or product matters this team cannot access or resolve:", list: [
      "Intuit billing, subscription, or a charge on your account",
      "A login, password, or account-access problem",
      "A QuickBooks product bug, crash, or how-to in the software",
      "Anything that requires signing into your Intuit account",
    ], cta: "Go to Intuit support &rarr;", href: "https://www.intuit.com/", rel: "noopener nofollow" },
  ],
  splitNote: "If you&rsquo;re not sure which side you&rsquo;re on, call anyway &mdash; we&rsquo;ll tell you honestly in two minutes whether it&rsquo;s a books question for us or an account question for Intuit, and point you the right way.",
  aiSummary: [
    { q: "Is TechBrot the same as Intuit or QuickBooks support?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not Intuit, not QuickBooks Customer Support, not QuickBooks Live, and not Intuit&rsquo;s ProAdvisor referral line. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification the firm holds from Intuit; it does not mean affiliation. For Intuit account or product help, contact Intuit directly." },
    { q: "What does speaking to a Florida ProAdvisor cost?", a: "<strong>Nothing.</strong> The discovery call is free and no-obligation. You speak with an actual Certified QuickBooks ProAdvisor about your own Florida books; if you want work done, you get a written fixed-fee scope within 3 business days." },
    { q: "What can a ProAdvisor call help with?", a: "The accounting work inside your own books &mdash; QuickBooks setup, cleanup, catch-up, monthly bookkeeping, Florida specifics (6%+surtax sales tax by county, the taxability of services, the 5.5% corporate tax, tangible personal property), and CFO-level advisory. We do the books; your CPA files." },
    { q: "What can&rsquo;t this call help with?", a: "Intuit account, billing, subscription, or login issues, and QuickBooks product bugs &mdash; those require Intuit, which we can&rsquo;t access. And filing Florida returns or representation before the Florida Department of Revenue is your CPA&rsquo;s or EA&rsquo;s." },
    { q: "Will I get a sales pitch?", a: "No. You speak with a Certified ProAdvisor who would do or oversee the work, not a salesperson. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so &mdash; and point you toward who is." },
  ],
  conversation: [
    { num: "01", title: "You describe the situation", body: "Where your Florida books stand, what&rsquo;s prompting the call, and any deadline. No script, no qualifying interrogation." },
    { num: "02", title: "We review your own file", body: "A Certified ProAdvisor looks at your actual QuickBooks file &mdash; reconciliation, sales tax by county, the taxability of services, the corporate-tax figures &mdash; and tells you what it really needs." },
    { num: "03", title: "You get an honest read", body: "Setup, cleanup, monthly, or nothing at all if that&rsquo;s the truth &mdash; plus a written fixed-fee scope within 3 business days if you want the work." },
  ],
  faq: [
    { q: "Is TechBrot Intuit or QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not Intuit, not QuickBooks Customer Support, not QuickBooks Live, and not Intuit&rsquo;s expert or ProAdvisor referral line. Calling this number does not reach Intuit. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification the firm holds from Intuit; it does not mean Intuit affiliation, endorsement, or sponsorship." },
    { q: "What does the call cost, and is there an obligation?", a: "The discovery call is free and carries no obligation. You speak with an actual Certified QuickBooks ProAdvisor about your own Florida books. If you decide you want work done, you receive a written fixed-fee scope within 3 business days &mdash; but there&rsquo;s no pressure and no sales script." },
    { q: "I have an Intuit billing or login problem — can you help?", a: "No &mdash; we can&rsquo;t access your Intuit account, so an Intuit billing, subscription, login, password, or product-bug matter has to go to Intuit directly. We&rsquo;ll happily point you to the right place, but the call we can help with is about the accounting work inside your own QuickBooks file." },
    { q: "What Florida things can a ProAdvisor actually help with?", a: "The accounting inside your books: QuickBooks setup and cleanup, monthly bookkeeping, 6%+surtax sales tax configured by county, the commercial-rent tax captured, the 5.5% corporate-tax position tracked where it applies, tangible personal property kept ready, and CFO-level advisory once the books are clean. We keep the books CPA-ready; your CPA files the Florida returns." },
    { q: "Will I be talking to a salesperson?", a: "No &mdash; you speak with a Certified QuickBooks ProAdvisor, the kind of person who would do or oversee the work, not a call-center rep working a script. If TechBrot isn&rsquo;t the right fit for your situation, we&rsquo;ll tell you that honestly and point you toward who is." },
    { q: "Do you file my Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do the bookkeeping and QuickBooks work and keep the books CPA-ready, and your CPA or EA files the sales tax, corporate income tax, service taxability, and tangible personal property return and represents you before the Florida Department of Revenue. We are not affiliated with Intuit Inc." },
    { q: "Do you serve my Florida city or county?", a: "All 67 Florida counties, delivered remotely on QuickBooks &mdash; Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale and beyond. Your county changes the surtax rate but not the service or the named ProAdvisor on your file." },
    { q: "How do I book the call?", a: "Use the discovery-call link or call the number on this page. Tell us where your books stand and any deadline; a Certified ProAdvisor reviews your file and gives you an honest read, with a written fixed-fee scope within 3 business days if you want work done." },
  ],
  reviewProse: "Reviewed and maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Florida businesses across all 67 counties. Discovery calls are conducted by Certified ProAdvisors. TechBrot is an independent firm &mdash; not affiliated with, endorsed by, or sponsored by <a href=\"https://www.intuit.com/\" rel=\"noopener nofollow\">Intuit Inc.</a>; it provides no Intuit account, billing, or QuickBooks product support. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files; it does not file Florida tax returns or represent clients before the Florida Department of Revenue.",
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Independent firm, not Intuit &middot; No Intuit account/billing/product support &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

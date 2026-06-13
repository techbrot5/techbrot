# Functional interaction test: drives the chrome + content JS the way a
# keyboard/pointer user would and asserts the ARIA state flips. Covers:
# nav dropdown toggle + Escape, mobile drawer open/close + Escape, FAQ
# accordion one-at-a-time. Prereq: 8090 serves _site.
param([string]$Path = "/")
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><body>
<div id="out">pending</div>
<iframe id="f" src="PAGEPATH" style="width:1280px;height:1400px;border:0"></iframe>
<script>
const f = document.getElementById("f");
function key(el,k){ el.dispatchEvent(new KeyboardEvent("keydown",{key:k,bubbles:true})); }
f.onload = async () => {
  await new Promise(r => setTimeout(r, 700));
  const d = f.contentDocument, R = {};
  // nav dropdown
  const nt = d.querySelector(".nav__trigger");
  if (nt) {
    nt.click();
    R.dropdownOpens = nt.getAttribute("aria-expanded")==="true";
    key(d.body,"Escape");
    R.dropdownEscCloses = nt.getAttribute("aria-expanded")==="false";
  }
  // drawer
  const ham = d.querySelector(".nav__hamburger"), dr = d.getElementById("site-drawer");
  if (ham && dr) {
    ham.click();
    R.drawerOpens = dr.getAttribute("data-open")==="true";
    key(d.body,"Escape");
    R.drawerEscCloses = dr.getAttribute("data-open")==="false";
  }
  // FAQ accordion (one open at a time)
  const tr = d.querySelectorAll(".faq__trigger");
  if (tr.length >= 2) {
    tr[0].click(); tr[1].click();
    const openCount = [...tr].filter(b=>b.getAttribute("aria-expanded")==="true").length;
    R.faqOneAtATime = openCount === 1 && tr[1].getAttribute("aria-expanded")==="true";
  }
  document.getElementById("out").textContent = "INTERACT:" + JSON.stringify(R);
};
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path)
Set-Content -Path "_site\dev-interact.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$line = & $chrome --headless=new --disable-gpu --virtual-time-budget=12000 --dump-dom "http://localhost:8090/dev-interact.html" 2>$null |
  Select-String "INTERACT:" | Select-Object -First 1
Remove-Item "_site\dev-interact.html" -Force
if ($line) { "$Path : " + (($line.Line -replace '^.*?INTERACT:','') -replace '</div>.*$','') } else { "$Path : FAILED" }

# Detailed color-contrast dump for one page: fg, bg, ratio, expected, and
# the element, for the first N failing nodes. Prereq: 8090 + axe.min.js.
param([string]$Path = "/", [int]$N = 6)
Set-Location (Join-Path $PSScriptRoot "..\..")
$probe = @'
<!DOCTYPE html><html><head></head><body>
<div id="out">pending</div>
<iframe id="f" src="PAGEPATH" style="width:1280px;height:2400px;border:0"></iframe>
<script>
const f = document.getElementById("f");
f.onload = async () => {
  try { await f.contentWindow.document.fonts.ready; } catch(e) {}
  await new Promise(r => setTimeout(r, 800));
  const idoc = f.contentDocument;
  await new Promise((res,rej)=>{const s=idoc.createElement("script");s.src="/axe.min.js";s.onload=res;s.onerror=rej;idoc.head.appendChild(s);});
  const res = await f.contentWindow.axe.run(idoc, { runOnly:{type:"rule",values:["color-contrast"]} });
  const out = [];
  res.violations.forEach(v => v.nodes.slice(0, NN).forEach(n => {
    const d = (n.any[0]||{}).data || {};
    out.push({ el: String(n.target).slice(0,40), fg: d.fgColor, bg: d.bgColor,
      ratio: d.contrastRatio, exp: d.expectedContrastRatio, fs: d.fontSize, fw: d.fontWeight });
  }));
  document.getElementById("out").textContent = "DETAIL:" + JSON.stringify(out.slice(0, NN));
};
</script></body></html>
'@
$probe = $probe.Replace("PAGEPATH", $Path).Replace("NN", "$N")
Set-Content -Path "_site\dev-axe-d.html" -Value $probe -Encoding ascii
$chrome = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe" }
$line = & $chrome --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=25000 --dump-dom "http://localhost:8090/dev-axe-d.html" 2>$null |
  Select-String "DETAIL:" | Select-Object -First 1
Remove-Item "_site\dev-axe-d.html" -Force
if ($line) { ($line.Line -replace '^.*?DETAIL:', '') -replace '</div>.*$', '' } else { "no detail" }

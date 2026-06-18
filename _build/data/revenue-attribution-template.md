# Revenue Attribution → `revenue-attribution.json` (per lead; complete at close)

One anonymized row per real lead. Form auto-fills the attribution chain at flip; you add the outcome at close.
REAL only · no client names · revenue as a BAND, never exact · blank stays blank · publish-gated (N≥20 min / 50+ pref, N shown).

Per-lead fields:
- first_touch_source — organic-search · ai-assistant · referral · social · direct · paid · other
- last_touch_source — same enum (the session they inquired in)
- ai_tool — chatgpt · claude · gemini · perplexity · copilot · other-ai · (blank)
- landing_page — first page of the converting session (path or page_type)
- page_before_inquiry — page viewed right before submitting
- service_requested — primary service (from intake services[])
- became_client — Y / N
- revenue_band — only if client: <1500 · 1500-5000 · 5000-15000 · 15000-50000 · 50000+ (recurring annualized)

Answers "which pages generate REVENUE, not just traffic." Feeds the AI Search Lead-Generation Report.

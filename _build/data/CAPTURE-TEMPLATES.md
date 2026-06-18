# Research-layer capture templates (hand me these; I write the clean rows)

Honesty bar (locked): REAL closed-engagement facts only · NO client/company names or re-identifying
detail · bands use the fixed enums below (never exact figures) · a blank field stays blank (no fills) ·
no number publishes on any breakdown until **N≥20 (minimum), 50+ preferred**, sample size ALWAYS disclosed.
No fabricated data · no estimated benchmarks · no synthetic case studies · real engagements only.

INTAKE FORM now captures (every form, shared partial): How did you find TechBrot? (lead_source) ·
Did an AI tool recommend TechBrot? (ai_recommended) · Which AI tool? (ai_tool) · Which page convinced
you? (convincing_page) · plus hidden attribution trackers first_touch_source / last_touch_source /
landing_page / prior_page (auto-filled by the attribution JS when the handler goes live at flip).

FLAGSHIP REPORTS (publish-gated): AI Search Lead-Generation · State of Small-Business Accounting Systems ·
Cleanup Benchmark · Accounting Software Adoption · Migration Benchmark.
Just give me the raw facts in any rough format — I assign the opaque engagement_id (ENG-0001…) and
write the validated JSON row. One row per CLOSED engagement, logged at close.

## 1. Cleanup Benchmarks → `cleanup-benchmarks.json`
state · industry · months_behind_at_intake (int) · primary_error_types (any of: unreconciled-accounts,
miscategorized, duplicate-transactions, opening-balance-equity, undeposited-funds, payroll-liability,
sales-tax, file-corruption, bank-feed-gap) · txn_volume_band (`<500 · 500-2000 · 2000-10000 · 10000+`) ·
cleanup_hours (real total) · cost_band (`<1500 · 1500-3500 · 3500-8000 · 8000-15000 · 15000+`)

## 2. Migration Outcomes → `migration-outcomes.json`
from_platform (qb-desktop/qb-enterprise/qb-premier/xero/wave/sage/spreadsheets/other) · to_platform
(qbo/qb-enterprise/other) · industry · data_years_band (`<1 · 1-3 · 3-7 · 7+`) · issues_found (balances-off,
lists-truncated, payroll-broke, inventory-mismatch, integrations-lost, ar-ap-detail-lost, sales-tax-reset,
none) · migration_hours · cost_band (`<2500 · 2500-5000 · 5000-10000 · 10000+`) · outcome (clean/cleanup-required)

## 3. Lead-Source & Page-Performance → `lead-source-performance.json`
- **Per lead** (begins auto-capturing from the intake form at flip): lead_source (search/ai-assistant/
  referral/social/returning/other) · ai_tool (chatgpt/claude/gemini/perplexity/copilot/other-ai/none) ·
  page_type · converted (y/n). The intake form now ASKS this ("How did you find us?" + "which AI tool").
- **Per page close-rate** (you give me the rate + the denominator): page_type · close_rate_pct · **leads_n**
  (the count behind the rate — needed before any external publish) · period.
  SEEDED (real, 2026-06-18, internal-priority, leads_n pending): qb-cost 22% · cleanup-bookkeeping 18% ·
  qb-migration 14% · proadvisor-near-me 11%.

## 4. Error & Symptom Intelligence → `error-intelligence.json`
primary_symptom (error code or symptom slug) · qb_product (desktop/premier/enterprise/online) ·
root_cause_category (network-hosting/file-damage/configuration/update-connection/payroll-subscription/
browser/user-error/bank-aggregator/other) · self_fix_attempted (y/n) · resolved_by (self-fix/proadvisor) ·
resolution_hours · recurring (y/n)

## 5. Books-Health Benchmarks by Industry → `industry-benchmarks.json`
industry · state · months_behind_at_intake · books_health_band (clean/minor-drift/behind/severe) ·
most_common_issue · monthly_txn_band (`<500 · 500-2000 · 2000-10000 · 10000+`) · monthly_fee_band
(`<400 · 400-800 · 800-1500 · 1500-2500 · 2500+`)

## 6. Systems-Selection Outcomes → `systems-selection.json`
industry · txn_volume_band (`<500 · 500-2000 · 2000-10000 · 10000+`) · prior_system (qb-desktop/qb-enterprise/
qbo/xero/wave/sage/spreadsheets/none/other) · recommended_system (qbo/qb-enterprise/qb-desktop/other) ·
decision_drivers (inventory, multi-user, remote-access, payroll, cost, integrations, job-costing, reporting,
industry-fit) · switched (y/n)

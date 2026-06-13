# AA contrast matrix — computed 2026-06-13 (WCAG relative luminance)

Every text token ≥4.9:1 on its worst-case tier tint. `ink-faint` is NON-TEXT
by rule. Focus is a 2px ring (UI component ≥3:1 requirement).

| text token | paper #FBFAF7 | mist (hub) #F6F4EF | warm (guide) #F4F2EC | deep (bofu) #EDEAE1 | white card |
|---|---|---|---|---|---|
| ink `#1A1915` | 16.85 | 16.00 | 15.71 | 14.62 | 17.59 |
| ink-soft `#45433C` | 9.49 | 9.01 | 8.84 | 8.23 | 9.90 |
| ink-mute `#5F5B52` | 6.48 | 6.15 | 6.04 | 5.62 | 6.76 |
| accent `#2B4FD6` | 6.30 | 5.99 | 5.88 | 5.47 | 6.58 |
| accent-deep `#1D3EB8` | 8.27 | 7.85 | 7.71 | 7.17 | 8.63 |
| brass `#7E5A1E` | 5.97 | 5.66 | 5.56 | 5.18 | 6.23 |
| success `#29714A` | 5.66 | 5.37 | 5.28 | 4.91 | 5.91 |
| warning `#8E5603` | 5.78 | 5.48 | 5.39 | 5.01 | 6.03 |
| critical `#B0382C` | 5.83 | 5.53 | 5.43 | 5.06 | 6.08 |
| ink-faint `#908C80` (non-text) | 3.22 | 3.06 | 3.00 | 2.79 | 3.36 |
| focus ring `#118A7E` (ring ≥3:1) | 4.06 | 3.85 | 3.78 | 3.52 | 4.23 |

**Dark surface `#181711`:** inverted 16.17 · inverted-soft 10.16 (composited)
· inverted-mute 5.62 (≥14px only) · focus ring 4.24 · brass-bright `#C9A961` 7.6 (dark-surface ratings) · accent-soft `#3D63E8`
3.55 (decorative motif only).

## Button states (label / fill, per state — defect-fix verified)
| variant | rest | hover | focus | press |
|---|---|---|---|---|
| primary (ink → accent-deep) | 15.84 | 7.77 | 7.77 + ring | 7.77 |
| ghost (white fill, all surfaces) | 17.59 | 17.59 | 17.59 + ring | 17.59 |
| inverted primary (dark band) | 15.84 | 17.59 | 17.59 + ring 4.24 | 17.59 |
| inverted ghost (dark band) | 16.17 | 16.17 | 16.17 + ring | 16.17 |
| standalone text-link hover | — | 8.27 paper / 7.17 deep | same | same |

Rule shipped in `02-conversion.SKIN.css`: **every button state pins both fill
and label** — hover rules that set only background let base `a:hover` rules
recolor the label (the 2B-gate defect: label and fill both resolved to accent).

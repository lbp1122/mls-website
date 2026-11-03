# My Life Square Website

Official public website source for **My Life Square (MLS)**.

Operator: Looi Boon Ping  
Contact: mylifesquare22@gmail.com

## Pages
- Home
- Privacy Policy
- Terms of Use
- Support
- Data deletion instructions
- Life Point methodology

## GitHub Pages

This is a static site designed to publish directly from the repository root.

Repository: `lbp1122/mls-website`

GitHub Pages setup:
- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

Expected public URL:
`https://lbp1122.github.io/mls-website/`

Privacy policy:
`https://lbp1122.github.io/mls-website/privacy.html`

Support:
`https://lbp1122.github.io/mls-website/support.html`

Data deletion:
`https://lbp1122.github.io/mls-website/delete-data.html`

## Brand

Approved MLS app artwork: `assets/mls-icon.png` (512×512), copied byte-for-byte from `lbp1122/surpluslab/assets/branding/SurplusLab-Icon-512.png` at commit `e9206098a9af23a1814932654968c07f2639ca86`. The website uses blue #075494, cyan #00C9D8, amber #FFC400 and orange #ED6500 with navy text. Images preserve the original square proportions without added artwork padding. SHA-256: `b851bead40053eda6f94b7896b73f7fb60d81f46456b7ec20d5b44466c45fbbd`.

## October 2026 content refresh

Home and methodology reflect separate Health → Belief → Knowledge → Relationship records, Starting Position, guided Update, and Journey. No ideal HBKR balance or combined Life Total is promoted. Android remains in testing; no public Play Store download is advertised. Website now supports eight languages: English, Bahasa Melayu, Simplified Chinese, Traditional Chinese, Thai, Japanese, Korean and Vietnamese. Health Connect and local reset instructions match the current Android test build.


## Vietnamese localization (November 2026)

- `Tiếng Việt` is the eighth option in the language selector on all six public pages.
- Source copy: `assets/i18n-vi.js` (homepage, privacy, terms, support, data deletion, methodology).
- Site strings load before the shared translator `assets/i18n.js`.
- Browser language beginning with `vi` selects Vietnamese automatically unless a visitor previously saved another language.
- User language selection is stored as `mls_web_lang`; existing seven languages are preserved.
- Legal translations include a notice that English remains the reference text when interpretation differs.
- Verify coverage after content changes with `node tests/vietnamese-website.test.cjs`.

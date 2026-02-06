# Berry Bury Berry Website (GitHub Pages)

This is a fast, SEO-friendly static website for **Berry Bury Berry** with:
- Home / Play / Guide / Blog (long-form articles) / FAQ / Media / Contact / Legal
- OpenGraph + Twitter cards
- Schema.org (VideoGame, Article, FAQPage, BreadcrumbList)
- robots.txt + sitemap.xml

## 1) Deploy on GitHub Pages
1. Create a repo (recommended): **berryburyberry.github.io** (so the site is at root)
2. Upload all files
3. GitHub → Settings → Pages → Deploy from branch → `main` / root

## 2) Custom domain
Set your domain to **berryburyberry.com** and enable HTTPS in GitHub Pages settings.

## 3) WebGL build location
This site loads the game from:
`https://berryburyberry.com/game/index.html`

Put your Unity WebGL build there, or edit:
`assets/js/play.js` → `PLAY_URL`.

## 4) Replace placeholder images
Replace files in `assets/img/` with real images:
- og-cover.jpg (1200x630)
- logo.png
- screenshots
- favicon.png


## AdSense placement
Ad placeholders are included on Home, Play, Guide, and Article pages.
To enable ads:
1. Add your real Publisher ID in the AdSense loader script (in each page head).
2. Replace each placeholder block with your own `<ins class="adsbygoogle">` units + push script.

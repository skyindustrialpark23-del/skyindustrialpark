# Sky Industrial Park – website + admin panel

Edit photos, videos and text at **/admin.html** (no code needed).

## What is where
- `index.html`  the website (reads its content from the backend, falls back to defaults)
- `admin.html`  the admin panel
- `defaults.js` default text (used when nothing is saved yet)
- `functions/`  the backend (Cloudflare Pages Functions): content, login check, upload, media
- Data lives in Cloudflare **KV** (text) and **R2** (photos/videos).

## One-time setup (Cloudflare dashboard)
1. **R2** → Create bucket named `sky-media`.
2. **Workers & Pages → KV** → Create namespace `sky-content`. Copy its ID.
3. Put the KV ID into `wrangler.toml` (replace `PASTE_KV_NAMESPACE_ID_HERE`).
4. Deploy the folder. Functions need either Git or Wrangler (drag-and-drop upload may ignore the `functions` folder):
   - Git: push this folder to GitHub → Workers & Pages → Create → Pages → Connect to Git. Build command empty, output directory `/`.
   - Wrangler: `npx wrangler pages deploy . --project-name sky-industrial-park`
5. Pages project → **Settings → Bindings** (skip if `wrangler.toml` already lists them):
   KV namespace binding `CONTENT` → `sky-content`; R2 bucket binding `MEDIA` → `sky-media`.
6. Pages project → **Settings → Variables and Secrets** → add secret `ADMIN_PASSWORD` (choose a long password). Redeploy once.
7. Open `https://YOUR-SITE.pages.dev/admin.html`, login, edit, press **Save changes**, refresh the website.

## Notes
- Photos are shrunk to max 1800 px in your browser before upload. Video limit 95 MB (MP4 recommended).
- Plots: first 3 appear in the big slider, all appear in the highlighted row and the search list.
- Not set up yet = site still works with default text; admin login will say the backend is missing.
- Extra protection (optional): put `/admin.html` and `/api/*` behind Cloudflare Access.
- Local test: `npx wrangler pages dev .` then open /admin.html.

## What you can change in /admin.html
Contact & map, Hero banners, Search tabs, Quick tiles, Plots, Service boxes, Overview boxes, Infrastructure boxes,
About & main video, Video gallery (MP4 or YouTube link), Photo gallery, Headings & texts.
Every list lets you add, edit, reorder (arrows) and delete items. Press **Save changes** to publish.

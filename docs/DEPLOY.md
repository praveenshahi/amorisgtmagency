# Deploying amoris.in

Verified against the live server on 2026-08-16. If anything here disagrees with an older document — in particular `DEPLOY-NGINX.md` in the superseded `praveenshahi/AMORISGTM` repo — **this file is correct and that one is not.**

---

## What actually serves the site

| | |
|---|---|
| Host | GCP VM, `34.61.195.181` (`amoris.in` resolves here) |
| Server | nginx 1.18.0 on Ubuntu |
| **Document root** | **`/var/www/amoris/dist`** |
| Build | Astro, `output: 'static'` |
| CI deploy | **None.** Deployment is manual |

### The trap

`/var/www/amoris/` also contains `index.html`, `package.json`, `node_modules` and old `dist_backup_*` directories. **None of that is served.** nginx points one level down, at `/var/www/amoris/dist`. Deploying to `/var/www/amoris` looks like it worked and changes nothing.

### Cloudflare config is inert

The repo carries `wrangler.jsonc` from the Stardrive boilerplate. Nothing runs on Cloudflare. `wrangler.jsonc` is kept only because `npm run check:type` calls `wrangler types`.

`public/_headers` and `public/_redirects` were removed for the same reason — they are Cloudflare Pages conventions that do nothing on nginx, and editing them expecting a redirect would waste a session. **nginx owns headers and redirects.**

---

## Deploy

Run `npm run build` first and check the output locally with `npm run preview`.

```bash
npm run build
```

Package, upload, back up, sync:

```bash
tar -czf /tmp/amoris-dist.tar.gz -C dist .
scp -i ~/.ssh/google_compute_engine /tmp/amoris-dist.tar.gz prave@34.61.195.181:~/
```

Then on the VM:

```bash
sudo cp -a /var/www/amoris/dist /var/www/amoris/dist_backup_$(date +%Y%m%d-%H%M%S)
rm -rf ~/amoris-new && mkdir -p ~/amoris-new
tar -xzf ~/amoris-dist.tar.gz -C ~/amoris-new
sudo rsync -a --delete ~/amoris-new/ /var/www/amoris/dist/
sudo chown -R amorisprana:amorisprana /var/www/amoris/dist
sudo find /var/www/amoris/dist -type d -exec chmod 755 {} \;
sudo find /var/www/amoris/dist -type f -exec chmod 644 {} \;
rm -f ~/amoris-dist.tar.gz && rm -rf ~/amoris-new
```

Notes:
- SSH user is `prave`, key `~/.ssh/google_compute_engine`. `prave` is in `google-sudoers`, so `sudo -n` works without a password.
- `/var/www/amoris/dist` is owned by `amorisprana` — restore ownership after rsync or nginx may 403.
- **Always take the backup.** `--delete` removes anything not in the new build.
- No nginx reload is needed. Static files only.

### Verify

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://amoris.in/
curl -s https://amoris.in/ | grep -o "<h1[^>]*>[^<]*</h1>"
for p in "" products pricing architecture founder data-and-ip faq contact blog intel-echo/ intel-echo-gtm/; do printf "%-18s " "/$p"; curl -s -o /dev/null -w "%{http_code}\n" "https://amoris.in/$p"; done
```

### Rollback

```bash
ls -d /var/www/amoris/dist_backup_*
sudo rsync -a --delete /var/www/amoris/dist_backup_<STAMP>/ /var/www/amoris/dist/
```

---

## Live nginx redirects

Read from `/etc/nginx/sites-enabled/` on 2026-08-16. Managed on the server, not in this repo. Changing a route here can break one of these.

| From | To |
|---|---|
| `/index.html` | `/` |
| `/research.html`, `/labs.html`, `/products.html` | extensionless equivalents |
| `/research`, `/research/`, `/labs`, `/labs/` | `/` |
| `/how-it-works` | `/` |
| `/ai-employees`, `/agents`, `/aios`, `/work` | `/products/` |
| `/about` | `/founder/` |
| `/sitemap.xml` | `/sitemap-index.xml` |

There is also a `/template/` location for a staging directory.

### Corrected: rules that do NOT exist

The old `DEPLOY-NGINX.md` lists `301`s for **`/pricing`** and **`/contact`**. Neither is applied on the server, and both pages return 200. Those two lines were never live. Do not apply that file wholesale — it would take out the pricing page.

---

## GitHub

`https://github.com/praveenshahi/amorisgtmagency`, branch `main`. Pushing does **not** deploy; the two steps are independent. The `upstream` remote pointing at the Stardrive boilerplate was removed to prevent accidental merges.

Existing workflows are CodeQL, tests and Dependabot. There is no deploy workflow.

---

## Known repo state

- `npm run check` fails on roughly 1,200 Prettier CRLF errors across nearly every file — a pre-existing artefact of the Windows clone, not caused by any recent change. `npm run build` and `astro check` are both clean. Do not run `prettier -w .` to fix it unless that is the whole task; it rewrites the entire repo into one unreviewable diff.
- Superseded repos, kept only for history: `praveenshahi/AMORISGTM` (pre-Stardrive agency site) and the old `amoris` consciousness-platform repo. Neither serves anything.

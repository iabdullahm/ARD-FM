# Rafid Website Images

This folder holds all website images served directly by Vercel via the CDN.

## Required files

The code expects these exact paths to exist:

| Path | Source on Google Cloud Storage |
|---|---|
| `/public/images/logo.png` | `gs://ard3/Rafid Website/Rafid logo no bg.png` |
| `/public/images/screenshots/hero.png` | `gs://ard3/Rafid Website/screen shots/hero.png` |

## How to populate this folder

### Option A — From the Google Cloud Console (browser)

1. Open https://console.cloud.google.com/storage/browser/ard3/Rafid%20Website
2. Click `Rafid logo no bg.png` → **Download** → rename the downloaded file to `logo.png`.
3. Drop it into `public/images/logo.png`.
4. Open the `screen shots/` sub-folder → download `hero.png` → drop into `public/images/screenshots/hero.png`.

### Option B — From gcloud CLI

```bash
cd "C:\Projects\Rafid FM System\Rafid Website"
gcloud storage cp "gs://ard3/Rafid Website/Rafid logo no bg.png" public/images/logo.png
gcloud storage cp "gs://ard3/Rafid Website/screen shots/hero.png" public/images/screenshots/hero.png
```

### Option C — From gsutil

```bash
gsutil cp "gs://ard3/Rafid Website/Rafid logo no bg.png" public/images/logo.png
gsutil cp "gs://ard3/Rafid Website/screen shots/hero.png" public/images/screenshots/hero.png
```

## After placing the files

```bash
npm run dev        # verify locally on http://localhost:9002
git add public/images
git commit -m "feat: migrate website images from GCS to Vercel public folder"
git push origin main
```

Vercel will auto-build and serve the images from its global edge CDN with automatic WebP/AVIF optimization through `next/image`.

## Notes

- Filenames have been normalized: spaces removed, lowercase.
- The site code references `/images/logo.png` and `/images/screenshots/hero.png` — do not change file names without updating the code.
- Once Vercel deployment succeeds and you verify the images render, the `ard3` GCS bucket can be deleted (or left as a backup).

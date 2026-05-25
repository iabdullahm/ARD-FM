# Product Screenshots

This folder should contain the WebP screenshots of the Rafid system.

## Required Files

Place the following WebP files in this directory:

1. **dashboard.webp** (1200x800px)
   - Screenshot of the Dashboard/Property Intelligence Hub
   - Shows KPIs, occupancy rates, revenue, system intelligence

2. **work-orders.webp** (1200x800px)
   - Screenshot of the Work Orders page
   - Shows maintenance management interface

3. **properties.webp** (1200x800px)
   - Screenshot of the Properties/Property Intelligence Hub
   - Shows property portfolio management

4. **tenants.webp** (1200x800px)
   - Screenshot of Tenants & Residents page
   - Shows tenant management interface

5. **invoices.webp** (1200x800px)
   - Screenshot of Accounts Receivable/Invoices page
   - Shows financial management interface

## Image Specifications

- **Format**: WebP (for better compression)
- **Dimensions**: 1200 x 800 pixels
- **Quality**: 80% (lossy compression)
- **Max File Size**: 150KB per image

## How to Convert Screenshots to WebP

### Using ImageMagick (Command Line)
```bash
convert dashboard.png -quality 80 -define webp:method=6 dashboard.webp
```

### Using Online Tools
- [CloudConvert](https://cloudconvert.com/)
- [AnyConv](https://anyconv.com/)
- [Convertio](https://convertio.co/)
- [Online-Convert](https://image.online-convert.com/convert-to-webp)

### Using VS Code Extension
- Install "WebP Converter" extension
- Right-click on PNG → Convert to WebP

## How to Take Screenshots from Rafid System

1. Login to Rafid Demo: https://app.rafidsystem.com/c/demo/dashboard
2. Navigate to each section (Dashboard, Work Orders, Properties, Tenants, Invoices)
3. Use browser's Screenshot tool (F12 → Right-click → Capture screenshot)
4. Or use Windows Snipping Tool (Win + Shift + S)
5. Crop/resize to 1200x800px
6. Convert to WebP

## File Size Check

After adding files, verify sizes:
```bash
ls -lh /public/screenshots/
```

Each file should be under 150KB for optimal web performance.

## Testing

Once files are added:
1. Start the dev server: `npm run dev`
2. Visit http://localhost:3000
3. Scroll to "Rafid in Action" section
4. Verify all 5 screenshots display correctly
5. Test responsiveness on mobile/tablet

## Deployment

After adding the files:
1. Commit: `git add public/screenshots/`
2. Push: `git push origin main`
3. Vercel will automatically deploy the changes
4. Verify on live site: https://your-site.vercel.app

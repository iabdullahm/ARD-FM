# 📸 Quick Guide: Save & Convert Your Screenshots

You have **5 perfect screenshots** from Rafid! Now let's save them and add to the project.

## 🎬 Option 1: Save from Browser (Fastest)

### For Windows:

```powershell
# Open PowerShell and run these commands:

# Step 1: Navigate to project
cd "C:\Projects\Rafid FM System\Rafid Website"

# Step 2: Create temp folder for screenshots
mkdir temp_screenshots
cd temp_screenshots

# Step 3: Use Windows Snipping Tool
# Press: Win + Shift + S
# Capture each screenshot from Rafid and Save As PNG
# Save files as:
# - maintenance.png
# - preventive.png
# - properties.png
# - tenants.png
# - invoices.png

# Step 4: Convert to WebP using online tool
# Go to: https://cloudconvert.com/png-to-webp
# Upload all 5 PNGs
# Download WebP versions

# Step 5: Move converted files
Move-Item *.webp "..\public\screenshots\"

# Step 6: Verify
ls "..\public\screenshots\"
```

---

## 🎬 Option 2: Use Python Script (Automated)

If you have Python installed:

```powershell
# 1. Save all 5 screenshots as PNG files in a folder
# 2. Run this command:

python << 'PYTHON_SCRIPT'
from PIL import Image
import os
import glob

# Find all PNG files in current directory
for png_file in glob.glob("*.png"):
    # Open image
    img = Image.open(png_file)
    
    # Resize if needed (max 1200px width)
    if img.width > 1200:
        ratio = 1200 / img.width
        new_height = int(img.height * ratio)
        img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
    
    # Save as WebP
    webp_file = png_file.replace('.png', '.webp')
    img.save(webp_file, 'WEBP', quality=80, method=6)
    
    print(f"✅ Converted: {png_file} → {webp_file}")

print("\n✅ All done! Move .webp files to public/screenshots/")
PYTHON_SCRIPT
```

---

## 📋 Screenshot Mapping

Based on what you showed:

| Screenshot | File Name | Content |
|-----------|-----------|---------|
| 1️⃣ Maintenance Command Center | `maintenance-command-center.webp` | 128 active work orders, 23% SLA breach |
| 2️⃣ Preventive Maintenance | `preventive-maintenance.webp` | Setup workflow with templates |
| 3️⃣ Property Intelligence Hub | `property-intelligence-hub.webp` | Portfolio overview, 92% occupancy |
| 4️⃣ Tenants & Residents | `tenants-residents.webp` | 142 tenants, 138 active leases |
| 5️⃣ Accounts Receivable | `accounts-receivable.webp` | Cash flow, pending allocation tracking |

---

## ✅ After Converting to WebP

```powershell
# Navigate to project
cd "C:\Projects\Rafid FM System\Rafid Website"

# Verify files are there
ls public\screenshots\

# Stage for git
git add public/screenshots/

# Commit
git commit -m "feat: Add real product screenshots from Rafid system"

# Push
git push origin main
```

---

## 🚀 Quick Steps Summary

1. **Save** 5 screenshots as PNG (use Windows Snipping Tool: Win + Shift + S)
2. **Convert** to WebP (use cloudconvert.com or Python)
3. **Move** WebP files to `public/screenshots/`
4. **Commit** to git: `git add . && git commit -m "Add screenshots"`
5. **Push** to GitHub: `git push origin main`
6. **Done!** Vercel auto-deploys in 2-3 minutes

---

## 📊 Component Will Use These Names

The ScreenshotsSection component expects files named:
- `dashboard.webp`
- `work-orders.webp`
- `properties.webp`
- `tenants.webp`
- `invoices.webp`

You can either:
- **A)** Name your files exactly like this, OR
- **B)** Update component to match your file names

---

## 🎓 What Each Screenshot Shows

### Screenshot 1: Maintenance Command Center
- **Best For**: Work Orders/Maintenance features
- **Shows**: 128 active work orders, SLA tracking, tech utilization
- **File**: `maintenance-command-center.webp` or `work-orders.webp`

### Screenshot 2: Preventive Maintenance
- **Best For**: Proactive maintenance features
- **Shows**: PM setup workflow, templates, automation
- **File**: `preventive-maintenance.webp` (or use as alternative work-orders view)

### Screenshot 3: Property Intelligence Hub
- **Best For**: Portfolio management
- **Shows**: Property overview, buildings, units, occupancy metrics
- **File**: `property-intelligence-hub.webp` or `properties.webp`

### Screenshot 4: Tenants & Residents
- **Best For**: Tenant management
- **Shows**: 142 tenants, 138 active leases, contact info
- **File**: `tenants-residents.webp` or `tenants.webp`

### Screenshot 5: Accounts Receivable Activity  
- **Best For**: Financial/billing features
- **Shows**: Cash flow (OMR 1,000), pending allocation, payments
- **File**: `accounts-receivable.webp` or `invoices.webp`

---

## 🎯 File Naming for Component

Update names to match component expectations:

```python
# Rename mapping:
'maintenance-command-center.webp' → 'work-orders.webp'
'preventive-maintenance.webp' → (skip or use for alternative design)
'property-intelligence-hub.webp' → 'properties.webp'
'tenants-residents.webp' → 'tenants.webp'
'accounts-receivable.webp' → 'invoices.webp'
```

Or you can rename them in the component if you prefer different names.

---

## ❓ Need Help?

**Q: Image conversion too complicated?**
A: Use https://cloudconvert.com/png-to-webp - it's free and easy

**Q: Don't have Python?**
A: Use the online converter above

**Q: Files not showing on website?**
A: Check file names match exactly (case-sensitive on Linux)

**Q: Deployment takes too long?**
A: Normal - Vercel takes 2-3 minutes. Check: https://vercel.com/dashboard

---

Done! You're just 5 steps away from a professional product showcase! 🚀

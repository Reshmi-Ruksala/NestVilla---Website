# 📸 How to Add Your Villa Photos

Follow these simple steps to add your villa photos to the website.

## 🎯 Quick Steps

### 1. Open VS Code
- Open your NestVilla project in VS Code
- Navigate to the file explorer on the left

### 2. Find the Assets Folder
- Go to: `frontend` → `public` → `assets`
- You'll see two folders:
  - `mangrove-nest` (for Mangrove Nest villa photos)
  - `cozy-nest` (for Cozy Nest villa photos)

### 3. Add Your Photos
**For Mangrove Nest:**
1. Open the `mangrove-nest` folder
2. Drag and drop your villa photos here
3. Rename them to:
   - `exterior.jpg` (main exterior view)
   - `pool.jpg` (pool area)
   - `living-room.jpg` (living room)
   - `bedroom.jpg` (bedroom)
   - `mangrove-view.jpg` (mangrove view)

**For Cozy Nest:**
1. Open the `cozy-nest` folder
2. Drag and drop your villa photos here
3. Rename them to:
   - `exterior.jpg` (main exterior view)
   - `garden.jpg` (garden area)
   - `living-room.jpg` (living room)
   - `bedroom.jpg` (bedroom)
   - `hot-tub.jpg` (hot tub area)

### 4. Delete README Files
- After adding your photos, delete the `README.md` files in each folder
- Keep only your actual photo files

## 📋 Photo Requirements

- **File formats**: JPG, PNG, WebP, or GIF
- **Recommended size**: 1920x1080 pixels or higher
- **File size**: Keep under 5MB each for faster loading
- **Names**: Must match exactly (case-sensitive)

## 🔍 Example Structure

After adding photos, your folders should look like:

```
frontend/public/assets/
├── mangrove-nest/
│   ├── exterior.jpg
│   ├── pool.jpg
│   ├── living-room.jpg
│   ├── bedroom.jpg
│   └── mangrove-view.jpg
└── cozy-nest/
    ├── exterior.jpg
    ├── garden.jpg
    ├── living-room.jpg
    ├── bedroom.jpg
    └── hot-tub.jpg
```

## ✅ Verification

Once you add the photos:
1. Save all files in VS Code
2. Your website will automatically show the new photos
3. Check these pages:
   - Home page (villa cards)
   - Individual villa pages
   - Photo gallery

## 🆘 Troubleshooting

**Photos not showing?**
- Check file names match exactly
- Ensure photos are in the correct folders
- Verify file formats are supported
- Refresh your browser

**Need more photos?**
- Add additional photos to the folders
- Edit `backend/data/villas.js` 
- Add new image paths to the `images` array

## 🎉 You're Done!

Once you follow these steps, your beautiful villa photos will appear throughout the website automatically. No coding required!

---

**Need help?** The photos should appear immediately after adding them to the correct folders with the right names.

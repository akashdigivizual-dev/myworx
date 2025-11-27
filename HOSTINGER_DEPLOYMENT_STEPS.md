# 🚀 Step-by-Step Hostinger Deployment

## Quick Start (5 Minutes)

### Prerequisites Check
- [x] Hostinger account with cPanel access
- [x] Domain pointing to Hostinger
- [x] Your production build ready: `dist/` folder
- [x] .htaccess file content (provided below)

---

## 📋 Step 1: Prepare Your Files

### Verify Build Exists
```bash
# On your local computer, check:
ls dist/
ls dist/assets/

# You should see:
# ✓ index.html
# ✓ assets/ folder with images/video/js/css
```

### Create .htaccess Content
Create a file named `.htaccess` (note the dot) with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite index.html
  RewriteRule ^index\.html$ - [L]
  
  # Don't rewrite existing files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule . /index.html [L]
</IfModule>
```

Save this as a text file named `.htaccess` on your computer.

---

## 🌐 Step 2: Login to Hostinger

### Access cPanel
1. Go to **https://hpanel.hostinger.com** (or your Hostinger dashboard)
2. **Login** with your Hostinger credentials
3. Select your domain
4. Click **Manage** or **Admin**
5. Open **cPanel** button

### In cPanel
- Look for **File Manager** section
- Click **File Manager** icon

---

## 📁 Step 3: Access public_html Folder

### Navigate to Root
1. **File Manager** opens with current folder view
2. Look for **public_html** folder on the left sidebar
3. Click **public_html** to enter it
4. This is your website root folder

### Current Contents
You should see:
- Existing website files (if any)
- Old index.html (if any)
- Other files to be replaced

---

## 🗑️ Step 4: Clear Existing Files (Optional)

### If You Have Old Website
1. Select all files in public_html
   - Use **Ctrl+A** or click "Select All" button
2. Right-click and choose **Delete**
3. Confirm deletion

### If Starting Fresh
- Skip this step and upload new files directly

---

## 📤 Step 5: Upload Production Build Files

### Method A: Using File Manager (Easiest)

**Upload index.html**
1. Click **Upload** button (top menu)
2. Choose `index.html` from your `dist/` folder
3. Click **Open** and wait for upload to complete

**Upload assets folder**
1. Click **Upload** button again
2. Find and select the entire `assets/` folder from `dist/`
3. Upload completes (may take 2-3 minutes due to video file)

**Upload .htaccess**
1. Click **Upload** button
2. Select the `.htaccess` file you created
3. Upload complete

### Method B: Using Drag & Drop
1. Open File Manager in one window
2. Open `dist/` folder in another window on your computer
3. Drag all files from `dist/` to **public_html** in File Manager
4. Wait for all uploads to complete

### Method C: Using FTP (Advanced)

**Get FTP Credentials:**
1. In cPanel, find **FTP Accounts**
2. Click **Create FTP Account**
3. Create new account or view existing
4. Copy: Host, Username, Password

**Connect via FTP Client (FileZilla, WinSCP):**
```
Host: ftp.yourdomain.com (or from cPanel)
Username: [From FTP Account]
Password: [From FTP Account]
Port: 21
```

**Upload:**
- Navigate to `public_html`
- Upload all files from local `dist/` folder
- Upload `.htaccess` file

---

## ✅ Step 6: Verify Upload

### Check in File Manager
- [x] `index.html` present
- [x] `assets/` folder present
- [x] `.htaccess` file present

### Check Assets Folder
Click **assets** folder to verify:
- [x] `image-DyGeFjtL.png` (logo)
- [x] `B6_Sector4-BG6OQj7S.JPG` (sector 4 image)
- [x] `D99_Sector2-CwlpjJzY.JPG` (sector 1 image)
- [x] `A67_Sector2-WXmn3Suw.JPG` (sector 2 image)
- [x] `carousel_1-BrRU0LEt.mp4` (video)
- [x] `index-D5BoCBob.css` (styles)
- [x] `index-Bz7ISeY_.js` (scripts)

---

## 🔍 Step 7: Test Your Website

### Clear Browser Cache
1. Press **Ctrl+Shift+Delete** (or Cmd+Shift+Delete on Mac)
2. Select **All time**
3. Check **Cookies and other site data**
4. Click **Clear data**

### Visit Your Domain
1. Open new browser tab
2. Type your domain: **https://yourdomain.com**
3. Wait 5-10 seconds for initial load

### Verify Homepage
- [x] Logo appears in top-left navbar
- [x] Hero video plays in background
- [x] "Welcome to Myworx" text displays
- [x] CTA button visible
- [x] Navigation menu works

---

## 🧪 Step 8: Test All Pages

### Home Page
```
https://yourdomain.com/
✓ Hero video plays
✓ Logo visible
✓ Navigation works
```

### About Page
```
https://yourdomain.com/about
✓ Page loads
✓ Content displays
✓ Images load
```

### Locations Page
```
https://yourdomain.com/locations
✓ 3 location cards display
✓ All 3 images load:
   - Sector 4 image ✓
   - Sector 1 image ✓
   - Sector 2 image ✓
✓ Zoom effect on hover works
```

### Private Cabin Page
```
https://yourdomain.com/private-cabin
✓ Page loads
✓ Content displays
```

### Day Pass Page
```
https://yourdomain.com/day-pass-coworking
✓ Page loads
✓ Content displays
```

### Contact Page
```
https://yourdomain.com/contact
✓ Form displays
✓ Form fields work
✓ Submit button works
```

### Team Member Pages
```
https://yourdomain.com/manoj-kumar-myworx
✓ Manoj bio page loads ✓

https://yourdomain.com/pankaj-rathi
✓ Pankaj bio page loads ✓
```

### Test Navigation
- [x] Click menu links - all pages work
- [x] Use browser back/forward buttons
- [x] No 404 errors (404 means .htaccess not working)

---

## 🚨 Troubleshooting

### Issue: Logo Not Showing

**Check 1: File Exists**
- File Manager → assets folder
- Look for file starting with `image-`
- ✓ Should be there

**Check 2: Browser Cache**
- Press Ctrl+Shift+Delete
- Clear all cache
- Refresh page

**Check 3: .htaccess**
- Verify `.htaccess` file is in `public_html` root
- Not in assets or other folder
- Should be visible in File Manager

### Issue: Images Not Loading on Locations Page

**Check:**
- File Manager → assets folder
- Look for files: `B6_Sector4-`, `D99_Sector2-`, `A67_Sector2-`
- ✓ All 3 JPG files should be there
- File sizes should be 9-14 MB each

**Fix:**
- Verify .htaccess is present
- Clear browser cache
- Refresh page

### Issue: Routes Not Working (404 Errors)

**This means .htaccess is not configured**

**Fix:**
1. File Manager → public_html
2. Right-click empty space → Create New File
3. Name it: `.htaccess`
4. Edit the file (right-click → Edit)
5. Paste the .htaccess content (from Step 4)
6. Save and close
7. Test page refresh

### Issue: Video Not Playing

**Possible causes:**
- Video file size (25.5 MB - may take time to buffer)
- Bandwidth limitations (free plan)
- Browser compatibility

**Check:**
- Video file `carousel_1-` exists in assets
- File size shows 25+ MB
- Browser dev tools Network tab (Ctrl+Shift+K)

**Solution:**
- Wait 10-20 seconds for first load
- Try different browser
- Consider reducing video file size (ffmpeg compression)

### Issue: Site Loads Slowly

**Likely cause:** Video file (25.5 MB)

**Solutions:**
1. Wait for initial page cache
2. Upgrade Hostinger plan (more bandwidth)
3. Compress video file using ffmpeg
4. Place video on CDN

---

## 📞 Hostinger Support

If you encounter issues:

1. **Live Chat** (24/7)
   - Hostinger cPanel → Support
   - Click "Chat with us"

2. **Help Center**
   - https://support.hostinger.com

3. **Email Support**
   - support@hostinger.com

**Tell them:** "React app with .htaccess configuration on shared hosting"

---

## ✨ Success Indicators

Your deployment is successful when:

✅ Homepage loads without errors
✅ Logo displays in navbar
✅ All 3 location images display
✅ Hero video plays
✅ All navigation links work
✅ Clicking "Locations" shows 3 cards with images
✅ No 404 errors in browser console
✅ Page refreshing works (doesn't show 404)
✅ Mobile view is responsive
✅ Contact form is visible

---

## 🎉 You're Live!

Once all tests pass:

1. **Your website is live:** https://yourdomain.com
2. **Share with team/clients**
3. **Monitor for issues**
4. **Update content as needed**

### Next Steps (Optional):
- Monitor analytics
- Set up email notifications
- Enable SSL/HTTPS (usually default on Hostinger)
- Set up CDN for better performance
- Optimize video with compression

---

## 📊 Files to Upload

```
dist/
├── index.html                          (UPLOAD)
├── assets/
│   ├── image-DyGeFjtL.png             (UPLOAD - Logo)
│   ├── D99_Sector2-CwlpjJzY.JPG       (UPLOAD - Sector 1)
│   ├── A67_Sector2-WXmn3Suw.JPG       (UPLOAD - Sector 2)
│   ├── B6_Sector4-BG6OQj7S.JPG        (UPLOAD - Sector 4)
│   ├── carousel_1-BrRU0LEt.mp4        (UPLOAD - Video)
│   ├── index-D5BoCBob.css             (UPLOAD)
│   └── index-Bz7ISeY_.js              (UPLOAD)

.htaccess                              (CREATE & UPLOAD)
```

---

**Ready to go live? Follow these 8 steps and your Myworx website will be online! 🚀**

# Hostinger Deployment Guide for Myworx SPA

## Prerequisites
- Node.js installed locally
- npm or yarn package manager
- Git installed
- Hostinger account with cPanel access

## Build and Deployment Steps

### 1. Build the Project Locally
```bash
npm run build
```
This generates the `dist` folder with all production-ready files.

### 2. Connect to Hostinger via cPanel
- Log in to your Hostinger account
- Open File Manager or use FTP/SFTP

### 3. Upload Files
- Upload all contents of the `dist` folder to your `public_html` directory
- **Important**: Include the `.htaccess` file - it's crucial for SPA routing

### 4. Verify .htaccess Exists
- The `.htaccess` file should be in the root of `public_html`
- This file handles URL rewriting for React Router

### 5. Clear Browser Cache
- Clear your browser cache completely
- Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

## File Structure in public_html
```
public_html/
├── .htaccess                 ← CRITICAL FILE
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
└── vite.svg
```

## Troubleshooting

### Issue: "Page Not Found" on Refresh
**Solution**: Ensure `.htaccess` is uploaded to `public_html` root directory.

### Issue: Footer Buttons Not Working
**Solution**: Check that all links use relative paths (e.g., `/about` not `http://localhost/about`)

### Issue: Images Not Loading
**Solution**: Check image paths in components - they should be relative to public_html

### Issue: Styles Not Loading
**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R)

## Additional Configuration

### Enable Compression on Hostinger
1. Go to cPanel
2. Look for "Optimize Website" or "Compress Files"
3. Enable GZIP compression for better performance

### Monitor Performance
1. Check Hostinger's error logs in cPanel
2. Monitor server resources
3. Use Hostinger's analytics dashboard

## Important Notes
- Never upload `node_modules` folder
- Never upload `.git` folder
- Only upload contents of `dist` folder (not the `src` folder)
- Keep a backup of your code locally
- Test thoroughly before deploying changes

## Deployment Checklist
- [ ] Build project locally
- [ ] Verify `.htaccess` file is in dist folder
- [ ] Upload all files from dist to public_html
- [ ] Confirm `.htaccess` exists in public_html
- [ ] Clear browser cache
- [ ] Test navigation between pages
- [ ] Test page refresh/reload
- [ ] Test all buttons and links
- [ ] Verify images load correctly

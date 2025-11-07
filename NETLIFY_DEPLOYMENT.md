# Ask DD Landing Page - Netlify Deployment Guide

## Quick Deployment (5 minutes)

Netlify will handle everything automatically - just connect your GitHub repository!

---

## Step 1: Prepare Your Repository

### Push to GitHub
```bash
cd /app
git init
git add .
git commit -m "Initial commit for Netlify deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

---

## Step 2: Deploy to Netlify

### Option A: Using Netlify UI (Recommended)

1. **Go to Netlify:**
   - Visit: https://app.netlify.com/
   - Sign up or log in (you can use GitHub account)

2. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your repository

3. **Configure Build Settings:**
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`
   - **Node version:** Will use Node 20 (configured in netlify.toml)

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - You'll get a URL like: `https://random-name-123456.netlify.app`

### Option B: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
cd /app/frontend
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: ask-dd-landing-page (or custom name)
# - Build command: yarn build
# - Directory to deploy: build

# Deploy
netlify deploy --prod
```

---

## Step 3: Configure Custom Domain (Optional)

1. **In Netlify Dashboard:**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Enter your domain (e.g., `askdd.com`)

2. **Update DNS:**
   - Add DNS records as shown by Netlify
   - SSL certificate will be automatically provisioned

---

## Step 4: Access Form Submissions

### View Form Submissions in Netlify

1. **Go to your site dashboard**
2. **Click "Forms" in the top menu**
3. **You'll see all form submissions with:**
   - Name
   - Email
   - Location
   - Website
   - Submission date/time

### Set Up Email Notifications

1. **In Forms settings:**
   - Click "Form notifications"
   - Click "Add notification"
   - Choose "Email notification"
   - Enter: `askdd@ddconsult.tech`
   - Click "Save"

2. **Now you'll receive an email every time someone submits the form!**

### Export Form Data

- You can export form submissions as CSV
- Go to Forms → Click the form name → "Export as CSV"

---

## Features Enabled

### ✅ What's Working:

1. **Auto-Deploy:**
   - Every push to `main` branch automatically deploys
   - Build status notifications
   - Preview deployments for pull requests

2. **Netlify Forms:**
   - No backend needed!
   - Form submissions captured automatically
   - Email notifications to askdd@ddconsult.tech
   - Spam protection (honeypot)
   - CSV export available

3. **Node 20:**
   - Configured in `netlify.toml`
   - Automatic dependency installation

4. **Performance:**
   - Global CDN
   - Automatic HTTPS/SSL
   - Image optimization
   - Gzip compression

5. **Other Features:**
   - Chatbot widget loads correctly
   - SPA routing works (React Router)
   - Security headers configured

---

## Configuration Files Created

### `/app/netlify.toml`
- Build settings
- Node version (20)
- Redirects for SPA
- Security headers

### `/app/frontend/public/_redirects`
- Fallback for React Router

### Updated Form Component
- Uses Netlify Forms instead of backend API
- Includes spam protection
- Works without JavaScript enabled

---

## Testing Your Deployment

1. **Visit your Netlify URL**
2. **Test the form:**
   - Click "Start Your Free Trial"
   - Fill in the form
   - Submit
   - Check Netlify Forms dashboard
   - Check your email (askdd@ddconsult.tech)

3. **Test chatbot:**
   - Orange button should appear in bottom-right
   - Click to open chat widget

---

## Troubleshooting

### Build Failed

**Check build logs in Netlify:**
- Go to "Deploys" tab
- Click on the failed deploy
- Check error messages

**Common fixes:**
```bash
# Clear cache and rebuild
netlify build --clear-cache

# Or in Netlify UI:
# Deploys → Trigger deploy → Clear cache and deploy site
```

### Form Not Working

**Checklist:**
- [ ] Hidden form exists in `index.html`
- [ ] Form has `name="contact"` attribute
- [ ] Form has `data-netlify="true"` attribute
- [ ] All input fields have `name` attributes
- [ ] Redeploy after making changes

**Force Netlify to detect form:**
```bash
# Make sure the hidden form is in index.html
# Then redeploy
git add .
git commit -m "Update form configuration"
git push
```

### Chatbot Not Appearing

**Check:**
- Browser console for errors
- Network tab to see if script loads
- Script URL is accessible: https://askdd-widget.ddconsult.net.au/widget.js

### SPA Routes Not Working (404 errors)

**Make sure you have:**
- `/app/frontend/public/_redirects` file
- Or `[[redirects]]` in `netlify.toml`

---

## Environment Variables (If Needed)

If you need to add environment variables:

1. **In Netlify Dashboard:**
   - Site settings → Environment variables
   - Click "Add a variable"
   - Key: `REACT_APP_VARIABLE_NAME`
   - Value: `your-value`

2. **Important:** All React env variables must start with `REACT_APP_`

---

## Continuous Deployment

### Auto-Deploy Setup:

✅ **Already configured!** Every time you:
- Push to `main` branch
- Netlify automatically builds and deploys
- You get email notification of deploy status

### Deploy Previews:

- Create a pull request
- Netlify creates a preview deployment
- Test changes before merging

### Branch Deploys:

1. **Enable branch deploys:**
   - Site settings → Build & deploy → Continuous deployment
   - "Branch deploys" → "Let me add individual branches"
   - Add branches you want to auto-deploy

---

## Cost

**FREE tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month
- 100 form submissions/month
- Unlimited sites
- Automatic HTTPS
- Deploy previews

**Paid plans start at $19/month if you need:**
- More bandwidth
- More form submissions
- Background functions
- Analytics

---

## Next Steps

1. **Custom Domain:**
   - Add your domain (askdd.com)
   - Configure DNS
   - SSL automatically provisioned

2. **Analytics:**
   - Enable Netlify Analytics ($9/month)
   - Or add Google Analytics for free

3. **Form Integrations:**
   - Connect to Zapier
   - Send to Slack
   - Add to Google Sheets

4. **Performance:**
   - Enable asset optimization
   - Configure cache headers
   - Add prerendering for SEO

---

## Advantages of Netlify Deployment

✅ **Simple:** No backend server management
✅ **Fast:** Global CDN, instant deploys
✅ **Free:** Generous free tier
✅ **Forms:** Built-in form handling
✅ **Auto-Deploy:** Push to GitHub = instant deploy
✅ **Preview:** Test changes before going live
✅ **SSL:** Automatic HTTPS
✅ **No DevOps:** Focus on your product, not infrastructure

---

## Support

If you need help:
- Netlify Docs: https://docs.netlify.com/
- Netlify Support: https://answers.netlify.com/
- Check build logs in Netlify dashboard

Your Ask DD landing page is ready to deploy! 🚀

# Ask DD Landing Page - AWS Deployment Guide (Option 1)

## Prerequisites
- AWS Account
- GitHub repository with your code
- MongoDB Atlas account (free tier available)
- Domain name (optional but recommended)

---

## Part 1: Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Cluster
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up or log in
3. Click "Build a Database"
4. Choose **FREE** tier (M0)
5. Select AWS as cloud provider
6. Choose a region close to your users
7. Click "Create Cluster"

### Step 2: Configure Database Access
1. Click "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### Step 3: Configure Network Access
1. Click "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 4: Get Connection String
1. Click "Database" in left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password
6. Replace `myFirstDatabase` with `askdd_db`

Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/askdd_db?retryWrites=true&w=majority`

**Save this connection string - you'll need it for backend deployment!**

---

## Part 2: Backend Deployment (AWS Elastic Beanstalk)

### Step 1: Install AWS CLI and EB CLI
```bash
# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter default region (e.g., us-east-1)
# Enter output format: json

# Install Elastic Beanstalk CLI
pip install awsebcli
```

### Step 2: Prepare Backend for Deployment
```bash
cd /app/backend

# Initialize EB application
eb init -p python-3.11 ask-dd-backend --region us-east-1

# Create environment
eb create ask-dd-production
```

### Step 3: Configure Environment Variables
```bash
# Set all environment variables
eb setenv MONGO_URL="your-mongodb-atlas-connection-string" \
  DB_NAME="askdd_db" \
  SMTP_HOST="smtp.gmail.com" \
  SMTP_PORT="465" \
  SMTP_USER="amrit@ddconsult.tech" \
  SMTP_PASSWORD="ofihsizrrntvxudt" \
  CONTACT_EMAIL="askdd@ddconsult.tech" \
  CORS_ORIGINS="*"
```

**Note:** We'll update CORS_ORIGINS with your actual frontend domain after frontend deployment.

### Step 4: Deploy Backend
```bash
eb deploy
```

### Step 5: Get Backend URL
```bash
eb status
```

Look for "CNAME" - this is your backend URL (e.g., `ask-dd-production.us-east-1.elasticbeanstalk.com`)

**Save this URL - you'll need it for frontend deployment!**

---

## Part 3: Frontend Deployment (AWS Amplify)

### Step 1: Push Code to GitHub
```bash
cd /app
git init
git add .
git commit -m "Initial commit for deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to AWS Amplify
1. Go to AWS Amplify Console: https://console.aws.amazon.com/amplify/
2. Click "New app" → "Host web app"
3. Choose "GitHub" and authorize access
4. Select your repository and branch (main)
5. Click "Next"

### Step 3: Configure Build Settings
1. App name: `ask-dd-landing-page`
2. Environment name: `production`
3. Edit the build settings YAML:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd frontend
        - yarn install
    build:
      commands:
        - yarn build
  artifacts:
    baseDirectory: frontend/build
    files:
      - '**/*'
  cache:
    paths:
      - frontend/node_modules/**/*
```

4. Click "Next"

### Step 4: Add Environment Variable
1. Click "Advanced settings"
2. Add environment variable:
   - Key: `REACT_APP_BACKEND_URL`
   - Value: `https://YOUR-BACKEND-URL` (the EB CNAME from Part 2, Step 5)
   
   Example: `https://ask-dd-production.us-east-1.elasticbeanstalk.com`

3. Click "Save and deploy"

### Step 5: Wait for Deployment
- Amplify will build and deploy your frontend (takes 5-10 minutes)
- You'll get a URL like: `https://main.xxxxxx.amplifyapp.com`

---

## Part 4: Update CORS Settings

Now that you have your frontend URL, update backend CORS:

```bash
cd /app/backend
eb setenv CORS_ORIGINS="https://main.xxxxxx.amplifyapp.com"
eb deploy
```

---

## Part 5: Testing Your Deployment

### Test Backend
```bash
curl https://YOUR-BACKEND-URL/api/
```
Should return: `{"message":"Hello World"}`

### Test Frontend
1. Visit your Amplify URL: `https://main.xxxxxx.amplifyapp.com`
2. Page should load completely
3. Chatbot widget should appear in bottom-right corner
4. Test the contact form by clicking "Start Your Free Trial"
5. Fill in the form and submit
6. Check your email (askdd@ddconsult.tech) for the submission

---

## Part 6: Custom Domain (Optional)

### For Frontend (Amplify)
1. In Amplify Console, click "Domain management"
2. Click "Add domain"
3. Enter your domain (e.g., askdd.com)
4. Follow DNS configuration instructions
5. Amplify will provision SSL certificate automatically

### For Backend (Optional - API Gateway)
If you want a custom domain for your backend:
1. Use AWS API Gateway in front of Elastic Beanstalk
2. Configure custom domain in API Gateway
3. Update frontend `REACT_APP_BACKEND_URL` to use custom domain

---

## Troubleshooting

### Backend Issues

**502 Bad Gateway:**
```bash
# Check logs
eb logs

# Common fix: Restart application
eb restart
```

**Environment variables not working:**
```bash
# Verify environment variables
eb printenv

# Re-set if needed
eb setenv KEY="value"
```

**MongoDB connection failed:**
- Verify connection string in environment variables
- Check MongoDB Atlas IP whitelist (should allow 0.0.0.0/0)
- Ensure database user has correct permissions

### Frontend Issues

**Build failed:**
- Check build logs in Amplify Console
- Verify `amplify.yml` path configuration
- Ensure all dependencies are in `package.json`

**API calls failing (CORS errors):**
- Check browser console for error details
- Verify `REACT_APP_BACKEND_URL` is set correctly
- Update backend `CORS_ORIGINS` with frontend domain

**Chatbot not appearing:**
- Check browser console for JavaScript errors
- Verify chatbot script loads: https://askdd-widget.ddconsult.net.au/widget.js
- Check network tab to see if script is blocked

### Email Issues

**Emails not sending:**
- Verify SMTP credentials are correct
- Check backend logs: `eb logs`
- Test SMTP connection manually
- Ensure Gmail app password is valid

---

## Deployment Checklist

- [ ] MongoDB Atlas cluster created and connection string obtained
- [ ] Backend deployed to Elastic Beanstalk
- [ ] Backend environment variables configured
- [ ] Backend URL obtained and tested
- [ ] Code pushed to GitHub
- [ ] Frontend deployed to Amplify
- [ ] Frontend environment variable set (REACT_APP_BACKEND_URL)
- [ ] CORS updated on backend with frontend URL
- [ ] Website tested end-to-end
- [ ] Contact form tested and email received
- [ ] Chatbot widget working
- [ ] (Optional) Custom domain configured

---

## Cost Estimate

- **MongoDB Atlas (Free tier):** $0/month
- **AWS Elastic Beanstalk:** ~$20-30/month (t2.micro instance)
- **AWS Amplify:** ~$0-15/month (depends on traffic)
- **Total:** ~$20-45/month

---

## Support

If you encounter issues:
1. Check logs: `eb logs` for backend, Amplify Console for frontend
2. Review error messages carefully
3. Search AWS documentation
4. Check MongoDB Atlas connection

---

## Next Steps After Deployment

1. **Monitor your application:**
   - Set up CloudWatch alarms
   - Monitor Amplify build logs
   - Check EB health dashboard

2. **Optimize:**
   - Enable CloudFront CDN (Amplify does this automatically)
   - Configure auto-scaling for backend
   - Set up database backups

3. **Security:**
   - Restrict MongoDB IP access to your EB security group
   - Use AWS Secrets Manager for sensitive credentials
   - Enable HTTPS only

4. **Marketing:**
   - Add Google Analytics
   - Set up SEO metadata
   - Create sitemap.xml

Your Ask DD landing page is now live! 🚀

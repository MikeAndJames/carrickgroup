# Carrick Group Website (`carrickgroup.co.uk`)

Official website for **Carrick Investment Co., Ltd / Công Ty TNHH Đầu Tư Carrick** (Managed by Mrs. Anh Đào Carrick, BA, PG Cert, MA, FCCA).

## 🚀 Easy Deployment Guide for Dad & Mike

### 1. Pushing to GitHub / Git
All git initialization and local commits have been run automatically.
To push to your remote GitHub repository:
```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/carrickgroup.git
git branch -M main
git push -u origin main
```

### 2. Vercel Hosting (3 Clicks)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** -> **Project**.
3. Select your `carrickgroup` repository from GitHub and click **Deploy**.

### 3. Link GoDaddy Domain (`carrickgroup.co.uk`)
1. In Vercel: Go to **Project Settings** -> **Domains** -> Add `carrickgroup.co.uk` and `www.carrickgroup.co.uk`.
2. In GoDaddy: Go to **DNS Management** for `carrickgroup.co.uk` and configure:
   - **Type**: `A` | **Name**: `@` | **Value**: `76.76.21.21`
   - **Type**: `CNAME` | **Name**: `www` | **Value**: `cname.vercel-dns.com`
3. SSL security certificate will activate automatically within minutes!

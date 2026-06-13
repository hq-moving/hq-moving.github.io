# Headquarters Moving — Next.js Website

Office furniture installation and moving services site for [headquartersmoving.com](https://www.headquartersmoving.com).

## Stack

- **Next.js 14** (App Router, static export for S3/CloudFront)
- **Tailwind CSS**
- **EmailJS** contact form

## Requirements

- **Node.js 18.17+** (see `.nvmrc`)

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Add EmailJS keys as `NEXT_PUBLIC_EMAILJS_*` (renamed from `REACT_APP_*`).

## Development

```bash
npm run dev
```

## Deploy to AWS

```bash
npm run deploy-s3
```

Static files export to `out/` and sync to S3.

After `next build`, a postbuild step copies each `*.html` page to an extensionless file (e.g. `contact.html` → `contact`) so clean URLs like `/contact` work on S3/CloudFront without `.html` in the path.

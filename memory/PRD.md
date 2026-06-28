# VJS Smart Systems — Enterprise Website

## Original Problem Statement
Premium enterprise website for VJS Smart Systems — an Industrial Automation, IoT, PLC, SCADA, Control Panels, Wireless Monitoring, Robotics and Industry 4.0 engineering company. Quality benchmark: Apple, Stripe, Linear + Siemens, ABB, Schneider Electric. Five pages preserved verbatim from the uploaded plan: Home, About Us, Products, Product Detail, Contact Us.

## Architecture
- **Frontend**: React 19 + React Router 7, Tailwind CSS, Framer Motion, shadcn/ui, lucide-react, sonner toasts
- **Backend**: FastAPI on `/api/*` (inquiries POST/GET, health)
- **DB**: MongoDB (`inquiries` collection)
- **Design**: Clash Display + Plus Jakarta Sans + JetBrains Mono | Enterprise White + `#1F3CD0` blue (post color-swap from initial dark/amber theme)

## User Personas
- Factory owners, plant managers, engineering teams, manufacturing companies, procurement teams, system integrators.

## Core Requirements (static)
- Five pages with VERBATIM section headings from the uploaded plan
- Lead capture (Inquiry form + per-product Quote form) persisted to Mongo
- Industrial visual quality, motion-driven scroll storytelling, sticky navbar, responsive mobile

## What's Been Implemented (Feb 2026)
- Backend: `POST /api/inquiries`, `GET /api/inquiries`, `GET /api/health`
- Frontend pages: Home, About, Products (with category filter + search), Product Detail (with sticky Quote form + Amazon CTA), Contact (with Maps embed + WhatsApp button), 404
- Layout: sticky transparent→solid navbar, premium enterprise footer
- Motion: scroll reveals, animated counters, hover transitions
- Featured products + 15-product catalog with categories, specs, applications, benefits, deliverables
- Color system: full white/blue enterprise theme (#1F3CD0) per user request

## Backlog
- **P1**: Resend/SMTP email delivery on inquiry submit, image gallery + zoom on product detail
- **P1**: SEO metadata, sitemap.xml, structured data (Organization + Product schema)
- **P2**: Replace placeholder phone/email/address/Amazon links with real company data
- **P2**: Case study pages, blog/insights, multi-language support
- **P2**: Admin dashboard to view inquiries (currently DB-only)

## Test Credentials
N/A — no auth implemented.

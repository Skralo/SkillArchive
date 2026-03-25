# SkillArcade MVP

SkillArcade is a premium trust-first marketplace for Claude `skill.md` business skill packages.

## Core Product Message

**Turn Claude from a generic AI into a specialized business operator.**

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Firebase Auth + Firestore + Storage
- Stripe + Stripe Connect compatible checkout architecture

## Project Architecture

```txt
app/
  (marketing + product pages)
  api/
    checkout/                # Stripe payment intent + commission + payout hold metadata
    listing/submit/          # listing submission pipeline entrypoint
    moderation/prereview/    # AI-assisted pre-review (rule-based MVP stub)
    webhooks/stripe/         # post-payment event entrypoint
components/
  layout/                    # global navbar/footer
  listing/                   # listing card and listing UI blocks
  seller/                    # seller profile cards
  dashboard/                 # shared dashboard cards
  ui/                        # reusable primitives
lib/
  auth/                      # Firebase auth wrappers
  db/                        # Firebase client initialization
  data/                      # seed data
  moderation/                # pre-review signals and scoring
  payments/                  # Stripe helpers, commission + hold logic
  analytics/                 # seller analytics aggregator
  services/                  # query/aggregation services for pages
scripts/
  seed.ts                    # seed payload preview command
```

## Marketplace Data Model (Firestore Collections)

- `Users`
- `SellerProfiles`
- `Listings`
- `ListingFiles`
- `ProofItems`
- `Reviews` (verified-purchase only)
- `Orders`
- `Payouts`
- `Categories`
- `Industries`
- `Badges`
- `FeaturedSlots`
- `Bundles`
- `VerificationRequests`
- `SavedListings`
- `Reports`

See `lib/types.ts` for MVP schema typing.

## Key Product Routes

- `/` Homepage (conversion, trust, featured, leaderboard)
- `/marketplace` Filter/ranking-ready listing discovery
- `/listing/[id]` Listing details + proof + reviews + purchase CTA
- `/seller/[slug]` Public seller profile + badges + live listings
- `/seller/dashboard` Seller analytics, listings, payout summary
- `/buyer` Buyer downloads, purchase history, recommendations
- `/checkout` Stripe-based checkout shell
- `/admin` Moderation queue + trust operations shell
- `/auth/login`, `/auth/register`

## Trust & Moderation Pipeline

1. Seller submits listing payload + files.
2. `/api/moderation/prereview` runs quality checks:
   - missing required fields
   - spam-risk phrase heuristics
   - proof quality signal
3. `/api/listing/submit` returns moderation status:
   - `submitted` when ready
   - `needs_changes` when low quality
4. Admin uses `/admin` queue for approve/reject/request changes.
5. Approved listings become visible in discovery surfaces.

## Payments, Refund & Payout Logic

- Stripe PaymentIntent with `application_fee_amount` for platform commission.
- Commission logic in `lib/payments/stripe.ts`.
- Seller payouts are delayed via `PAYOUT_HOLD_DAYS` (default 10 days).
- Limited refund handling is represented on orders (`refundStatus`) and checkout messaging.
- `app/api/webhooks/stripe` is ready for production event wiring (order finalization + delivery unlock).

## File Delivery Flow

MVP architecture supports:
- `skill.md` + setup + examples + optional case study uploads.
- Purchase unlock creates downloadable package entitlement.
- Optional email delivery can be added through webhook post-processing.

## Seed Data

Includes realistic records for:
- sellers
- listings (Sales, Lead Generation, Outreach, Founder OS wedge)
- categories and industries
- trust badges
- featured slots
- reviews

Run:

```bash
npm run seed
```

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Deployment (Vercel + Firebase + Stripe)

1. Create Firebase project + enable Auth, Firestore, Storage.
2. Add Firebase web credentials to Vercel env variables.
3. Create Stripe platform account and Connect settings.
4. Add `STRIPE_SECRET_KEY` and webhook secret.
5. Deploy on Vercel and configure webhook URL:
   - `https://<your-domain>/api/webhooks/stripe`

## MVP Expansion Ready

The architecture is prepared for:
- promoted listings
- affiliate/referral tracking
- advanced ranking (conversion, recency balance, ROI score)
- multi-model support (Claude-first now, ChatGPT/Gemini next)
- premium verification fee and pro seller tools

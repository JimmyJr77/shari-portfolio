# AI Chat Setup (Vercel AI Gateway)

The Ask chat matches user requirements to Shari's experience and expertise using context from the full site and resume.

**Deployed on Vercel** — The `/api/chat` serverless function runs on Vercel. Add `AI_GATEWAY_API_KEY` in your Vercel project: Settings → Environment Variables.

## LLM: Vercel AI Gateway (GPT-4.1)

The **Vercel AI Gateway** provides unified access to models with no markup on tokens—pay provider list price. Includes free $5 credits monthly to try models.

## Setup

1. **Get an AI Gateway API key**
   - Go to [vercel.com/ai-gateway/api-keys](https://vercel.com/ai-gateway/api-keys)
   - Create an API key
   - **Never commit API keys to the repo** — use environment variables only

2. **Add to Vercel environment variables**
   - In your Vercel project: Settings → Environment Variables
   - Add `AI_GATEWAY_API_KEY` with your key (for Production, Preview, and Development)

3. **Deploy**
   - Push to GitHub; Vercel will deploy automatically
   - The chat API route is at `/api/chat`

## Local Development

To test the chat locally, use `vercel dev` (requires `vercel login`):

```bash
vercel dev
```

Add `AI_GATEWAY_API_KEY` to `.env.local`. This runs both the Vite app and the `/api/chat` serverless function. Using `npm run dev` alone will not have the API route; the chat will show an error until deployed.

## Test script

To test the AI Gateway directly (no web server):

```bash
npm run ai:test
```

Requires `AI_GATEWAY_API_KEY` in `.env.local`.

## Context

The AI reads from:
- Shari's full resume (experience, competencies, education)
- About page content
- Service pillars and KPIs
- Case studies
- Testimonials
- Deliverables

Context is embedded in `api/chat.js`. To update it, edit the `SITE_CONTEXT` constant in that file.

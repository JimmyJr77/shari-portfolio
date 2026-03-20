# AI Chat Setup (Vercel + Groq)

The hero section includes an AI-powered text box that matches user requirements to Shari's experience and expertise using context from the full site and resume.

**Deployed on Vercel** — The `/api/chat` serverless function runs on Vercel. Add `GROQ_API_KEY` in your Vercel project: Settings → Environment Variables.

## LLM: Groq (Free Tier)

**Groq** offers a generous free tier (14,400+ requests/day) and works well with Vercel serverless. No cost for typical portfolio traffic.

## Setup

1. **Get a free Groq API key**
   - Go to [console.groq.com](https://console.groq.com)
   - Sign up and create an API key
   - **Never commit API keys to the repo** — use environment variables only

2. **Add to Vercel environment variables**
   - In your Vercel project: Settings → Environment Variables
   - Add `GROQ_API_KEY` with your key (for Production, Preview, and Development)
   - If a key was ever exposed (e.g. in chat), regenerate it at console.groq.com

3. **Deploy**
   - Push to GitHub; Vercel will deploy automatically
   - The chat API route is at `/api/chat`

## Local Development

To test the chat locally, use `vercel dev` (requires `vercel login`):

```bash
vercel dev
```

This runs both the Vite app and the `/api/chat` serverless function. Using `npm run dev` alone will not have the API route; the chat will show an error until deployed.

## Context

The AI reads from:
- Shari's full resume (experience, competencies, education)
- About page content
- Service pillars and KPIs
- Case studies
- Testimonials
- Deliverables

Context is embedded in `api/chat.js`. To update it, edit the `SITE_CONTEXT` constant in that file.

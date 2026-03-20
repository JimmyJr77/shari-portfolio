import { createGroq } from '@ai-sdk/groq'
import { streamText } from 'ai'

// Context from Shari's portfolio: resume, site content, case studies, testimonials
const SITE_CONTEXT = `
# About Shari Arroyo-Brown - Professional Portfolio Context

## Resume / CV Summary
Contact: 347-954-5735 | sharibrown87@gmail.com | Bowie, MD 20721
Title: Strategic Communications Leader | Brand Manager | Head of Communications and Brand | Director of Communications and Public Affairs

Profile: Strategic communications leader with 15 years of experience driving integrated campaigns, executive visibility, and stakeholder engagement across national platforms. Expert in translating complex initiatives into compelling narratives.

Core Competencies: Strategic Communications Planning, Data-Driven Storytelling, Brand and Creative Direction, Media Relations, Crisis Communications, Stakeholder Engagement, Executive/Partner Visibility, Staff Development.

Experience:
- Blue Meridian Partners (June 2018 - July 2025): Director, Strategic Communications & Brand. $4B philanthropic fund. 42% audience engagement increase. CNN, AP, NYT coverage. $300M+ HBCU Transformation Project.
- Bank Street College of Education (Jan 2017 - Apr 2018): Communications Manager. 30% engagement increase, 25% follower growth. $10M+ education finance initiative.
- Adfero/DHS (July 2014 - Dec 2016): Senior Account Executive. 15+ web initiatives annually. 42% increase in DHS public awareness.
- BCS/DOE (Oct 2013 – July 2014): Led DOE Bioenergy website migration. 50+ multimedia updates monthly.
- National Retail Federation (May 2012 – Oct 2013): 70 earned media placements (NYT, Chicago Tribune).
- FYI Public Relations (Feb 2010 – Apr 2012): DefJam, Kodak, Chris Brown campaigns.

Education: B.A. Communications: Public Relations, Hampton University

## Service Pillars
1. Narrative Precision: 42% increase in DHS federal regulation awareness
2. Data & Impact Driven Activation: 40% stakeholder engagement, 60% campaign efficiency
3. Crisis-Shielding Leadership: Zero negative press on $10M education finance launch

## Case Studies
- DHS 'Study in the States': 30% decrease in general inquiries
- Blue Meridian: 500+ press hits for $385M campaign
- DOE Bioenergy: 50+ monthly web updates

## Deliverables
Strategic Communications, Crisis Communications, PR, Branding, Content Creation, Social Media, Graphic Design, Project Management, Event Marketing, Executive Communications, Video Production.

## Testimonials
Patricia Hernandez: "50% stakeholder engagement increase in three months"
Michael Thompson: "Exceeded media targets on high-stakes launch"
Emily Zhang: "30% lift in shares and comments"
`.trim()

const SYSTEM_PROMPT = `You are an expert at Shari's resume and industry. When someone asks a question about supporting some work or task or how skills compare, your job is to communicate how Shari can best support the task or request based on the information contained in this website and in Shari's resume.

Be professional, concise, and helpful. If asked something not covered in the context, say you don't have that information and suggest reaching out directly to Shari.

CONTEXT (from website and resume):
${SITE_CONTEXT}`

export const config = {
  maxDuration: 30,
}

export async function POST(request) {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return Response.json(
      { error: 'AI service not configured. Add GROQ_API_KEY to your Vercel environment variables.' },
      { status: 500 }
    )
  }

  const groq = createGroq({ apiKey })

  try {
    const body = await request.json().catch(() => ({}))
    const messages = body.messages || []

    const result = streamText({
      model: groq('llama-3.1-8b-instant'),  // Faster, more reliable for chat
      system: SYSTEM_PROMPT,
      messages,
      onError: (e) => console.error('Groq stream error:', e),
    })

    return result.toDataStreamResponse()
  } catch (err) {
    console.error('Chat API error:', err)
    return Response.json(
      { error: err.message || 'AI request failed. Check GROQ_API_KEY and Vercel logs.' },
      { status: 500 }
    )
  }
}

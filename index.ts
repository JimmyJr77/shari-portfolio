import { streamText } from 'ai'
import dotenv from 'dotenv'

// Load .env.local first (Vercel/convention), then .env
dotenv.config({ path: '.env.local' })
dotenv.config()

async function main() {
  const result = streamText({
    model: 'openai/gpt-4.1',
    prompt: 'Invent a new holiday and describe its traditions.',
  })

  for await (const textPart of result.textStream) {
    process.stdout.write(textPart)
  }

  console.log()
  console.log('Token usage:', await result.usage)
}

main().catch(console.error)

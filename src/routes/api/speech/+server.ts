import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import OpenAI from 'openai';

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY || '',
});

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { text } = await request.json();
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });
    
    const buffer = Buffer.from(await mp3.arrayBuffer());
    
    return new Response(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 });
  }
};

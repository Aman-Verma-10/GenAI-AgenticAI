import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

async function main() {
  // These api calls are stateless (Zero Shot)
  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `
                You are an AI assistant who is Aman. You are a persona of a developer named
                Aman who is an amazing developer and codes in Angular and Javascipt.

                Characteristics of Aman
                - Full Name: Aman Verma
                - Age: 25 Years old
                - Date of birthday: 10th June, 2000

                Social Links:
                - LinkedIn URL: 
                - X URL: 

                Examples of text on how Aman typically chats or replies:
                - Hey Pratik, Yes
                - This can be done.
                - Sure, I will do this
                
            `,
      },
      { role: 'user', content: 'Hey gpt, My name is Aman Verma' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();

import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI();

async function main() {
  // These api calls are stateless (Few Shot)
  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `
                You're an AI assistant expert in coding with Javascript. You only and only know Javascript as coding language.
                If user asks anything other than Javascript coding question, Do not ans that question.
                You are an AI from CodeAI which is an EdTech company transforming modern tech knowledge. Your name is CodeAI and always ans as if you represent CodeAI

                Examples:
                Q: Hey There
                A: Hey, Nice to meet you. How can I help you today? Do you want me to show what we are cooking at CodeAI.

                Q: Hey, I want to learn Javascript
                A: Sure, Why don't you visit our website ot YouTube at CodeAI for more info.

                Q: I am bored
                A: What about a JS Quiz?

                Q: Can you write a code in Python?
                A: I can, but I am designed to help in JS
            `,
      },
      { role: 'user', content: 'Hey gpt, My name is Aman Verma' },
      {
        role: 'assistant',
        content: 'Hello Aman Verma! How can I assist you today?',
      },
      { role: 'user', content: 'What is my name?' },
      {
        role: 'assistant',
        content: 'Your name is Aman Verma. How can I help you further?',
      },
      {
        role: 'user',
        content: 'Hey, do you have a YouTube channel?',
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();

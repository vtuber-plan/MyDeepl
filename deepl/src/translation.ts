import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration, import.meta.env.VITE_BASE_PATH);

export async function translate(source: string, target: string, text: string) {
  if (text.length == 0) {
    return ""
  }
  if (source == target) {
    return text
  }
  const completion = await openai.createCompletion({
    prompt: `Consider a conversation between User and a proficient translator.\nUser: ${text}\nTranslate the above text into ${target}.\nTranslator: `,
    model: 'text-davinci-003',
    max_tokens: 2048,
  });

  console.log(completion.data.choices);
  return completion.data.choices[0].text;
}


export async function detect_language(text: string) {
  if (text.length == 0) {
    return ""
  }
  const chatCompletion = await openai.createChatCompletion({
    messages: [
        { role: 'system', content: 'I want you to act as a language detector. I will enter a sentence in any language and you will answer me with the sentence I wrote in which language you wrote it in. Don\'t write any explanations or other text, just reply with the name of the language. My first sentence is:'},
        { role: 'user', content: "你好" },
        { role: 'assistant', content: "Chinese" },
        { role: 'user', content: text }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.data.choices);
  return chatCompletion.data.choices[0].message?.content;
}
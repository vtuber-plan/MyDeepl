import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});
const openai = new OpenAIApi(configuration, import.meta.env.VITE_BASE_PATH);

const SYSTEM_INST = `Consider a conversation between User (a human) and Assistant (named Buddy).

User: Hi.
Assistant: Hi, I'm Buddy, your AI assistant. How can I help you today?`

const TRANSLATION_EXAMPLE = `User: Input: \n你好\nTranslate the above text into English, just return the result.
Assistant: Hello`

export async function translate(source: string, target: string, text: string) {
  if (text.length == 0) {
    return ""
  }
  // if (source == target) {
  //   return text
  // }
  const completion = await openai.createCompletion({
    prompt: `${SYSTEM_INST}\n${TRANSLATION_EXAMPLE}\nUser: Input: \n${text}\nTranslate the above text into ${target}, just return the result.\nAssistant:`,
    model: import.meta.env.VITE_MODEL_NAME,
    max_tokens: 1600,
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
        { role: 'system', content: `${SYSTEM_INST}`},
        { role: 'user', content: `Input: ${text}\nEnglish, Chinese or Japanese? Just return the language name of the text.` }],
    model: import.meta.env.VITE_MODEL_NAME,
  });

  console.log(chatCompletion.data.choices);
  const result = chatCompletion.data.choices[0].message?.content;

  if (result == undefined) {
    return ""
  }

  if(result.includes("English")){
    return "English"
  } else if(result.includes("Chinese") || result.includes("中文")){
    return "Chinese"
  } else if(result.includes("Japanese") || result.includes("日本語")){
    return "Japanese"
  } else {
    return "UNKNOWN"
  }
}
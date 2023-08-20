import { createI18n } from 'vue-i18n'
// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
        message: {
            hello: 'hello world',
            typeTranslation: 'Type to translate',
            dictionary: 'Dictionary',
            dictionaryDetails: 'Click on a word to look it up.'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界',
            typeTranslation: null,
            dictionary: null,
            dictionaryDetails: null,
        }
    },
    zhcn: {
        message: {
            hello: '你好世界',
            typeTranslation: '键入翻译',
            dictionary: '词典',
            dictionaryDetails: '点击单词以查询',
        }
    }
}

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'zhcn', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

export default i18n
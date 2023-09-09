<script setup lang="ts">
import LanguageDropDown from './LanguageDropdown.vue'
const supported_languages = [
    {
        "text": "Chinese"
    },
    {
        "text": "English"
    },
    {
        "text": "Japanese"
    }
]

import { ref } from 'vue'
import SwitchButton from './SwitchButton.vue';

const timeoutValue = ref(-1)
const sourceValue = ref("")
const targetValue = ref("")
const sourceLanguage = ref("Detect Language")
const targetLanguage = ref("English")
// const sourceInput = ref<HTMLDivElement | null>(null)
// const targetInput = ref<HTMLDivElement | null>(null)

import { translate, detect_language } from '../translation'

function debounce(func: CallableFunction, wait: number) {
    if (timeoutValue.value != -1) clearTimeout(timeoutValue.value)
    timeoutValue.value = setTimeout(() => {
        func()
    }, wait)
}

async function sourceChangeDebounced() {
    const lang = await detect_language(sourceValue.value)
    if (lang == null || lang == undefined) { return; }
    if (lang.trim().length == 0 || lang.trim().length > 16) { return; }
    sourceLanguage.value = lang

    // translation
    const result = await translate(sourceLanguage.value, targetLanguage.value, sourceValue.value)
    if (result == null || result == undefined) { return; }
    targetValue.value = result
}

async function sourceChange() {
    console.log("sourceChange")
    debounce(sourceChangeDebounced, 500)
}

async function targetChangeDebounced() {
    const lang = await detect_language(targetValue.value)
    if (lang == null || lang == undefined) { return; }
    if (lang.trim().length == 0 || lang.trim().length > 16) { return; }
    targetLanguage.value = lang
}

async function targetChange() {
    console.log("targetChange")
    debounce(targetChangeDebounced, 500)
}
</script>

<template>
    <div class="translate-text">
        <div class="translate-sides">
            <div class="translate-sides-source">
                <SwitchButton class="switch-button"></SwitchButton>
                <div class="translate-sides-header">
                    <LanguageDropDown :text="sourceLanguage" :dropitems="supported_languages" />
                </div>
                <div class="translate-sides-input">
                    <a-textarea ref="sourceInput" v-model:value="sourceValue"
                        :placeholder="this.$t('message.typeTranslation')" :bordered="false" size="large" :allowClear="true"
                        :autoSize="{ minRows: 6, maxRows: 12 }" class="translate-textarea" @change="sourceChange" />
                </div>
            </div>
            <div class="translate-sides-target">
                <div class="translate-sides-header">
                    <LanguageDropDown v-model:text="targetLanguage" :dropitems="supported_languages" />
                </div>
                <div class="translate-sides-input">
                    <a-textarea ref="targetInput" v-model:value="targetValue" placeholder="" :bordered="false" size="large"
                        :allowClear="true" :autoSize="{ minRows: 6, maxRows: 12 }" class="translate-textarea"
                        @change="targetChange" />
                </div>
            </div>

        </div>
        <div class="translate-dict">
            <h3 class="translate-dict-header">
                {{ this.$t("message.dictionary") }}
            </h3>
            <div class="translate-dict-desc">
                {{ this.$t("message.dictionaryDetails") }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.translate-sides {
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    border-radius: 8px;
    border: 1px solid #dae1e8;
}

.translate-dict {
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    border-radius: 8px;
    border: 1px solid #dae1e8;
    margin-top: 8px;
}

.translate-text {
    position: relative;
}

.switch-button {
    position: absolute;
    top: 16px;
    right: -16px;
    z-index: 3;
}

.translate-sides-source {
    position: relative;
    display: inline-block;
    width: 50%;
}

.translate-sides-target {
    position: relative;
    display: inline-block;
    width: 50%;
}

.translate-sides-header {
    position: absolute;
    top: 0px;
    width: 100%;
    border-bottom: 1px solid #dae1e8;
}

.translate-sides-input {
    display: flex;
    align-items: flex-start;
    margin-top: 62px;
    border: 0px solid #dae1e8;
    padding: 8px;
}

.translate-sides-source .translate-sides-input {
    border-right: 1px solid #dae1e8;
}

.translate-dict-header {
    font-size: 24px;
    padding: 16px 20px;
}

.translate-dict-desc {
    font-size: 16px;
    line-height: 1.5;
    border-top: 1px solid #dae1e8;
    padding: 18px;
    color: rgb(110 110 110);
}
</style>


<style>
textarea.ant-input.translate-textarea {
    resize: none;
    font-size: 24px !important;
}
</style>
<script setup lang="ts">
import CardButton from './CardButton.vue';
import TextTranslator from './TextTranslator.vue';

import {
    BookOutlined,
    FileTextOutlined,
    GlobalOutlined,
} from '@ant-design/icons-vue';
</script>

<template>
    <div class="features-tab">
        <CardButton text="翻译文本" subtext="31门语言">
            <global-outlined :style="{ fontSize: '24px' }" />
        </CardButton>
        <CardButton text="翻译文件" subtext=".pdf，.docx.，pptx">
            <book-outlined :style="{ fontSize: '24px' }" />
        </CardButton>

        <CardButton text="DeepL Write" subtext="人工智能写作助手">
            <file-text-outlined :style="{ fontSize: '24px' }" />
        </CardButton>
    </div>
    <TextTranslator/>
</template>

<style scoped>
.features-tab {
    margin: 12px;
}
</style>

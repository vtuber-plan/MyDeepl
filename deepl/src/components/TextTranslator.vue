<script setup lang="ts">
import LanguageDropDown from './LanguageDropdown.vue'
const supported_languages = [
    {
        "text": "中文"
    },
    {
        "text": "英语"
    },
    {
        "text": "法语"
    }
]

import { ref } from 'vue'
import SwitchButton from './SwitchButton.vue';

const sourceValue = ref("")
const targetValue = ref("")
</script>

<template>
    <div class="translate-text">
        <div class="translate-sides">
            <div class="translate-sides-source">
                <SwitchButton class="switch-button"></SwitchButton>
                <div class="translate-sides-header">
                    <LanguageDropDown text="中文" :dropitems="supported_languages" />
                </div>
                <div class="translate-sides-input">
                    <a-textarea v-model:value="sourceValue" :placeholder="this.$t('message.typeTranslation')" :bordered="false" size="large"
                        :allowClear="true" :autoSize="{ minRows: 6, maxRows: 12 }" class="translate-textarea"/>
                </div>
            </div>
            <div class="translate-sides-target">
                <div class="translate-sides-header">
                    <LanguageDropDown text="英文" :dropitems="supported_languages" />
                </div>
                <div class="translate-sides-input">
                    <a-textarea v-model:value="targetValue" placeholder="" :bordered="false" size="large"
                        :allowClear="true" :autoSize="{ minRows: 6, maxRows: 12 }" class="translate-textarea"/>
                </div>
            </div>

        </div>
        <div class="translate-dict">
            <h3 class="translate-dict-header">
                词典
            </h3>
            <div class="translate-dict-desc">
                点击单词以查询
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
    font-size: 32px !important;
}
</style>
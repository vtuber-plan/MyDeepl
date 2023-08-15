<script setup lang="ts">

import {
    DownOutlined,
    UpOutlined,
} from '@ant-design/icons-vue';

class DropItem {
    text: string;

    constructor(text: string) {
        this.text = text;
    }
}


defineProps<{
    text: string,
    dropitems: Array<DropItem>,
}>()

import { ref } from 'vue'

const showDrop = ref(false)

</script>

<template>
    <div class="language-dropdown">
        <div class="dropdown-header">
            <button class="dropdown-button" @click="showDrop = !showDrop">
                <div class="dropdown-text">
                    {{ text }}
                </div>
                <div class="dropdown-icon">
                    <down-outlined v-if="showDrop"/>
                    <up-outlined v-else/>
                </div>
            </button>
        </div>
        <div class="dropdown-content" v-if="showDrop" @left="">
            <div class="search-input-box">
                <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#9BA3AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <label for="search-bar-language" class="sr-only">搜索语言</label>
                <input id="search-bar-language" class="search-input" placeholder="搜索语言">
            </div>
            <div v-for="item in dropitems" class="dropdown-item">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.language-dropdown {
    position: relative;
}

.dropdown-header {
    padding: 16px;
}

button {
    background-color: transparent;
    background-image: none;
    border: none;
    outline: none;
    cursor: pointer;
}

.dropdown-text {
    display: inline;
    padding: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
}

.dropdown-icon {
    display: inline;
    padding: 4px;
}

.dropdown-content {
    position: absolute;
    top: 56px;
    z-index: 10;
    background-color: #fff;
    padding: 16px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    border-radius: 8px;
    border: 1px solid #dae1e8;
}
.dropdown-item {
    position: relative;
    width: 100%;
    padding: 12px;
    padding-right: 36px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    min-width: auto;
    white-space: normal;
    cursor: pointer;
}
.dropdown-item:hover {
    background-color: rgba(255,200,87,.3);
}

.search-input-box {
    display: flex;
    padding: 8px;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 5px;
}
.search-input {
    border: None;
    height: 24px;
}
.search-input:focus {
    outline: none;
}
.search-input-box:focus-within {
    border: 1px solid rgb(0 100 148);
}
.sr-only {
    display: none;
}
</style>

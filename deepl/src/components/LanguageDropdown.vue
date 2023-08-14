<script setup lang="ts">

import {
    DownOutlined
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

var searchValue = ""

</script>

<template>
    <div class="language-dropdown">
        <div class="dropdown-header">
            <button class="dropdown-button" @click="showDrop = !showDrop">
                <div class="dropdown-text">
                    {{ text }}
                </div>
                <div class="dropdown-icon">
                    <down-outlined />
                </div>
            </button>
        </div>
        <div class="dropdown-content" v-if="showDrop">
            <a-input-search v-model:value="searchValue" placeholder="input search text" style="width: 200px" />
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
    padding: 8px;
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
    font-size: 16px;
    line-height: 24px;
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
    padding: 8px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    border-radius: 8px;
    border: 1px solid #dae1e8;
}
</style>

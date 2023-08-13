<script setup lang="ts">
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

var searchValue = ""

import {
    DownOutlined
} from '@ant-design/icons-vue';
</script>

<template>
    <div class="language-dropdown">
        <div class="dropdown-header">
            <button class="dropdown-button">
                <div class="dropdown-text">
                    {{ text }}
                </div>
                <div class="dropdown-icon">
                    <down-outlined />
                </div>
            </button>
        </div>
        <div class="dropdown-content">
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
}
</style>

<script setup lang="ts">
import {
    BookOutlined
} from '@ant-design/icons-vue';
defineProps<{
    text: string,
    subtext: string
}>()
</script>

<template>
    <button class="card-button">
        <div class="card-button-body">
            <div class="button-icon">
                <book-outlined />
            </div>
            <div class="button-text-area">
                <div class="button-text">
                    翻译文本
                </div>
                <div class="button-subtext">
                    31门语言
                </div>
            </div>
        </div>
    </button>
</template>

<style scoped>
button {
    background-color: transparent;
    background-image: none;
    border: none;
    outline: none;
}

.card-button-body {
    display: block;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #dae1e8;
    border-radius: 0.5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    min-width: 160px;
    height: 66px;
    cursor: pointer;
    padding: 12px;
}

.button-icon {
    display: inline;
    float: left;
    padding: 12px;
}
.button-text-area {
    display: block;
    margin-left: 35px;
}
.button-text {
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
}
.button-subtext {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6e6e6e;
}
</style>

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
</script>

<template>
    <div class="translate-text">
        <div class="translate-sides">
            <div class="translate-sides-source">
                <div class="translate-sides-header">
                    <LanguageDropDown text="中文" :dropitems="supported_languages"/>
                </div>
            </div>
            <div class="translate-sides-target">
                <div class="translate-sides-header">
                    <LanguageDropDown text="英文" :dropitems="supported_languages"/>
                </div>
            </div>

        </div>
        <div class="translate-dict">
            123
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
}
.translate-sides-source {
    display: inline-block;
    width: 50%;
}
.translate-sides-target {
    display: inline-block;
    width: 50%;
}
</style>

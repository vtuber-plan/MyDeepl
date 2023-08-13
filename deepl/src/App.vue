<script setup lang="ts">
import Translator from './components/Translator.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <a-config-provider :theme="{
    components: {
      Radio: {
        colorPrimary: '#00b96b',
      },
      Button: {
        colorPrimary: '#0177a9',
      },
      Layout: {
        colorBgHeader: '#ffffff',
      }
    },
  }">
    <a-layout class="layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <Navbar />
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <Translator />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vtuber-plan ©2023 Created by XiaHan
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<style scoped></style>

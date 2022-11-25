<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="overview">
      <router-link :to="{name: 'scheduling-overview'}">
        <template #icon>
          <mail-outlined />
        </template>
        Overview
      </router-link>
      </a-menu-item>
      <a-menu-item key="reports">
      <router-link :to="{name: 'scheduling-reports'}">
        <template #icon>
          <mail-outlined />
        </template>
        Reports
      </router-link>
      </a-menu-item>
      <a-menu-item key="settings">
        <router-link :to="{name: 'scheduling-settings'}">
          <template #icon>
            <appstore-outlined />
          </template>
          Settings
        </router-link>
      </a-menu-item>
    </a-menu>
    <div class="content-section">
      <router-view></router-view>
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { MailOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
    const current = ref<string[]>(['mail']);

    const route = useRoute()
    current.value = [route.meta.tabMenuItemKey]
  </script>

<style lang="scss">
  .content-section {
    margin: 16px 16px;
  }
</style>

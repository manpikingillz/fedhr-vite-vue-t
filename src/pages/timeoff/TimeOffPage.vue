<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="overview">
      <router-link :to="{name: 'overview'}">
        <template #icon>
          <mail-outlined />
        </template>
        Overview
      </router-link>
      </a-menu-item>
      <a-menu-item key="requests">
        <router-link :to="{name: 'requests'}">
          <template #icon>
            <appstore-outlined />
          </template>
          Requests
        </router-link>
      </a-menu-item>
      <a-menu-item key="balances">
        <router-link :to="{name: 'balances'}">
          <template #icon>
            <appstore-outlined />
          </template>
          Balances
        </router-link>
      </a-menu-item>
      <a-menu-item key="reports">
        <router-link :to="{name: 'reports'}">
          <template #icon>
            <appstore-outlined />
          </template>
          Reports
        </router-link>
      </a-menu-item>
      <a-menu-item key="settings">
        <router-link :to="{name: 'settings'}">
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

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
        <template #icon>
          <appstore-outlined />
        </template>
        Balances
      </a-menu-item>
      <a-menu-item key="reports">
        <template #icon>
          <appstore-outlined />
        </template>
        Reports
      </a-menu-item>
      <a-menu-item key="settings">
        <template #icon>
          <appstore-outlined />
        </template>
        Settings
      </a-menu-item>
    </a-menu>

    <div>
      Timeoff
      <router-view></router-view>
    </div>
  </template>
  <script setup lang="ts">
    import { ref } from 'vue';
    import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
    const current = ref<string[]>(['mail']);
  </script>

<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="overview">
      <router-link :to="{name: 'employees-overview'}">
        <template>
          <mail-outlined />
        </template>
        Overview
      </router-link>
      </a-menu-item>
      <a-menu-item key="orgchart">
        <router-link :to="{name: 'employees-orgchart'}">
          <template>
            <appstore-outlined />
          </template>
          Org Chart
        </router-link>
      </a-menu-item>
      <a-menu-item key="approver-settings">
        <router-link :to="{name: 'employees-approver-settings'}">
          <template>
            <appstore-outlined />
          </template>
          Approver Settings
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
    current.value = [route.meta.tabMenuItemKey as string]
  </script>

<style lang="scss">
  .content-section {
    margin: 16px 16px;
  }
</style>

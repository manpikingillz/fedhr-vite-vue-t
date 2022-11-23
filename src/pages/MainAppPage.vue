<template>
  <a-layout class="layout-container">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <router-link :to="{name: 'main'}">
      <div class="logo">
        <span class="fed" v-if="!collapsed">Fed</span><span class="hr" v-if="!collapsed">HR</span>
        <span class="fed-hr" v-if="collapsed">Fed</span>
      </div>
      </router-link>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="dashboard">
          <router-link :to="{name: 'dashboard'}">
            <user-outlined />
            <span>Dashboard</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="employees">
          <router-link :to="{name: 'employees'}">
            <user-outlined />
            <span>Employees</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="hiring">
          <router-link :to="{name: 'hiring'}">
            <usergroup-add-outlined />
            <span>Hiring</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="timeoff">
          <router-link :to="{name: 'timeoff'}">
            <field-time-outlined />
            <span>TimeOff</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="scheduling">
          <router-link :to="{name: 'scheduling'}">
            <schedule-outlined />
            <span>Scheduling</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout class="layout-header-content">
      <a-layout-header class="layout-header" style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <a-dropdown class="user-dropdown" :trigger="['click']">
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar class="user-avatar" size="large">
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <!-- <DownOutlined /> -->
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a href="">Profile</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3">Logout</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>

  </a-layout>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ScheduleOutlined,
  FieldTimeOutlined,
  UsergroupAddOutlined,
  DownOutlined
} from '@ant-design/icons-vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router'

const selectedKeys = ref<string[]>(['dashboard'])
const collapsed = ref<boolean>(false)

const route = useRoute()
selectedKeys.value = [route.meta.menuItemKey]

</script>

<style lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: x-large;

    span.fed {
      margin-left: 16px;
      color: white; //var(--antd-blue-color)
    }
    span.hr {
      color: white; //var(--antd-red-color)
    }
    span.fed-hr {
      color: white; //var(--antd-red-color)
      margin-left: 3px;
    }
  }


  .layout-header-content {
    .layout-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover{
          color: #1890ff;
        }
      }

      .user-dropdown {
        margin-right: 16px;
      }
    }
  }
}
</style>

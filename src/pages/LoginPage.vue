<template>
    <div class="login-container">
        <a-card class="login-card">
            <div class="login-header"><span class="login-header-title-fed">Fed</span><span class="login-header-title-hr">HR</span></div>
            <div class="login-header-detail">Login to your account</div>
            <a-form
                :model="formState"
                layout="vertical"
                name="normal_login"
                class="login-form"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
            >
                <a-form-item
                label="Username"
                name="username"
                class="username-form-item"
                :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                <a-input
                    v-model:value="formState.username"
                    size="large"
                    placeholder="Enter your username"
                    class="username-form-input"
                    >
                </a-input>
                </a-form-item>

                <a-form-item
                label="Password"
                name="password"
                class="password-form-item"
                :rules="[{ required: true, message: 'Please input your password!' }]"
                >
                <a-input-password
                    v-model:value="formState.password"
                    size="large"
                    placeholder="Enter your Password"
                    class="password-form-input">
                </a-input-password>
                </a-form-item>
                <a-form-item>
                <a-button
                    :disabled="disabled"
                    type="primary"
                    html-type="submit"
                    class="login-form-button"
                    size="large">
                    Log in
                </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref, computed } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
</script>

<style lang="scss" scoped>
.login-container {
    .login-card {
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
        .login-header {
            font-weight: 600;
            font-size: x-large;

            span.login-header-title-fed {
                color: #1990FF
            }
            span.login-header-title-hr {
                color: #FF4D4E
            }
        }
        .login-header-detail {
            font-weight: 400;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .login-form {
            width: 400px;
            .username-form-item {
                .username-form-input {
                    height: 50px;
                }
            }
            .password-form-item {
                .password-form-input {
                    height: 50px;
                }
            }
            .login-form-button {
                width: 100%;
                height: 50px;
            }
        }
    }
}
</style>

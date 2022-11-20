<template>
    <!-- Bottom Graphic from https://www.shapedivider.app/  -->
    <div class="bottom-svg">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div>
    <!-- End of Bottom Graphic  -->
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
        <div class="bubbles">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
            <img src="../assets/bubble.png">
        </div>
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
// Styling for Bottom Graphing from https://www.shapedivider.app/
.bottom-svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.bottom-svg svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 224px;
    transform: rotateY(180deg);
}

.bottom-svg .shape-fill {
    fill: #4A9AE27D;
}

.bottom-svg svg path:nth-child(2) {
    animation: bottom-svg-anime linear 10s infinite;
}

@keyframes bottom-svg-anime {
    0% {
        transform: translateX(0);
        opacity: 0;
    }
    25% {
        transform: translateX(-25%);
        opacity: 0.2;
    }
    50% {
        transform: translateX(-50%);
        opacity: 0.1;
    }
    75% {
        transform: translateX(-75%);
        opacity: 0.15;
    }
    100% {
        transform: translateX(-100%);
        opacity: 0;
    }
}
// End of styling for Bottom Graphic

.login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: aliceblue;
    // Gradient from https://cssgradient.io/gradient-backgrounds/
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

    .login-card {
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;

        .login-header {
            font-weight: 600;
            font-size: x-large;
            text-align: center;

            span.login-header-title-fed {
                color: var(--antd-blue-color)
            }
            span.login-header-title-hr {
                color: var(--antd-red-color)
            }
        }
        .login-header-detail {
            font-weight: 400;
            font-size: 24px;
            margin-bottom: 20px;
            text-align: center;
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

    .bubbles {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: -70px;
        z-index: 1;
    }
    .bubbles img {
        width: 50px;
        animation: bubble 7s linear infinite;
    }
    @keyframes bubble {
        0%{
            transform: translateY(0);
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        70%{
            opacity: 1;
        }
        100%{
            transform: translateY(-80vh);
            opacity: 0;
        }
    }

    .bubbles img:nth-child(1) {
        animation-delay: 2s;
        width: 25px;
    }
    .bubbles img:nth-child(2) {
        animation-delay: 1s;
    }
    .bubbles img:nth-child(3) {
        animation-delay: 3s;
        width: 25px;
    }
    .bubbles img:nth-child(4) {
        animation-delay: 4.5s;
    }
    .bubbles img:nth-child(5) {
        animation-delay: 3s;
    }
    .bubbles img:nth-child(6) {
        animation-delay: 6s;
        width: 20px;
    }
    .bubbles img:nth-child(7) {
        animation-delay: 7s;
        width: 35px;
    }
    .bubbles img:nth-child(8) {
        animation-delay: 3s;
        width: 15px;
    }
}
</style>

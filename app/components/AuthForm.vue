<template>
    <form class="login-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Username</label>
        <input type="text" placeholder="Enter username" class="form-control" v-model="state.username" />
        <i class="far fa-envelope"></i>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" class="form-control" v-model="state.password" />
        <i class="fas fa-lock"></i>
      </div>
      <div class="form-group d-flex align-items-center justify-content-between">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="remember-me" v-model="state.rememberMe" />
          <label for="remember-me" class="form-check-label">Remember Me</label>
        </div>
        <a href="#" class="forgot-btn">Forgot Password?</a>
      </div>
      <div class="form-group">
        <button type="submit" class="login-btn">Login</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const state = reactive({
    username: '',
    password: '',
    rememberMe: false,
  });
  
  const onSubmit = () => {
    console.log("Form Submitted", state);
  };
  </script>
  
  <style scoped>
  .login-form .form-control {
    position: relative;
    padding-right: 30px;
  }
  
  .login-form .form-control + i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  </style>
  
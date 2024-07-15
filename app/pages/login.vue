<template>
  <div class="login-page-wrap">
    <div class="login-page-content">
      <div class="login-box">
        <div class="item-logo">
          <!-- <img src="/app/assets/img/logo2.png" alt="logo" /> -->
        </div>
        <AuthForm />
        <GoogleSignIn />
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthForm from '~/components/AuthForm.vue';
import GoogleSignIn from '~/components/GoogleSignIn.vue';
</script>

<style scoped>
.login-page-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/img/login-bg.jpg') no-repeat center center / cover;
}

.login-box {
  background: rgba(255, 255, 255, 0.75);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  text-align: center;
}

.item-logo img {
  max-width: 150px;
  margin-bottom: 1.5rem;
}

.login-social ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.login-social li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
}

.bg-fb { background: #3b5998; }
.bg-twitter { background: #1da1f2; }
.bg-gplus { background: #dd4b39; }
.bg-git { background: #333; }
</style>

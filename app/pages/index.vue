<template>
  <div>
    Home Page
    {{ isAuthenticated }}
    <!-- Logout button -->
    <UButton label="Sign Out" @click="logout" />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "@vueuse/firebase";
import { signOut } from "firebase/auth";
const { auth, db } = useFirebase();
const { isAuthenticated, user } = useAuth(auth);
definePageMeta({
  layout: "dashboard",
});

useSeoMeta({
  title: "Dashboard Page",
});
watchEffect(() => {
  console.log(isAuthenticated.value);

  // redirect if not authenticated
  if (!isAuthenticated.value) {
    navigateTo("/login");
  }
});
const logout = () => {
  signOut(auth);
};
</script>

<style scoped></style>

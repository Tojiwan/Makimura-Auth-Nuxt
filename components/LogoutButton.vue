<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";

const { logout } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push("/login");
};
</script>

<template>
  <button @click="handleLogout" class="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
</template>

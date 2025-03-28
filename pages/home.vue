<script setup lang="ts">
import { useCurrentUser } from "vuefire";

definePageMeta({
  middleware: "auth",
});

const user = useCurrentUser();
</script>

<template>
  <div>
    <h1>Home/Menu</h1>
    <p v-if="user">Logged in as: {{ user?.email }}</p>
    <p v-else>Loading user info...</p>
    <LogoutButton />
  </div>
</template>

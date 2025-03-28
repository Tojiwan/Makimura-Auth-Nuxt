<template>
    <div class="p-8 bg-gray-100">
        <header class="mb-4">
        </header>
        <slot />
    </div>
</template>

<script setup>
import { useCurrentUser } from "vuefire";

const user = useCurrentUser();
</script>

<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const { resetPassword } = useAuth();
const email = ref("");
const message = ref("");

const sendResetEmail = async () => {
  try {
    await resetPassword(email.value);
    message.value = "Password reset email sent! Check your inbox.";
  } catch (error) {
    message.value = "Error: " + error.message;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold">Forgot Password?</h1>
    <p>Enter your email to receive a reset link.</p>
    <input
      type="email"
      v-model="email"
      placeholder="Enter your email"
      class="border p-2 mt-4"
    />
    <button @click="sendResetEmail" class="bg-blue-500 text-white p-2 mt-2">
      Send Reset Link
    </button>
    <p class="text-red-500 mt-2">{{ message }}</p>
  </div>
</template>

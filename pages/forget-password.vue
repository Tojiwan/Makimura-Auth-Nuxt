<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";

const { confirmPasswordReset } = useAuth();
const route = useRoute();
const router = useRouter();

const newPassword = ref("");
const message = ref("");
const oobCode = ref("");

onMounted(() => {
  oobCode.value = route.query.oobCode;
  console.log("oobCode received:", oobCode.value); // Debugging

  if (!oobCode.value) {
    message.value = "Invalid or expired reset link.";
  }
});


const resetPassword = async () => {
  if (!oobCode.value) return;

  try {
    await confirmPasswordReset(oobCode.value, newPassword.value);
    message.value = "Password successfully changed! Redirecting to login...";
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  } catch (error) {
    message.value = "Error: " + error.message;
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold">Reset Password</h1>
    <p v-if="message" class="text-red-500">{{ message }}</p>
    <div v-if="oobCode">
      <input
        type="password"
        v-model="newPassword"
        placeholder="Enter new password"
        class="border p-2 mt-4"
      />
      <button @click="resetPassword" class="bg-green-500 text-white p-2 mt-2">
        Change Password
      </button>
    </div>
  </div>
</template>

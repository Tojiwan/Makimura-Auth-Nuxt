<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const { register } = useAuth();
const router = useRouter();

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  try {
    await register(email.value, password.value);
    router.push("/login"); // Redirect after registration
  } catch (error: any) {
    alert(error.message);
  }
};
</script>

<template>
	<div class="flex min-h-screen items-center justify-center px-4">
		<div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
			<div class="flex justify-center">
				<img class="h-10 w-auto" src="/logo.jpg" alt="Your Company">
			</div>
			<h2 class="mt-6 text-center text-2xl font-bold text-black font-bebas">Create an Account</h2>

			<form class="mt-6 space-y-4" @submit.prevent="handleRegister">
				<div>
					<label class="block text-sm font-medium text-gray-700">Email address</label>
					<input v-model="email" type="email" required
						class="mt-1 w-full border border-gray-300 px-3 py-3 rounded-[6px]">
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Password</label>
					<input v-model="password" type="password" required
						class="mt-1 w-full border border-gray-300 px-3 py-3 rounded-[6px]">
				</div>

				<div>
					<label class="block text-sm font-medium text-gray-700">Confirm Password</label>
					<input v-model="confirmPassword" type="password" required
						class="mt-1 w-full border border-gray-300 px-3 py-3 rounded-[6px]">
				</div>

				<button class="w-full px-6 py-3 text-white bg-main rounded-md" type="submit">
					Register
				</button>
			</form>

			<p class="mt-4 text-center text-sm text-gray-600">
				Already have an account?
				<NuxtLink to="/login" class="text-black">Sign in here!</NuxtLink>
			</p>
		</div>
	</div>
</template>

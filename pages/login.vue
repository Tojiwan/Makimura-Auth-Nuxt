<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const { login } = useAuth();
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    router.push("/home"); // Redirect after login
  } catch (error: any) {
    alert(error.message);
  }
};
</script>

<template>
	<div class="flex min-h-screen items-center justify-center">
		<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
			<div class="flex justify-center">
				<img class="h-full w-[150px] object-contain" src="/logo.jpg" alt="Your Company">
			</div>
			<h2 class="mt-6 text-center text-2xl font-bold text-black font-bebas">Sign in to your account</h2>

			<form class="mt-6 space-y-4" @submit.prevent="handleLogin">
				<div>
					<label class="block text-sm font-medium text-gray-700">Email address</label>
					<input v-model="email" type="email" required
						class="mt-1 w-full border border-gray-300 px-3 py-3 rounded-[6px]">
				</div>

				<!-- <div>
					<label class="block text-sm font-medium text-gray-700">Password</label>
					<input v-model="password" type="password" required
						class="mt-1 w-full border border-gray-300 px-3 py-3 rounded-[6px]">
				</div> -->

				<div>
					<div class="flex items-center justify-between">
						<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
						<NuxtLink to="/forget-password" class="text-sm font-medium text-black hover:text-main">Forgot
							password?</NuxtLink>
					</div>
					<input v-model="password" type="password" name="password" id="password" required
						placeholder="......."
						class="mt-1 w-full border border-gray-300 px-2 py-2 lg:px-3 lg:py-3 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]">
				</div>

				<button class="w-full px-6 py-3 text-white bg-main rounded-md" type="submit">
					Sign In
				</button>
			</form>

			<p class="mt-4 text-center text-sm text-gray-600">
				Not a member?
				<NuxtLink to="/register" class="text-black">Register Here!</NuxtLink>
			</p>
		</div>
	</div>
</template>

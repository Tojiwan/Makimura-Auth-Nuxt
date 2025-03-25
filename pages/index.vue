<template>
	<div class="flex min-h-screen items-center justify-center px-4">
		<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
			<div class="flex justify-center">
				<img class="h-10 w-auto" src="/public/favicon.ico" alt="Your Company">
			</div>
			<h2 class="mt-6 text-center text-2xl font-bold text-black font-bebas">Sign in to your account</h2>

			<form class="mt-6 space-y-4" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
					<input type="email" name="email" id="email" autocomplete="email" required
						placeholder="johndoe@gmail.com"
						class="mt-1 w-full border border-gray-300 px-3 py-3 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]">
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
						<NuxtLink to="/" class="text-sm font-medium text-black hover:text-main">Forgot
							password?</NuxtLink>
					</div>
					<input type="password" name="password" id="password" autocomplete="current-password" required
						placeholder="......."
						class="mt-1 w-full border border-gray-300 px-3 py-3 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]">
				</div>

				<button
					class="w-full relative px-6 py-3 rounded-md text-[14px] font-medium leading-[1.5] inline-flex items-center justify-center transition-all duration-500 text-white bg-main hover:bg-[#00873d] overflow-hidden group"
					type="submit" name="btnPlaceOrder">
					<span
						class="relative z-10 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-0 font-bold font-spartan">Sign In</span>
					<span
						class="absolute inset-0 flex items-center justify-center text-white w-full translate-x-full transition-all duration-300 group-hover:translate-x-0 font-bold font-spartan">Sign In</span>
				</button>
			</form>

			<p class="mt-4 text-center text-sm text-gray-600 font-spartan">
				Not a member?
				<NuxtLink to="/register" class="font-medium text-black hover:text-main">Register Here!</NuxtLink>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
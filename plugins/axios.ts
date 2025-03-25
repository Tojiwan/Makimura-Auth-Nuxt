// plugins/axios.ts
import axios from 'axios';
import type { AxiosInstance } from 'axios';

declare module '#app' {
    interface NuxtApp {
        $axios: AxiosInstance
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const apiUrl: string = config.public.apiUrl

    if (!apiUrl) {
        throw new Error(
            'Missing API configuration: Ensure NUXT_PUBLIC_API_URL is set in your environment variables.'
        )
    }

    const axiosInstance: AxiosInstance = axios.create({
        baseURL: `${apiUrl}/api`, // You can also just use apiUrl if /api is already part of it
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })

    // Provide $axios globally
    nuxtApp.provide('axios', axiosInstance)
})
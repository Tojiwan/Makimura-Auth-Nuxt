import { defineNuxtRouteMiddleware } from "#app";
import { useFirebaseAuth } from "vuefire";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useFirebaseAuth();

  if (!auth?.currentUser && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/login");
  }
});

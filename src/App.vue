<script setup lang="ts">
import { useFavicon, useTitle } from "@vueuse/core";
import { computed } from "vue";
import { useRouter } from "vue-router";

useTitle("VueUse Demo App");
useFavicon("/vueuse-favicon.png");

const router = useRouter();

const routes = computed(() => {
	return router.getRoutes();
});
</script>

<template>
	<div class="bg-stone-900 flex w-screen items-center gap-4 p-2 text-white">
		<RouterLink class="" v-for="route in routes" :to="route">{{ route.name }}</RouterLink>
	</div>
	<div class="flex w-screen justify-center p-10">
		<div>
			<RouterView></RouterView>
		</div>
	</div>
</template>

<style>
body {
	@apply bg-stone-800;
}

:root {
	@apply text-white;
}

button {
	@apply bg-stone-900 p-2 mr-2;
}

input {
	@apply bg-stone-900 p-2 mr-2;
}

button:disabled {
	opacity: 50%;
}
</style>

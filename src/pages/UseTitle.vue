<script setup lang="ts">
import { useFavicon, useTitle } from "@vueuse/core";
import { computed, ref } from "vue";

// Setzt den title des Tabs im Browser
const title = useTitle("UseTitle");

const type = ref("vueuse");
const favicon = computed(() => (type.value === "vue" ? "vue-favicon.png" : "vueuse-favicon.png"));

// Setzt das icon des Tabs im Browser
useFavicon(favicon, { baseUrl: "/", rel: "icon" });
</script>

<template>
	<note>Title</note>
	<input v-model="title" type="text" />

	<div>Change favicon to</div>
	<button @click="type = 'vue'">Vue</button>
	<button @click="type = 'vueuse'">VueUse</button>
</template>

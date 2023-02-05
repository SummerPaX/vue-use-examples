<script setup lang="ts">
import { ref } from "vue";
import { watchDebounced } from "@vueuse/core";
const input = ref("Default");
const updated = ref(0);
const updatedInput = ref("");

// use this function like a normal watch
watchDebounced(
	input,
	() => {
		// create API requests here
		updated.value += 1;
		updatedInput.value = input.value;
	},
	// Die optionen debounce und maxWait kommen zusätzlich zu den watch Optionen dazu
	{ debounce: 1000, maxWait: 5000, immediate: true }
);
</script>

<template>
	<div>
		<input v-model="input" placeholder="Try to type anything..." type="text" />
		<note>Delay is set to 1000ms and maxWait is set to 5000ms for this demo.</note>

		<p>Input: {{ input }}</p>
		<p>Times Updated: {{ updated }}</p>
		<p>Input Updated: {{ updatedInput }}</p>
	</div>
</template>

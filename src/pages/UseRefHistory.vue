<script setup lang="ts">
import { formatDate, useCounter, useRefHistory } from "@vueuse/core";

// counter Composable (auch von VueUse): https://vueuse.org/shared/usecounter/#usecounter
const { count, inc, dec } = useCounter();

// useRefHistory Composable => https://vueuse.org/core/userefhistory/#userefhistory
// erstellt eine History von der übergebenen ref Variable (count)
// und stellt die Funktionen undo und redo, sowie den status canUndo und canRedo zur Verfügung.
const { history, undo, redo, canUndo, canRedo } = useRefHistory(count, { capacity: 10 });
</script>

<template>
	<div class="text-3xl text-center mb-4">Count: {{ count }}</div>
	<button @click="inc()">Increment</button>
	<button @click="dec()">Decrement</button>
	<span class="mr-2">/</span>
	<button :disabled="!canUndo" @click="undo()">Undo</button>
	<button :disabled="!canRedo" @click="redo()">Redo</button>
	<h2 class="mt-10">History (limited to 10 records for demo)</h2>
	<div class="code-block mt-4">
		<div v-for="i in history" :key="i.timestamp">
			<span class="opacity-50 mr-2 font-mono">{{
				formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")
			}}</span>
			<span class="font-mono">{ value: {{ i.snapshot }} }</span>
		</div>
	</div>
</template>

<style></style>

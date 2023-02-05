<script setup lang="ts">
import { useStorage, useTitle } from "@vueuse/core";
import { ref } from "vue";

const id = ref("");
const name = ref("");

// Die default Daten werden nur verwendet wenn noch keine Daten im local storage mit dem key vorhanden sind
const defaultData = [{ id: "4235", name: "Max" }];

// Liefert eine reaktive State Variable zurück welche eine direkte verbindung zum local storage hat.
// Die Übergabeparameter sind der key und der default wert des zu speichernden Objects (der Typescript Type passt sich an den Defaultwert an)
// bei Änderungen passt updated sich der local storage automatisch und umgekehrt auch
const state = useStorage("users", defaultData);
</script>

<template>
	<div class="text-white flex flex-col gap-2">
		<input class="bg-stone-900 p-2" v-model="id" type="text" />
		<input class="bg-stone-900 p-2" v-model="name" type="text" />
		<button @click="state.push({ id, name })">Add</button>
		<button @click="state.pop()">Remove Last Entry</button>

		<pre lang="json">{{ state }}</pre>
	</div>
</template>

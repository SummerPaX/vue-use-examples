<script lang="ts" setup>
import { useImage } from "@vueuse/core";
import { ref } from "vue";

// Attribute des zu ladenden Images
const imageOptions = ref({ src: "https://place.dog/1280/720", alt: "Dog" });

// useImage Composable => https://vueuse.org/core/useimage/#useimage
const { isLoading, error } = useImage(imageOptions);

// updated den imageOptions URL um die watch funktion des useImage Composables auszulösen.
const change = () => {
	const time = new Date().getTime();
	imageOptions.value.src = `https://place.dog/1280/720?t=${time}`;
};
</script>

<template>
	<!-- mittels if-else Conditions können wir die Anzeige je nach status des Bildes ändern -->
	<div v-if="isLoading" class="opacity-25">
		<img
			src="/elementor-placeholder-image.webp"
			class="w-[1280px] h-[720px] animate-pulse bg-stone-500/5 p-2"
		/>
	</div>
	<div v-else-if="error">Bild konnte nicht geladen werden</div>
	<img v-else v-bind="imageOptions" class="w-[1280px] h-[720px]" />

	<button @click="change">Change</button>
</template>

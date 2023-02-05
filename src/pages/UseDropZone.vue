<script setup lang="ts">
import { ref } from "vue";
import { useDropZone } from "@vueuse/core";

interface FileData {
	name: string;
	size: number;
	type: string;
	lastModified: number;
}

// hier werden die Metadaten der Files gespeichert.
const filesData = ref<FileData[]>([]);

// onDrop Event Handler Function => wird dem useDropzone Composable übergeben.
function onDrop(files: File[] | null) {
	filesData.value = [];
	if (files) {
		filesData.value = files.map((file) => ({
			name: file.name,
			size: file.size,
			type: file.type,
			lastModified: file.lastModified,
		}));
	}
}

// Template Ref: https://vuejs.org/guide/essentials/template-refs.html
const dropZoneRef = ref<HTMLDivElement>();

// useDropzone von VueUse: https://vueuse.org/core/usedropzone/#usedropzone
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
	<div class="flex">
		<div class="w-full h-auto relative">
			<p>Drop files into dropZone</p>
			<img src="/vueuse-favicon.png" alt="Drop me" />
			<div
				ref="dropZoneRef"
				class="flex flex-col w-[700px] min-h-[500px] h-auto bg-gray-400/10 justify-center items-center mt-6"
			>
				<div>
					isOverDropZone:
					<span :class="isOverDropZone ? 'text-green-500' : 'text-amber-500'">
						{{ isOverDropZone ? true : false }}
					</span>
				</div>
				<div class="flex flex-wrap justify-center gap-4 items-center">
					<div
						v-for="(file, index) in filesData"
						:key="index"
						class="w-200px bg-black-200/10 ma-2 pa-6"
					>
						<p>Name: {{ file.name }}</p>
						<p>Size: {{ file.size }} B</p>
						<p>Type: {{ file.type }}</p>
						<p>Last modified: {{ file.lastModified }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

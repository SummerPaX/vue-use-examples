import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import UseStorage from "../pages/UseStorage.vue";
import UseRefHistory from "../pages/UseRefHistory.vue";
import UseTitle from "../pages/UseTitle.vue";
import UseImage from "../pages/UseImage.vue";
import WatchDebounced from "../pages/WatchDebounced.vue";
import UseDropZone from "../pages/UseDropZone.vue";

const routes = [
	{ name: "Home", path: "/", component: Home },
	{ name: "UseStorage", path: "/use-storage", component: UseStorage },
	{ name: "UseRefHistory", path: "/use-ref-history", component: UseRefHistory },
	{ name: "UseTitle", path: "/use-title", component: UseTitle },
	{ name: "UseImage", path: "/use-image", component: UseImage },
	{ name: "WatchDebounced", path: "/watch-debounced", component: WatchDebounced },
	{ name: "UseDropZone", path: "/use-drop-zone", component: UseDropZone },
];

export default createRouter({
	history: createWebHistory(),
	routes,
});

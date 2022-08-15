import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/js/components/App";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: App,
            name: "App",
        },
    ],
    base: "/",
});

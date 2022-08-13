import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";
import app from "@/js/components/app";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: app,
            name: "app",
        },
    ],
    base: "/",
});

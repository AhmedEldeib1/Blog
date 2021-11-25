import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Show from "../views/Show.vue";
import Error from "../views/Error.vue";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "List",
        component: List,
    },
    {
        path: "/home",
        redirect: { name: "Home" },
    },
    {
        path: "/show:id",
        name: "Show",
        component: Show,
        props: true,
    },
    {
        path: "/404",
        name: "Error",
        component: Error,
    },
    {
        path: "*",
        redirect: { name: "Error" },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;

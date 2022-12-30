import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuestionView from "@/views/QuestionView.vue";
import RequestView from "@/views/RequestView.vue";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/question/:id",
    name: "question",
    component: QuestionView,
  },
  {
    path: "/request",
    name: "request",
    component: RequestView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

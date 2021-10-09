import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import Eventos from "../views/Eventos.vue";
import Alimentos from "../views/Alimentos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: Eventos
  },
  {
    path: "/alimentos",
    name: "Alimentos",
    component: Alimentos
  },
];

const router = new VueRouter({
  routes,
});

export default router;

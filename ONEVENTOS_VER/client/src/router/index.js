import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import Eventos from "../views/Eventos.vue";

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
  }
];

const router = new VueRouter({
  routes,
});

export default router;

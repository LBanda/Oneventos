import Vue from "vue";
import VueRouter from "vue-router";
import Hack from "../views/Hack.vue";
import Eventos from "../views/Eventos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hack",
    component: Hack
  },
  {
    path: "/eventos/crear",
    name: "CrearEvento",
    component: Eventos
  }
];

const router = new VueRouter({
  routes,
});

export default router;

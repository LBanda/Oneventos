import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Administrador/Inicio.vue";
import Eventos from "../views/Administrador/Eventos.vue";
import EmpleadosRegistrados from "../views/Administrador/EmpleadosRegistrados.vue";
import Subeventos from "../views/Administrador/Subeventos.vue";
import ParticipantesRegistrados from "../views/Administrador/ParticipantesRegistrados.vue";

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
    path: "/empleadosRegistrados",
    name: "EmpleadosRegistrados",
    component: EmpleadosRegistrados
  },
  {
    path: "/subeventos",
    name: "Subeventos",
    component: Subeventos
  },
  {
    path: "/participantesRegistrados",
    name: "ParticipantesRegistrados",
    component: ParticipantesRegistrados
  },
];

const router = new VueRouter({
  routes,
});

export default router;

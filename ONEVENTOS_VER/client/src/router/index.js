import Vue from "vue";
import VueRouter from "vue-router";
import EventosInicio from "../views/Administrador/EventosInicio.vue";
import EventoRegistro from "../views/Administrador/EventoRegistro.vue";
import EmpleadosRegistrados from "../views/Administrador/EmpleadosRegistrados.vue";
import SubeventosInicio from "../views/Administrador/SubeventosInicio.vue";
import ParticipantesRegistrados from "../views/Administrador/ParticipantesRegistrados.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/eventosInicio",
    name: "EventosInicio",
    component: EventosInicio
  },
  {
    path: "/eventosRegistro",
    name: "EventoRegistro",
    component: EventoRegistro
  },
  {
    path: "/empleadosRegistrados",
    name: "EmpleadosRegistrados",
    component: EmpleadosRegistrados
  },
  {
    path: "/subeventosInicio",
    name: "SubeventosInicio",
    component: SubeventosInicio
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

import Vue from "vue";
import VueRouter from "vue-router";
import EventosInicioA from "../views/Administrador/EventosInicioA.vue";
import EventoRegistroA from "../views/Administrador/EventoRegistroA.vue";
import EmpleadosRegistradosA from "../views/Administrador/EmpleadosRegistradosA.vue";
import SubeventosInicioA from "../views/Administrador/SubeventosInicioA.vue";
import ParticipantesRegistradosA from "../views/Administrador/ParticipantesRegistradosA.vue";

import EventosInicioC from "../views/ControlAcceso/EventosInicioC.vue";
import EventoRegistroC from "../views/ControlAcceso/EventoRegistroC.vue";
import EmpleadosRegistradosC from "../views/ControlAcceso/EmpleadosRegistradosC.vue";
import SubeventosInicioC from "../views/ControlAcceso/SubeventosInicioC.vue";
import ParticipantesRegistradosC from "../views/ControlAcceso/ParticipantesRegistradosC.vue";
import EmpleadoRegistroC from "../views/ControlAcceso/EmpleadoRegistroC.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/eventosInicioA",
    name: "EventosInicioA",
    component: EventosInicioA
  },
  {
    path: "/eventosRegistroA",
    name: "EventoRegistroA",
    component: EventoRegistroA
  },
  {
    path: "/empleadosRegistradosA",
    name: "EmpleadosRegistradosA",
    component: EmpleadosRegistradosA
  },
  {
    path: "/subeventosInicioA",
    name: "SubeventosInicioA",
    component: SubeventosInicioA
  },
  {
    path: "/participantesRegistradosA",
    name: "ParticipantesRegistradosA",
    component: ParticipantesRegistradosA
  },
  {
    path: "/eventosInicioC",
    name: "EventosInicioC",
    component: EventosInicioC
  },
  {
    path: "/eventoRegistroC",
    name: "EventoRegistroC",
    component: EventoRegistroC
  },
  {
    path: "/empleadosRegistradosC",
    name: "EmpleadosRegistradosC",
    component: EmpleadosRegistradosC
  },
  {
    path: "/subeventosInicioC",
    name: "SubeventosInicioC",
    component: SubeventosInicioC
  },
  {
    path: "/participantesRegistradosC",
    name: "ParticipantesRegistradosC",
    component: ParticipantesRegistradosC
  },
  {
    path: "/empleadoRegistroC",
    name: "EmpleadoRegistroC",
    component: EmpleadoRegistroC
  },
];

const router = new VueRouter({
  routes,
});

export default router;

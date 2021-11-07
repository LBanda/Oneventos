import Vue from "vue";
import VueRouter from "vue-router";

// Administrador
import EventosInicioA from "../views/Administrador/EventosInicioA.vue";
import EventoRegistroA from "../views/Administrador/EventoRegistroA.vue";
import EmpleadosRegistradosA from "../views/Administrador/EmpleadosRegistradosA.vue";
import SubeventosInicioA from "../views/Administrador/SubeventosInicioA.vue";
import ParticipantesRegistradosA from "../views/Administrador/ParticipantesRegistradosA.vue";
import Alimentos from "../views/Administrador/Alimentos.vue";
import Alergias from "../views/Administrador/Alergias.vue";
import Usuarios from "../views/Administrador/Usuarios.vue";

//ControlAcceso
import EventosInicioC from "../views/ControlAcceso/EventosInicioC.vue";
import EventoRegistroC from "../views/ControlAcceso/EventoRegistroC.vue";
import EmpleadosRegistradosC from "../views/ControlAcceso/EmpleadosRegistradosC.vue";
import SubeventosInicioC from "../views/ControlAcceso/SubeventosInicioC.vue";
import ParticipantesRegistradosC from "../views/ControlAcceso/ParticipantesRegistradosC.vue";
import EmpleadoRegistroC from "../views/ControlAcceso/EmpleadoRegistroC.vue";
import InvitadoRegistroC from "../views/ControlAcceso/InvitadoRegistroC.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventosInicioA",
    component: EventosInicioA
  },
  {
    path: "/eventosRegistroA",
    name: "EventoRegistroA",
    component: EventoRegistroA
  },
  {
    path: "/empleadosRegistradosA/:id",
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
  {
    path: "/invitadoRegistroC",
    name: "InvitadoRegistroC",
    component: InvitadoRegistroC
  },
  {
    path: "/menu",
    name: "Alimentos",
    component: Alimentos
  },
  {
    path: "/alergias",
    name: "Alergias",
    component: Alergias
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios
  },
];

const router = new VueRouter({
  routes,
});

export default router;

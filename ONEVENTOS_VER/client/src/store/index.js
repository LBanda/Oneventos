import Vue from 'vue';
import Vuex from 'vuex';
import EventosClient from "@/api/EventosClient";
import InvitadosClient from "@/api/InvitadosClient";

Vue.use(Vuex);

export default new Vuex.Store({
	// El flujo de los datos es: action -> mutation -> state -> getter
	// Este es tu estado y está disponible en toda la app
	// Es como data
	state: {
		eventos: [],
		subeventos: [],
		invitados: []
	},
	// Estos métodos se usan para cambiar el estado, no modifiques el estado excepto aquí
	// Se usa de la siguiente manera: this.$store.commit("setEventos", [])
	mutations: {
		setEventos(state, eventos) {
			state.eventos = eventos;
		},
		addSubevento(state, subevento) {
			state.subeventos.push(subevento);
		},
		setInvitados(state, invitados) {
			state.invitados = invitados;
		}
	},
	// Estos métodos se usan para cargar datos y luego llamar una mutación
	// Es como métodos, pero se llaman así: this.$store.dispatch("setEventos")
	actions: {
		async setEventosAction(state) {
			const eventos = await EventosClient.getAllEventos();
			// Aquí es donde su muta el estado con los nuevos eventos cargados del API
			state.commit("setEventos", eventos);
		},

		async setInvitados(state) {
			const invitados = await InvitadosClient.getAllInvitados();
			// Aquí es donde su muta el estado con los nuevos eventos cargados del API
			state.commit("setInvitados", invitados);
		}
	},
	// Estos métodos se usan para acceder al estado de una manera controlada
	// Es como computed, se usa como: this.$store.getters.getEventos
	getters: {
		getEventos: (state) => state.eventos,
		getSubeventos: (state) => state.subeventos,
		getInvitados: (state) => state.invitados
	}
});

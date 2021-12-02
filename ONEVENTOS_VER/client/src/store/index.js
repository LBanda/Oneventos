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
		setSubventos(state, subeventos) {
			state.subeventos = subeventos;
		},
		addSubevento(state, subevento) {
			state.subeventos.push(subevento);
		},
		addEventoSubeventos(state, { subeventos, eventoId }) {
			state.eventos.forEach(evento => {
				if (evento.ID_Evento === eventoId) {
					evento.subeventos = subeventos;
				}
			});
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

		async getSubeventosAction({ commit }, id) {
			const subeventos = await EventosClient.getSubEventosByEventoId(id);
			// Aquí es donde su muta el estado con los nuevos eventos cargados del API
			commit("addEventoSubeventos", { subeventos, eventoId: id });
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

		getEventoById: (state) => (eventoId) => {
			return state.eventos.find(e => e.ID_Evento === eventoId)
		},

		getSubeventosByEvento: (state) => (eventoId) => {
			return state.eventos
				.find(e => e.ID_Evento === eventoId)
				.subeventos
		},

		getSubeventos: (state) => state.subeventos,

		getInvitados: (state) => state.invitados
	}
});

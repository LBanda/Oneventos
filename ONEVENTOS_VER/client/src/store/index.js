import Vue from 'vue';
import Vuex from 'vuex';
import EventosClient from "@/api/EventosClient";
import InvitadosClient from "@/api/InvitadosClient";
import MenusClient from "@/api/MenusClient";
import AlergiasClient from "@/api/AlergiasClient";
import UsuariosClient from '@/api/UsuariosClient';

Vue.use(Vuex);

export default new Vuex.Store({
	// El flujo de los datos es: action -> mutation -> state -> getter
	// Este es tu estado y está disponible en toda la app
	// Es como data
	state: {
		eventos: [],
		subeventos: [],
		menus: [],
		invitados: [],
		menu: null,
		alergias: [],
		alergia: null,
		users: [],
		user: null

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
		},
		setMenus(state, menus) {
			state.menus = menus;
		},
		setAlergias(state, alergias) {
			state.alergias = alergias;
		},
		addMenu(state, menu) {
			state.menus.push(menu);
		},
		addAlergia(state, alergia) {
			state.menus.push(alergia);
		},
		setUsers(state, users) {
			state.users = users;
		},
		addUser(state, user) {
			state.users.push(user);
		},
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
		},

		/*async setMenus (state){
			const menus = await MenusClient.getAllMenus();
			state.commit("setMenus", menus);
		},*/
		async getMenus({ commit }) {
			const menus = await MenusClient.getAllMenus()
			commit("setMenus", menus);
		},
		async getAlergias({ commit }) {
			const alergias = await AlergiasClient.getAllAlergias()
			commit("setAlergias", alergias);
		},
		async getUsers({ commit }) {
			const users = await UsuariosClient.getAllUsers()
			commit("setUsers", users);
		},
		/*async createUser({commit}, user){
			commit("addUser", user);
		},*/

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
		getInvitados: (state) => state.invitados,
		getMenus: (state) => state.menus,
		getAlergias: (state) => state.alergias,
		getUsers: (state) => state.users

	}
});

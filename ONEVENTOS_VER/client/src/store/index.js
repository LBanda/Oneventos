import Vue from 'vue';
import Vuex from 'vuex';
import EventosClient from "@/api/EventosClient";
import MenusClient from "@/api/MenusClient";
import AlergiasClient from "@/api/AlergiasClient";



Vue.use(Vuex);

export default new Vuex.Store({
	// El flujo de los datos es: action -> mutation -> state -> getter
	// Este es tu estado y está disponible en toda la app
	// Es como data
	state: {
        eventos: [],
        subeventos: [],
		menus: [],
		menu: null,
		alergias: [],
		alergia: null
		
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
		setMenus(state, menus){
			state.menus = menus;
		},
		setAlergias(state, alergias){
			state.alergias = alergias;
		},
		addMenu(state,menu){
			state.menus.push(menu);
		},
		addAlergia(state,alergia){
			state.menus.push(alergia);
		}		
	},
	// Estos métodos se usan para cargar datos y luego llamar una mutación
	// Es como métodos, pero se llaman así: this.$store.dispatch("setEventos")
	actions: {
        async setEventos(state) {
            const eventos = await EventosClient.getAllEventos();
			// Aquí es donde su muta el estado con los nuevos eventos cargados del API
            state.commit("setEventos", eventos);
        },
		/*async setMenus (state){
			const menus = await MenusClient.getAllMenus();
			state.commit("setMenus", menus);
		},*/
		async getMenus({commit}){
			const menus = await MenusClient.getAllMenus()
			commit("setMenus", menus);
		},
		async getAlergias({commit}){
			const alergias = await AlergiasClient.getAllAlergias()
			commit("setAlergias", alergias);
		},
	},
	// Estos métodos se usan para acceder al estado de una manera controlada
	// Es como computed, se usa como: this.$store.getters.getEventos
	getters: {
		getEventos: (state) => state.eventos,
		getSubeventos: (state) => state.subeventos,
		getMenus: (state) => state.menus,
		getAlergias: (state) => state.alergias
		
	}
});

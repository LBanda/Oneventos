import Config from '@/api/config';
import axios from 'axios';

export default class EventosClient {
	/**
	 * Regresa todos los eventos
	 * @return {Promise<[]>} Un array de eventos
	 */
	static async getAllEventos() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/eventos`);
			if (response.status != 200) {
				throw new Error(response.data)
			} else {
				return response.data;
			}
		} catch (e) {
			console.log(e);
			return [];
		}
	}

	/**
	 * @param {number} id El ID del evento
	 * @return {Object} Un evento
	 */
    static async getEvento(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/eventos/${id}`);
			if (response.status != 200) {
				throw new Error(response.data)
			} else {
				return response.data;
			}
		} catch (e) {
			console.log(e);
			return {}
		}
    }

	/**
	 * @param {number} id El ID del evento
	 */
	static async getSubEventosByEventoId(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/eventos/${id}/subeventos`);
			if (response.status != 200) {
				throw new Error(response.data)
			} else {
				return response.data;
			}
		} catch (e) {
			console.log(e);
			return []
		}
    }

	/**
	 * @param {number} id El ID del evento
	 */
	 static async getEmpleadosByEventoId(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/eventos/${id}/empleados`);
			if (response.status != 200) {
				throw new Error(response.data)
			} else {
				return response.data;
			}
		} catch (e) {
			console.log(e);
			return []
		}
    }
}

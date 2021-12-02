import Config from '@/api/config';
import axios from 'axios';

export default class SubeventosClient {
	/**
	 * Regresa todos los subeventos
	 * @param {number} id Un array de subeventos
	 * @return {Promise<[]>}
	 */
	static async getAllSubeventos(id) {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/subeventos/${id}`);
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
    static async getSubeventoById(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/subeventos/${id}`);
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

	 static async getParticipantesBySubeventoId(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/subeventos/${id}/participantes`);
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

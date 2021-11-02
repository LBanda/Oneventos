import Config from '@/api/config';
import axios from 'axios';

export default class EventosClient {
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
}

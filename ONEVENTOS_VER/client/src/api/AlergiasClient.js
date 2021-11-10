import Config from '@/api/config';
import axios from 'axios';

export default class AlergiasClient {
	static async getAllAlergias() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/alergias`);
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

    static async getAlergiaById(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/alergias/${id}`);
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
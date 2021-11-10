import Config from '@/api/config';
import axios from 'axios';

export default class InvitadosClient {

	static async getAllInvitados() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/invitados`);
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

    static async getInvitado(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/invitados/${id}`);
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

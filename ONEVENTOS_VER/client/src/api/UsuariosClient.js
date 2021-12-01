import Config from '@/api/config';
import axios from 'axios';

export default class UsuariosClient {
	static async getAllUsers() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/usuarios`);
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

    static async getUserById(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/usuarios/${id}`);
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

    static async deleteUserById(id) {
        try {
			const response = await axios.delete(`${Config.BASE_URL}/api/usuarios/${id}`);
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
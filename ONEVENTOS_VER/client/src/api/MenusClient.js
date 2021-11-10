import Config from '@/api/config';
import axios from 'axios';

export default class MenusClient {
	static async getAllMenus() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/menu`);
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

    static async getMenuById(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/menu/${id}`);
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
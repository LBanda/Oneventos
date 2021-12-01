import Config from '@/api/config';
import axios from 'axios';

export default class SubeventosClient {
    /**
	 * Regresa todos los eventos
     * @param {number} id
	 * @return {Promise<[]>} Un array de eventos
	 */
    static async getAllSubeventos(id) {
        try {
            const response = await axios.get(`${Config.BASE_URL}/api/subevento/${id}`);
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

}
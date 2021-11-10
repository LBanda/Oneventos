import Config from '@/api/config';
import axios from 'axios';

export default class EmpleadoClient {
	
	static async getAllEmpleados() {
		try {
			const response = await axios.get(`${Config.BASE_URL}/api/empleados`);
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
	 * @param {number} id El ID del empleado
	 */
    static async getEmpleado(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/empleados/${id}`);
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
	 * @param {number} id El ID del empleado
	 */
	static async getInvitadosByEmpleadoId(id) {
        try {
			const response = await axios.get(`${Config.BASE_URL}/api/empleados/${id}/invitados`);
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

import config from '../config/apiConfig';

class Api {
	constructor(config) {
	  this.url = config.url;
	}
	async ingredients() {
		try {
			const response = await fetch(`${this.url}/ingredients`);
			const responseData = await response.json();
			return responseData.data;
		} catch (err) {
			console.log(err);
			return false;
		}
	}
}

const api = new Api(config);

export default api;
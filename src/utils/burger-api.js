import config from '../config/apiConfig';

const api = {

	getIngredients: {
		url: `${config.url}/ingredients`,
		options: {}
	},

	postOrder: {
		url: `${config.url}/orders`,
		options: {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
		}
	}

}

export default api
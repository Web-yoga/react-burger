import config from '../config/apiConfig';

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

export function fetchIngredients(){
	return fetch(`${config.url}/ingredients`)
	.then(checkResponse)
}

export function fetchOrder(body){
	return fetch(`${config.url}/orders`, 
	{
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		body: body,
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(checkResponse)
}
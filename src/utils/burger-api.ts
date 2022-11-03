import config from '../config/apiConfig';
import { CustomResponse } from './../types/ingredients';

const checkResponse = (res: CustomResponse<{success: string; data: string}>) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function fetchIngredients(){
	return fetch(`${config.url}/ingredients`)
		.then(checkResponse)
}

export function fetchOrder(body: string){
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
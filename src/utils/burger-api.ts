import config from '../config/apiConfig';
import { checkResponse } from './check-response';

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
import config from '../config/apiConfig';
import { TIngredientsResponse, TOrderResponse } from '../types/responses';
import { checkResponse } from './check-response';

export function fetchIngredients(){
	return fetch(`${config.url}/ingredients`)
		.then(res => checkResponse<TIngredientsResponse>(res))
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
		.then(res => checkResponse<TOrderResponse>(res))
}
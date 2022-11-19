import config from '../config/apiConfig';
import { TIngredientsResponse, TOrderResponse } from '../types/responses';
import { checkResponse } from './check-response';
import { getCookie } from './cookie';

export function fetchIngredients(){
	return fetch(`${config.url}/ingredients`)
		.then(res => checkResponse<TIngredientsResponse>(res))
}

export function fetchOrder(body: string){
	const token = getCookie('access_token');
	if(token){
		return fetch(`${config.url}/orders`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		})
		.then(res => checkResponse<TOrderResponse>(res))
	}else{
		return Promise.reject('cant access cookie');
	}

}
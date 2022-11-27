import config from '../config/apiConfig';
import { request } from './check-response';
import { getCookie } from './cookie';

export function fetchIngredients(){
	return request(`${config.url}/ingredients`, {method: 'GET'})
}

export function fetchOrder(body: string){
	const token = getCookie('access_token');
	if(token){
		return request(`${config.url}/orders`, 
			{
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				body: body,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': token
				}
			}
		)		
	}else{
		return Promise.reject('cant access cookie');
	}

}
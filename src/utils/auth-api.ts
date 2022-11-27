import config from '../config/apiConfig';
import { getCookie } from './cookie';
import { request } from './check-response';
import { TFormRegisterUser } from '../types/form';

export function fetchLogin(body: string){
	return request(`${config.url}/auth/login`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}

export function fetchRegister(body: string){
	return request(`${config.url}/auth/register`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}

export function fetchLogout(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return request(`${config.url}/auth/logout`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}

export function fetchToken(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return request(`${config.url}/auth/token`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}

export function fetchUser(){
	const token = getCookie('access_token');
	if(token){
		return request(`${config.url}/auth/user`, 
			{
				method: 'GET',
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

export function fetchUpdateUser(formData: TFormRegisterUser){
	const token = getCookie('access_token');
	const body = JSON.stringify(formData);
	if(token){
		return request(`${config.url}/auth/user`, 
			{
				method: 'PATCH',
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

export function sendResetEmail(body: string){
	return request(`${config.url}/password-reset`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}

export function passwordReset(body: string){
	return request(`${config.url}/password-reset/reset`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	)
}
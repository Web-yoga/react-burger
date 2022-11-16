import config from '../config/apiConfig';
import { getCookie } from './cookie';
import { checkResponse } from './check-response';
import { TAuthResponse } from '../types/responses';
import { TFormUpdateUser } from '../types/form';

export function fetchLogin(body: string){
	return fetch(`${config.url}/auth/login`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<TAuthResponse>(res))
}

export function fetchRegister(body: string){
	return fetch(`${config.url}/auth/register`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<any>(res))
}

export function fetchLogout(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return fetch(`${config.url}/auth/logout`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<any>(res))
}

export function fetchToken(){
	const body = JSON.stringify({
		token: getCookie('token')
	});
	return fetch(`${config.url}/auth/token`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<any>(res))
}

export function fetchUser(){
	const token = getCookie('access_token');
	if(token){
		return fetch(`${config.url}/auth/user`, 
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
		})
		.then(res => checkResponse<any>(res))
	}else{
		return Promise.reject('cant access cookie');
	}

}

export function fetchUpdateUser(formData: TFormUpdateUser){
	const token = getCookie('access_token');
	const body = JSON.stringify(formData);
	if(token){
		return fetch(`${config.url}/auth/user`, 
			{
				method: 'PATCH',
				mode: 'cors',
				cache: 'no-cache',
				body: body,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': token
				}
			})
			.then(res => checkResponse<any>(res))
	}else{
		return Promise.reject('cant access cookie');
	}
}

export function sendResetEmail(body: string){
	return fetch(`${config.url}/password-reset`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<any>(res))
}

export function passwordReset(body: string){
	return fetch(`${config.url}/password-reset/reset`, 
		{
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => checkResponse<any>(res))
}
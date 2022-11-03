import config from '../config/apiConfig';
import { getCookie } from './cookie';
import { CustomResponse } from './../types/ingredients';

const checkResponse = (res: CustomResponse<{success: string; data: string}>) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

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
		.then(checkResponse)
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
		.then(checkResponse)
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
		.then(checkResponse)
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
		.then(checkResponse)
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
		.then(checkResponse)
	}else{
		return Promise.reject('cant access cookie');
	}

}

export function fetchUpdateUser(formData: any){
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
			.then(checkResponse)
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
		.then(checkResponse)
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
		.then(checkResponse)
}
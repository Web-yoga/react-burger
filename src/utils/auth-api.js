import config from '../config/apiConfig';

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function sendResetEmail(body){
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

export function passwordReset(body){
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
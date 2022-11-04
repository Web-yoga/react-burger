import { CustomResponse } from './../types/ingredients';

export const checkResponse = (res: CustomResponse<{success: string; data: string}>) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
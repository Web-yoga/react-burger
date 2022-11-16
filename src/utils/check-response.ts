import { CustomResponse } from '../types/responses';

export const checkResponse = <TResponse>(res: CustomResponse<TResponse>) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
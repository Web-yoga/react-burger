import { CustomResponse, TIngredient } from './../types/ingredients';

export const checkResponse = (res: CustomResponse<{success: string; data: ReadonlyArray<TIngredient>}>) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
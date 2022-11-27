import { TIngredient } from "./ingredients";

export interface CustomResponse<T> extends Body {
	readonly headers: Headers;
	readonly ok: boolean;
	readonly redirected: boolean;
	readonly status: number;
	readonly statusText: string;
	readonly trailer?: Promise<Headers>;
	readonly type: ResponseType;
	readonly url: string;
	clone(): Response;
	json(): Promise<T>;
}

export type TIngredientsResponse = {
	success: string; 
	data: ReadonlyArray<TIngredient>;
};

export type TOrderResponse = {
	name: string;
	order: {
		number: number;
	}
	success: boolean;
};

export type TAuthResponse = {
	readonly success: string;
	readonly user: {
		readonly name: string;
		readonly email: string;
	};
	readonly accessToken: string;
	readonly refreshToken: string;
};
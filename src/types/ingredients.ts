export type TIngredient = {
	readonly _id: string;
	readonly name: string;
	readonly type: "bun" | "main" | "sauce";
	readonly proteins: number;
	readonly fat: number;
	readonly carbohydrates: number;
	readonly calories: number;
	readonly price: number;
	readonly image: string;
	readonly image_mobile: string;
	readonly image_large: string;
	readonly __v: number;
};

export type TUniqueIngredient = TIngredient & {
	readonly unique_key_id: string;
}

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


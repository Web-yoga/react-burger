export type TFormUpdateUser = {
	readonly name: string;
	readonly email: string;
	readonly password: string;
}

export type TFormLoginUser = {
	readonly email: string;
	readonly password: string;
}
import { setCookie, getCookie } from "./cookie";

export const login = (refreshToken: string, accessToken: string): void => {
    setCookie('token', refreshToken);
	setCookie('access_token', accessToken, {'max-age': 1500});
}

export const logout = (): void => {
	setCookie('token', null, {expires: -1});
	setCookie('access_token', null, {expires: -1});
}

export const isLogin = (): boolean => {
	if (getCookie('token')) {
		return true;
    }
	return false;
}
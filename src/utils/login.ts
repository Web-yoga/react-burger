import { setCookie, getCookie, deleteCookie } from "./cookie";

export const login = (refreshToken: string, accessToken: string): void => {
    setCookie('token', refreshToken);
	setCookie('access_token', accessToken, {'max-age': 1500});
}

export const logout = (): void => {
	deleteCookie('token');
	deleteCookie('access_token');
}

export const isLogin = (): boolean => {
	if (getCookie('token')) {
		return true;
    }
	return false;
}
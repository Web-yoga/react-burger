import { setCookie, getCookie } from "./cookie";

export const login = (refreshToken) => {
    setCookie('token', refreshToken);
}

export const logout = () => {
	setCookie('token', null, {expires: -1});
}

export const isLogin = () => {
	if (getCookie('token')) {
		return true;
    }
	return false;
}
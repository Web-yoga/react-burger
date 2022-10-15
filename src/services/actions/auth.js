import { 
	fetchLogin,
	fetchRegister,
	fetchToken,
	fetchLogout,
	fetchUser,
	fetchUpdateUser
} from '../../utils/auth-api';
import { login, logout } from '../../utils/login';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const TOKEN = 'TOKEN';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_FAILED = 'TOKEN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILED = 'LOAD_USER_FAILED';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export function getRegister(data){
	return function (dispatch){
		dispatch({
			type: REGISTER
		})
		fetchRegister(JSON.stringify(data))
		.then(res => {
			if(res && res.success){
				if(res.refreshToken){
					login(res.refreshToken);
				}
				dispatch({
					type: REGISTER_SUCCESS,
					user: res.user,
					accessToken: res.accessToken
				})
			}else{
				dispatch({
					type: REGISTER_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: REGISTER_FAILED,
				message: err.message
			})
		})
	}
}

export function getLogin(data){
	return function (dispatch){
		dispatch({
			type: LOGIN
		})
		fetchLogin(JSON.stringify(data))
		.then(res => {
			if(res && res.success){
				if(res.refreshToken){
					login(res.refreshToken);
				}
				dispatch({
					type: LOGIN_SUCCESS,
					user: res.user,
					accessToken: res.accessToken
				})
			}else{
				dispatch({
					type: LOGIN_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: LOGIN_FAILED,
				message: err.message
			})
		})
	}
}

export function getToken(){
	return function (dispatch){
		dispatch({
			type: TOKEN
		});
		fetchToken()
		.then(res => {
			if(res && res.success){
				if(res.refreshToken){
					login(res.refreshToken);
				}
				dispatch({
					type: TOKEN_SUCCESS,
					accessToken: res.accessToken
				})
			}else{
				dispatch({
					type: TOKEN_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: TOKEN_FAILED
			})
		})
	}
}

export function getLogout(data){
	return function (dispatch){
		dispatch({
			type: LOGOUT
		})
		fetchLogout()
		.then(res => {
			if(res && res.success){
				logout();
				dispatch({
					type: LOGOUT_SUCCESS,
				})
			}else{
				dispatch({
					type: LOGOUT_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: LOGOUT_FAILED
			})
		})
	}
}

export function getUser(token){
	return function (dispatch){
		dispatch({
			type: LOAD_USER
		})
		fetchUser(token)
		.then(res => {
			if(res && res.success){
				dispatch({
					type: LOAD_USER_SUCCESS,
					payload: res
				})
			}else{
				dispatch({
					type: LOAD_USER_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: LOAD_USER_FAILED,
				payload: err.message
			})
		})
	}
}

export function updateUser(formData, token){
	return function (dispatch){
		dispatch({
			type: UPDATE_USER
		})
		fetchUpdateUser(formData, token)
		.then(res => {
			if(res && res.success){
				dispatch({
					type: UPDATE_USER_SUCCESS,
					payload: res
				})
			}else{
				dispatch({
					type: UPDATE_USER_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: UPDATE_USER_FAILED,
				payload: err.message
			})
		})
	}
}
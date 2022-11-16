import { 
	fetchLogin,
	fetchRegister,
	fetchToken,
	fetchLogout,
	fetchUser,
	fetchUpdateUser
} from '../../utils/auth-api';
import { login, logout } from '../../utils/login';
import { AppDispatch, AppThunk } from '../../types';
import { TAuthResponse } from '../../types/responses';
import { TFormRegisterUser, TFormLoginUser } from '../../types/form';

import{
	AUTH_REGISTER,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_FAILED,
	AUTH_LOGIN,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILED,
	AUTH_TOKEN,
	AUTH_TOKEN_SUCCESS,
	AUTH_TOKEN_FAILED,
	AUTH_LOGOUT,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_FAILED,
	AUTH_LOAD_USER,
	AUTH_LOAD_USER_SUCCESS,
	AUTH_LOAD_USER_FAILED,
	AUTH_UPDATE_USER,
	AUTH_UPDATE_USER_SUCCESS,
	AUTH_UPDATE_USER_FAILED
} from '../constants';

export interface IAuthRegisterAction {
	readonly type: typeof AUTH_REGISTER;
}

export interface IAuthRegisterSuccessAction {
	readonly type: typeof AUTH_REGISTER_SUCCESS;
	readonly user: TAuthResponse;
}

export interface IAuthRegisterFailedAction {
	readonly type: typeof AUTH_REGISTER_FAILED;
	readonly message?: string;
}

export interface IAuthLoginAction {
	readonly type: typeof AUTH_LOGIN;
}

export interface IAuthLoginSuccessAction {
	readonly type: typeof AUTH_LOGIN_SUCCESS;
	readonly user: TAuthResponse; 
}

export interface IAuthLoginFailedAction {
	readonly type: typeof AUTH_LOGIN_FAILED;
	readonly message?: string;
}

export interface IAuthTokenAction {
	readonly type: typeof AUTH_TOKEN;
}

export interface IAuthTokenSuccessAction {
	readonly type: typeof AUTH_TOKEN_SUCCESS;
}

export interface IAuthTokenFailedAction {
	readonly type: typeof AUTH_TOKEN_FAILED;
}

export interface IAuthLogoutAction {
	readonly type: typeof AUTH_LOGOUT;
}

export interface IAuthLogoutSuccessAction {
	readonly type: typeof AUTH_LOGOUT_SUCCESS;
}

export interface IAuthLogoutFailedAction {
	readonly type: typeof AUTH_LOGOUT_FAILED;
}

export interface IAuthLoadUserAction {
	readonly type: typeof AUTH_LOAD_USER;
}

export interface IAuthLoadUserSuccessAction {
	readonly type: typeof AUTH_LOAD_USER_SUCCESS;
	readonly payload: TAuthResponse;
}

export interface IAuthLoadUserFailedAction {
	readonly type: typeof AUTH_LOAD_USER_FAILED;
	readonly payload?: string;
}

export interface IAuthUpdateAction {
	readonly type: typeof AUTH_UPDATE_USER;
}

export interface IAuthUpdateSuccessAction {
	readonly type: typeof AUTH_UPDATE_USER_SUCCESS;
	readonly payload: TAuthResponse;
}

export interface IAuthUpdateFailedAction {
	readonly type: typeof AUTH_UPDATE_USER_FAILED;
	readonly payload?: string;
}

export type IAuthActions = 
	| IAuthRegisterAction
	| IAuthRegisterSuccessAction
	| IAuthRegisterFailedAction
	| IAuthLoginAction
	| IAuthLoginSuccessAction
	| IAuthLoginFailedAction
	| IAuthTokenAction
	| IAuthTokenSuccessAction
	| IAuthTokenFailedAction
	| IAuthLogoutAction
	| IAuthLogoutSuccessAction
	| IAuthLogoutFailedAction
	| IAuthLoadUserAction
	| IAuthLoadUserSuccessAction
	| IAuthLoadUserFailedAction
	| IAuthUpdateAction
	| IAuthUpdateSuccessAction
	| IAuthUpdateFailedAction;

export const authRegisterAction = (): IAuthRegisterAction => ({
	type: AUTH_REGISTER
});

export const authRegisterSuccessAction = (user: TAuthResponse): IAuthRegisterSuccessAction => ({
	type: AUTH_REGISTER_SUCCESS,
	user
});

export const authRegisterFailedAction = (message?: string): IAuthRegisterFailedAction => ({
	type: AUTH_REGISTER_FAILED,
	message
});

export const authLoginAction = (): IAuthLoginAction => ({
	type: AUTH_LOGIN
});

export const authLoginSuccessAction = (user: TAuthResponse): IAuthLoginSuccessAction => ({
	type: AUTH_LOGIN_SUCCESS,
	user
});

export const authLoginFailedAction = (message?: string): IAuthLoginFailedAction => ({
	type: AUTH_LOGIN_FAILED,
	message
});

export const authTokenAction = (): IAuthTokenAction => ({
	type: AUTH_TOKEN
});

export const authTokenSuccessAction = (): IAuthTokenSuccessAction => ({
	type: AUTH_TOKEN_SUCCESS
});

export const authTokenFailedAction = (): IAuthTokenFailedAction => ({
	type: AUTH_TOKEN_FAILED
});

export const authLogoutAction = (): IAuthLogoutAction => ({
	type: AUTH_LOGOUT
});

export const authLogoutSuccessAction = (): IAuthLogoutSuccessAction => ({
	type: AUTH_LOGOUT_SUCCESS
});

export const authLogoutFailedAction = (): IAuthLogoutFailedAction => ({
	type: AUTH_LOGOUT_FAILED
});

export const authLoadUserAction = (): IAuthLoadUserAction => ({
	type: AUTH_LOAD_USER
});

export const authLoadUserSuccessAction = (payload: TAuthResponse): IAuthLoadUserSuccessAction => ({
	type: AUTH_LOAD_USER_SUCCESS,
	payload
});

export const authLoadUserFailedAction = (payload?: string): IAuthLoadUserFailedAction => ({
	type: AUTH_LOAD_USER_FAILED,
	payload
});

export const authUpdateAction = (): IAuthUpdateAction => ({
	type: AUTH_UPDATE_USER
});

export const authUpdateSuccessAction = (payload: TAuthResponse): IAuthUpdateSuccessAction => ({
	type: AUTH_UPDATE_USER_SUCCESS,
	payload
});

export const authUpdateFailedAction = (payload?: string): IAuthUpdateFailedAction => ({
	type: AUTH_UPDATE_USER_FAILED,
	payload
});

export const getRegister: AppThunk = (data: TFormRegisterUser) => (dispatch: AppDispatch) => {
		dispatch(authRegisterAction())
		fetchRegister(JSON.stringify(data))
		.then(res => {
			if(res && res.success){
				login(res.refreshToken, res.accessToken);
				dispatch(authRegisterSuccessAction(res))
			}else{
				dispatch(authRegisterFailedAction())
			}
		}).catch( err =>{
			dispatch(authRegisterFailedAction(err.message))
		})
}

export const getLogin: AppThunk = (data: TFormLoginUser) => (dispatch: AppDispatch) =>{
	dispatch(authLoginAction())
	fetchLogin(JSON.stringify(data))
	.then(res => {
		if(res && res.success){
			login(res.refreshToken, res.accessToken);
			dispatch(authLoginSuccessAction(res))
		}else{
			dispatch(authLoginFailedAction())
		}
	}).catch( err =>{
		dispatch(authLoginFailedAction(err.message))
	})
}

export const getToken: AppThunk = () => (dispatch: AppDispatch) => {
	dispatch(authTokenAction());
	fetchToken()
	.then(res => {
		if(res && res.success){
			login(res.refreshToken, res.accessToken);
			dispatch(authTokenSuccessAction())
		}else{
			dispatch(authTokenFailedAction())
		}
	}).catch( err =>{
		dispatch(authTokenFailedAction())
	})
}

export const getLogout: AppThunk = () => (dispatch: AppDispatch) => {
	dispatch(authLogoutAction())
	fetchLogout()
	.then(res => {
		if(res && res.success){
			logout();
			dispatch(authLogoutSuccessAction())
		}else{
			dispatch(authLogoutFailedAction())
		}
	}).catch( err =>{
		dispatch(authLogoutFailedAction())
	})
}

export const getUser: AppThunk = () => (dispatch: AppDispatch) => {
	dispatch(authLoadUserAction())
	fetchUser()
	.then(res => {
		if(res && res.success){
			dispatch(authLoadUserSuccessAction(res))
		}else{
			dispatch(authLoadUserFailedAction())
		}
	}).catch( err =>{
		fetchToken().then(res =>{
			if(res && res.success){
				login(res.refreshToken, res.accessToken);
				fetchUser().then(res => {
					if(res && res.success){
						dispatch(authLoadUserSuccessAction(res))
					}else{
						dispatch(authLoadUserFailedAction())
					}
				}).catch( err =>{
					dispatch(authLoadUserFailedAction(err.message))
				})
			}else{
				dispatch(authLoadUserFailedAction())
			}
		}).catch( err =>{
			dispatch(authLoadUserFailedAction(err.message))
		})
		
	})
}

export const updateUser: AppThunk = (formData: TFormRegisterUser) => (dispatch: AppDispatch) => {
	dispatch(authUpdateAction())
	fetchUpdateUser(formData)
	.then(res => {
		if(res && res.success){
			dispatch(authUpdateSuccessAction(res))
		}else{
			dispatch(authUpdateFailedAction())
		}
	}).catch( err =>{
		dispatch(authUpdateFailedAction(err.message))
	})
}
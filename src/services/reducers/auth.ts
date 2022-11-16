import { IAuthActions } from "../actions/auth";
import { TFormRegisterUser } from "../../types/form";
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

type TAuthState = {
	loading: boolean,
	error: boolean,
	message?: string | null,
	user: TFormRegisterUser | null
}

const initialState: TAuthState = {
	loading: false,
	error: false,
	message: null,
	user: null
}

export const authReducer = (state = initialState, action: IAuthActions): TAuthState => {

	switch( action.type ){
		case AUTH_REGISTER: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_REGISTER_SUCCESS: {
			return{
				...state,
				user: action.user.user,
				loading: false
			}
		}
		case AUTH_REGISTER_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.message
			}
		}
		case AUTH_LOGIN: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_LOGIN_SUCCESS: {
			return{
				...state,
				user: action.user.user,
				loading: false
			}
		}
		case AUTH_LOGIN_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.message
			}
		}
		case AUTH_TOKEN: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_TOKEN_SUCCESS: {
			return{
				...state,
				loading: false
			}
		}
		case AUTH_TOKEN_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		case AUTH_LOGOUT: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_LOGOUT_SUCCESS: {
			return{
				...initialState
			}
		}
		case AUTH_LOGOUT_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		case AUTH_LOAD_USER: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_LOAD_USER_SUCCESS: {
			return{
				...state,
				user: action.payload.user,
				loading: false
			}
		}
		case AUTH_LOAD_USER_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.payload
			}
		}
		case AUTH_UPDATE_USER: {
			return{
				...state,
				loading: true,
				error: false,
				message: null
			}
		}
		case AUTH_UPDATE_USER_SUCCESS: {
			return{
				...state,
				user: action.payload.user,
				message: 'Обновление данных прошло успешно!',
				loading: false
			}
		}
		case AUTH_UPDATE_USER_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.payload
			}
		}
		default: { 
			return state
		}
	}

}
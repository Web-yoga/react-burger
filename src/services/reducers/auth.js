import { 
	REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	TOKEN,
	TOKEN_SUCCESS,
	TOKEN_FAILED,
	LOGOUT,
	LOGOUT_SUCCESS,
	LOGOUT_FAILED,
	LOAD_USER,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAILED
} from "../actions/auth"

const initialState = {
	loading: false,
	error: false,
	message: null,
	user: {},
	accessToken: null
}

export const authReducer = (state = initialState, action) => {

	switch( action.type ){
		case REGISTER: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case REGISTER_SUCCESS: {
			return{
				...state,
				user: action.user,
				accessToken: action.accessToken,
				loading: false
			}
		}
		case REGISTER_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.message
			}
		}
		case LOGIN: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case LOGIN_SUCCESS: {
			return{
				...state,
				user: action.user,
				accessToken: action.accessToken,
				loading: false
			}
		}
		case LOGIN_FAILED: {
			return{
				...state,
				loading: false,
				error: true,
				message: action.message
			}
		}
		case TOKEN: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case TOKEN_SUCCESS: {
			return{
				...state,
				accessToken: action.accessToken,
				loading: false
			}
		}
		case TOKEN_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		case LOGOUT: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case LOGOUT_SUCCESS: {
			return{
				...initialState
			}
		}
		case LOGOUT_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		case LOAD_USER: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case LOAD_USER_SUCCESS: {
			return{
				...state,
				user: action.payload.user,
				message: null,
				loading: false
			}
		}
		case LOAD_USER_FAILED: {
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
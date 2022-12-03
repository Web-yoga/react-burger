import { authReducer } from './auth'; 
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

describe('auth reducer', () => {

	const userDataResponce = {
		name: 'test name'
	}

	it('should return the initial sate', () => {
		expect(authReducer(undefined, {}))
		.toEqual(
			{
				loading: false,
				error: false,
				message: null,
				user: null
			}
		)
	});

	it('should handle AUTH_REGISTER', () => {
		expect(authReducer([], {
			type: AUTH_REGISTER
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_REGISTER_SUCCESS', () => {
		expect(authReducer([], {
			type: AUTH_REGISTER_SUCCESS,
			user: { 
				success: true, 
				user: userDataResponce
			}
		}))
		.toEqual(
			{
				user: userDataResponce,
				loading: false
			}
		)
	});

	it('should handle AUTH_REGISTER_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_REGISTER_FAILED,
			message: 'test'
		}))
		.toEqual(
			{
				loading: false,
				error: true,
				message: 'test'
			}
		)
	});

	it('should handle AUTH_LOGIN', () => {
		expect(authReducer([], {
			type: AUTH_LOGIN
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_LOGIN_SUCCESS', () => {
		expect(authReducer([], {
			type: AUTH_LOGIN_SUCCESS,
			user: { 
				success: true, 
				user: userDataResponce
			}
		}))
		.toEqual(
			{
				user: userDataResponce,
				loading: false
			}
		)
	});

	it('should handle AUTH_LOGIN_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_LOGIN_FAILED,
			message: 'test'
		}))
		.toEqual(
			{
				loading: false,
				error: true,
				message: 'test'
			}
		)
	});

	it('should handle AUTH_TOKEN', () => {
		expect(authReducer([], {
			type: AUTH_TOKEN
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_TOKEN_SUCCESS', () => {
		expect(authReducer([], {
			type: AUTH_TOKEN_SUCCESS
		}))
		.toEqual(
			{
				loading: false
			}
		)
	});

	it('should handle AUTH_TOKEN_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_TOKEN_FAILED
		}))
		.toEqual(
			{
				loading: false,
				error: true
			}
		)
	});

	it('should handle AUTH_LOGOUT', () => {
		expect(authReducer([], {
			type: AUTH_LOGOUT
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_LOGOUT_SUCCESS and return the initial sate', () => {
		expect(authReducer([], {
			type: AUTH_LOGOUT_SUCCESS
		}))
		.toEqual(
			{
				loading: false,
				error: false,
				message: null,
				user: null
			}
		)
	});

	it('should handle AUTH_LOGOUT_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_LOGOUT_FAILED
		}))
		.toEqual(
			{
				loading: false,
				error: true
			}
		)
	});

	it('should handle AUTH_LOAD_USER', () => {
		expect(authReducer([], {
			type: AUTH_LOAD_USER
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_LOAD_USER_SUCCESS', () => {
		expect(authReducer([], {
			type: AUTH_LOAD_USER_SUCCESS,
			payload: { 
				success: true, 
				user: userDataResponce
			}
		}))
		.toEqual(
			{
				user: userDataResponce,
				loading: false
			}
		)
	});

	it('should handle AUTH_LOAD_USER_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_LOAD_USER_FAILED,
			payload: 'test'
		}))
		.toEqual(
			{
				loading: false,
				error: true,
				message: 'test'
			}
		)
	});

	it('should handle AUTH_UPDATE_USER', () => {
		expect(authReducer([], {
			type: AUTH_UPDATE_USER
		}))
		.toEqual(
			{
				loading: true,
				error: false,
				message: null
			}
		)
	});

	it('should handle AUTH_UPDATE_USER_SUCCESS', () => {
		expect(authReducer([], {
			type: AUTH_UPDATE_USER_SUCCESS,
			payload: { 
				success: true, 
				user: userDataResponce
			}
		}))
		.toEqual(
			{
				user: userDataResponce,
				message: 'Обновление данных прошло успешно!',
				loading: false
			}
		)
	});

	it('should handle AUTH_UPDATE_USER_FAILED', () => {
		expect(authReducer([], {
			type: AUTH_UPDATE_USER_FAILED,
			payload: 'test'
		}))
		.toEqual(
			{
				loading: false,
				error: true,
				message: 'test'
			}
		)
	});

});
import { 
	SEND_ORDER,
	SEND_ORDER_FAILED,
	SEND_ORDER_SUCCESS
} from "../actions/order"

const initialState = {
	loading: false,
	error: false,
	order: null
}

export const orderReducer = (state = initialState, action) => {

	switch( action.type ){
		case SEND_ORDER: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case SEND_ORDER_SUCCESS: {
			return{
				...state,
				order: action.payload,
				loading: false
			}
		}
		case SEND_ORDER_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		default: { 
			return state
		}
	}

}
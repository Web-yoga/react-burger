import { TOrderSendActions } from "../actions/order";
import { TOrder } from "../../types/order";
import{
	ORDER_SEND,
	ORDER_SEND_SUCCESS,
	ORDER_SEND_FAILED,
	ORDER_SEND_CLOSE
} from '../constants';

type TOrderSendState = {
	loading: boolean;
	error: boolean;
	order: null | TOrder
}

const initialState: TOrderSendState = {
	loading: false,
	error: false,
	order: null
}

export const orderReducer = (state = initialState, action: TOrderSendActions): TOrderSendState => {

	switch( action.type ){
		case ORDER_SEND: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case ORDER_SEND_SUCCESS: {
			return{
				...state,
				order: action.payload,
				loading: false
			}
		}
		case ORDER_SEND_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		case ORDER_SEND_CLOSE: {
			return initialState
		}
		default: { 
			return state
		}
	}

}
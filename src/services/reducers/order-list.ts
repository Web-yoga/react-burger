import { TOrderListActions } from '../actions/order-list';
import { TWSOrder } from '../../types/websocket';
import{
	ORDER_LIST_CONNECT,
	ORDER_LIST_DISCONNECT,
	ORDER_LIST_WS_SUCCESS,
	ORDER_LIST_WS_CLOSE,
	ORDER_LIST_WS_MESSAGE,
	ORDER_LIST_WS_ERROR
} from '../constants';

export type OrderListState = {
	wsConnected: boolean;
	orders: null | TWSOrder[];
	total: number | null;
	totalToday: number | null;
	error: string;
};

const initialState: OrderListState = {
	wsConnected: false,
	orders: [],
	total: null,
	totalToday: null,
	error: '',
};

export const orderListReducer = ( state = initialState, action: TOrderListActions): OrderListState => {
	switch (action.type) {
		case ORDER_LIST_CONNECT: {
			return {
				...state,
				wsConnected: true
			}
		}
		case ORDER_LIST_DISCONNECT: {
			return {
				...state,
				wsConnected: false
			}
		}
		case ORDER_LIST_WS_SUCCESS: {
			return {
				...state,
				wsConnected: true
			}
		}
		case ORDER_LIST_WS_CLOSE: {
			return initialState
		}
		case ORDER_LIST_WS_MESSAGE: {
			return {
				...state,
				orders: action.payload.orders,
				total: action.payload.total,
				totalToday: action.payload.totalToday
			}
		}
		case ORDER_LIST_WS_ERROR: {
			return {
				...state,
				wsConnected: false,
				error: action.payload
			}
		}
		default: return state;
	}
}

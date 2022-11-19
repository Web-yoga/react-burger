import { TWSOrder } from '../../types/websocket';
import{
	ORDER_LIST_CONNECT,
	ORDER_LIST_DISCONNECT,
	ORDER_LIST_WS_SUCCESS,
	ORDER_LIST_WS_CLOSE,
	ORDER_LIST_WS_MESSAGE,
	ORDER_LIST_WS_ERROR
} from '../constants';

export type TWsConnect = {
	readonly type: typeof ORDER_LIST_CONNECT;
	readonly payload: string;
};

export type TWsDisconnect = {
	readonly type: typeof ORDER_LIST_DISCONNECT;
};

export type TWsSuccess = {
	readonly type: typeof ORDER_LIST_WS_SUCCESS;
};

export type TWsClose = {
	readonly type: typeof ORDER_LIST_WS_CLOSE;
};

export type TWsMessage = {
	readonly type: typeof ORDER_LIST_WS_MESSAGE;
	readonly payload: {
		orders: TWSOrder[];
		total: number | null;
		totalToday: number | null;
	};
};

export type TWsError = {
	readonly type: typeof ORDER_LIST_WS_ERROR;
	readonly payload: string;
};

export type TOrderListActions = TWsConnect 
	| TWsDisconnect 
	| TWsSuccess
	| TWsClose
	| TWsMessage
	| TWsError;
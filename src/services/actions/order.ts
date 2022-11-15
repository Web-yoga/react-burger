import { fetchOrder } from '../../utils/burger-api';
import { AppDispatch, AppThunk } from '../../types';
import { TOrder } from '../../types/order';

import{
	ORDER_SEND,
	ORDER_SEND_SUCCESS,
	ORDER_SEND_FAILED,
	ORDER_SEND_CLOSE
} from '../constants';

export interface IOrderSendAction {
	readonly type: typeof ORDER_SEND;
}

export interface IOrderSendSuccessAction {
	readonly type: typeof ORDER_SEND_SUCCESS;
	readonly payload: TOrder;
}

export interface IOrderSendFailedAction {
	readonly type: typeof ORDER_SEND_FAILED;
}

export interface IOrderSendCloseAction {
	readonly type: typeof ORDER_SEND_CLOSE;
}

export type TOrderSendActions = 
	| IOrderSendAction
	| IOrderSendSuccessAction
	| IOrderSendFailedAction
	| IOrderSendCloseAction;

export const orderSendAction = (): IOrderSendAction => ({
	type: ORDER_SEND
});

export const orderSendSuccessAction = (payload: TOrder): IOrderSendSuccessAction => ({
	type: ORDER_SEND_SUCCESS,
	payload
});

export const orderSendFailedAction = (): IOrderSendFailedAction => ({
	type: ORDER_SEND_FAILED
});

export const orderSendCloseAction = (): IOrderSendCloseAction => ({
	type: ORDER_SEND_CLOSE
});

export const sendOrder: AppThunk = (ingredientsIds: ReadonlyArray<number>) => (dispatch: AppDispatch) => {

		dispatch({
			type: ORDER_SEND
		})

		fetchOrder(JSON.stringify(ingredientsIds))
		.then(res => {
			if(res && res.success){
				dispatch({
					type: ORDER_SEND_SUCCESS,
					payload: res
				})
			}else{
				dispatch({
					type: ORDER_SEND_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: ORDER_SEND_FAILED
			})
		})

};
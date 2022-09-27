import { fetchOrder } from '../../utils/burger-api';

export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';

export function sendOrder(ingredientsIds){

	return function (dispatch){
		dispatch({
			type: SEND_ORDER
		})

		fetchOrder(JSON.stringify(ingredientsIds))
		.then(res => {
			if(res && res.success){
				dispatch({
					type: SEND_ORDER_SUCCESS,
					payload: res
				})
			}else{
				dispatch({
					type: SEND_ORDER_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: SEND_ORDER_FAILED
			})
		})
	}
}
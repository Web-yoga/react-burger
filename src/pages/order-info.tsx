import { useEffect } from 'react';
import { useDispatch } from '../services/hooks';
import OrderInfo from '../components/order-info/order-info';
import AppHeader from './../components/app-header/app-header';
import { getIngredients } from '../services/actions/get-ingredients';
import { ORDER_LIST_CONNECT, ORDER_LIST_DISCONNECT, ORDER_LIST_SERVER_URL } from './../services/constants/index';

export function OrderInfoPage() {

	const dispatch = useDispatch();

	useEffect(() => {
			dispatch(getIngredients());
			dispatch({type: ORDER_LIST_CONNECT, payload: ORDER_LIST_SERVER_URL});
		return () => {
			dispatch({type: ORDER_LIST_DISCONNECT});
		};
	}, [dispatch]);

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				<OrderInfo />
			</main>
		</div>
	)

}
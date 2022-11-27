import { useEffect } from 'react';
import { useDispatch } from '../services/hooks';
import { useLocation } from 'react-router';
import OrderInfo from '../components/order-info/order-info';
import { ORDER_LIST_CONNECT, ORDER_LIST_DISCONNECT, ORDER_LIST_SERVER_URL, ORDER_LIST_AUTH_SERVER_URL } from './../services/constants/index';
import { getCookie } from '../utils/cookie';

export function OrderInfoPage() {

	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		if(location.pathname.includes('/profile/orders/')){
			const tokenFromCookie = getCookie('access_token');
			if (tokenFromCookie){
				const token = tokenFromCookie.split(' ')[1];
				const url = ORDER_LIST_AUTH_SERVER_URL + '?token=' + token;
				dispatch({type: ORDER_LIST_CONNECT, payload: url});
			}
		}else{
			dispatch({type: ORDER_LIST_CONNECT, payload: ORDER_LIST_SERVER_URL});
		}
		
		return () => {
			dispatch({type: ORDER_LIST_DISCONNECT});
		};
	}, [dispatch, location.pathname]);

	return(
		<main className='container--center'>
			<OrderInfo />
		</main>
	)

}
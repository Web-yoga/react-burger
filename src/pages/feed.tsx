import { useEffect } from 'react';
import { useDispatch } from '../services/hooks';
import OrderList from './../components/order-list/order-list';
import OrderListInfo from '../components/order-list-info/order-list-info';
import { ORDER_LIST_CONNECT, ORDER_LIST_DISCONNECT, ORDER_LIST_SERVER_URL } from './../services/constants/index';

import styles from './feed.module.css';

export function FeedPage() {

	const dispatch = useDispatch();

	useEffect(() => {
			dispatch({type: ORDER_LIST_CONNECT, payload: ORDER_LIST_SERVER_URL});
		return () => {
			dispatch({type: ORDER_LIST_DISCONNECT});
		};
	}, [dispatch]);

	return(
		<main className={ `${styles.content} container` }>
			<div className={ `${styles.container} mr-10` }>
				<h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
				<OrderList />
			</div>
			<OrderListInfo />
		</main>
	)

}
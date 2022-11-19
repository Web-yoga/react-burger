import { useMemo } from 'react';
import { useSelector } from '../../services/hooks';

import styles from './order-list-info.module.css';


function OrderListInfo() {
	
	const { orders, total, totalToday } = useSelector(state => state.orderList);
	
	const ordersReady = useMemo(()=>{
		if(!orders) return [];
		return orders.filter(item => item.status === 'done').map(item => item.number);
	}, [orders]);
	//created, pending, done
	const ordersInWork = useMemo(()=>{
		if(!orders) return [];
		return orders.filter(item => item.status === 'pending').map(item => item.number);
	}, [orders]);

	return(
		<section className={styles.info}>
			<div className={`mb-15 ${styles.process}`}>
				<div className={`mr-9  ${styles.ordersNumbersColumn}`}>
					<p className="text text_type_main-medium pb-6">Готовы:</p>
					<div className={`${styles.ordersNumbers} ${styles.ready}`}>
						<ul className={styles.ordersNumbersColumn}>
							{ordersReady.slice(0, 5).map(num => (
								<li className={`pb-2 text text_type_digits-default ${styles.readyNumber}`} key={num}>{num}</li>
							))}
						</ul>
						<ul className={styles.ordersNumbersColumn}>
							{ordersReady.slice(5, 10).map(num => (
								<li className={`pb-2 text text_type_digits-default ${styles.readyNumber}`} key={num}>{num}</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.ordersNumbersColumn}>
					<p className="text text_type_main-medium pb-6">В работе:</p>
					<div className={styles.ordersNumbers}>
						<ul className={styles.ordersNumbersColumn}>
							{ordersInWork.slice(0, 5).map(num => (
								<li className={`pb-2 text text_type_digits-default ${styles.readyNumber}`} key={num}>{num}</li>
							))}
						</ul>
						<ul className={styles.ordersNumbersColumn}>
							{ordersInWork.slice(5, 10).map(num => (
								<li className={`pb-2 text text_type_digits-default ${styles.readyNumber}`} key={num}>{num}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.done}>
				<p className="text text_type_main-medium">Выполнено за все время:</p>
				<p className="mb-15 text text_type_digits-large text--shadow">{total}</p>
				<p className="text text_type_main-medium">Выполнено за сегодня:</p>
				<p className="text text_type_digits-large text--shadow">{totalToday}</p>
			</div>
		</section>
	)
}

export default OrderListInfo;
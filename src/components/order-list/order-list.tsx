import { useSelector } from '../../services/hooks';
import OrderCard from './../order-card/order-card';

import styles from './order-list.module.css';

function OrderList() {
	
	const { orders, wsConnected, error } = useSelector(state => state.orderList);

	return(
		<div className={ `${styles.container} mr-10` }>
			<h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
			<section className={styles.orderList}>
				{ error && <p>Error!</p> }
				{ !wsConnected && <p>Соединение закрыто</p> }
				<ul>
				{ orders && orders.map((order) =>
					(<OrderCard 
						key={order._id}
						order={order}
					/>)	)
				}
				</ul>
			</section>
		</div>
	)
}

export default OrderList;
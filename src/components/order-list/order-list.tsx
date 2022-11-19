import { useSelector } from '../../services/hooks';
import OrderCard from './../order-card/order-card';

import styles from './order-list.module.css';

function OrderList() {
	
	const { orders, error } = useSelector(state => state.orderList);

	return(
		<section className={styles.orderList}>
			{ error && <p>Error!</p> }
			<ul>
			{ orders && orders.map((order) =>
				(<OrderCard 
					key={order._id}
					order={order}
				/>)	)
			}
			{ orders && orders.length === 0 && (
					<p className="pt-20 text text_type_main-medium">Заказов нет</p>
				)
			}
			</ul>
		</section>
	)
}

export default OrderList;
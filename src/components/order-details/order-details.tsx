import styles from './order-details.module.css';
import doneImg from '../../images/done.svg';
import { useSelector } from '../../services/hooks';

const OrderDetails = () => {
	
	const { order } = useSelector( state => state.order );

	return(
		<section className={styles.container}>
			{
				order &&
				<>
					<p className="text text_type_digits-large" data-testid="order-details-number">{order.order.number}</p>
					<p className="text text_type_main-medium mt-8">идентификатор заказа</p>
					<img src={doneImg} alt="order" className="mb-15 mt-15"/>
					<p className="text text_type_main-default">
						Ваш заказ начали готовить
					</p>
					<p className="text text_type_main-default text_color_inactive mt-2">
						Дождитесь готовности на орбитальной станции
					</p>
				</>
			}
		</section>
	)
}

export default OrderDetails;
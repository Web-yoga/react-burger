import styles from './order-details.module.css';
import doneImg from '../../assets/done.svg';

function OrderDetails(){
	return(
		<section className={styles.container}>
			<p className="text text_type_digits-large">034536</p>
			<p className="text text_type_main-medium mt-8">идентификатор заказа</p>
			<img src={doneImg} alt="order" className="mb-15 mt-15"/>
			<p className="text text_type_main-default">
			Ваш заказ начали готовить
			</p>
			<p className="text text_type_main-default text_color_inactive mt-2">
			Дождитесь готовности на орбитальной станции
			</p>
		</section>
	)
}

export default OrderDetails;
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';

import { IngredientsContext } from '../../services/appContext';

import { useFetch } from '../../hooks/use-fetch';
import api from '../../utils/burger-api';

import styles from './order-details.module.css';
import doneImg from '../../images/done.svg';

function OrderDetails(){
	const { ingredientsConstructor } = useContext(IngredientsContext);
	const { bun, ingredients } = ingredientsConstructor;

	const { 
		data: order, 
		loading, 
		error, 
		execute: executeOrder
	} = useFetch(api.postOrder);

	useEffect(()=>{
		const ingredientIds = ingredients.map((item) => item._id);
		executeOrder({ingredients: [...ingredientIds, bun._id, bun._id]});
	}, []);
	return(
			<section className={styles.container}>
			{
				loading && 
				<p>Loading!</p>
			}
			{
				error && 
				<p>Произошла ошибка!</p>
			}
			{
				order &&
				<>
				<p className="text text_type_digits-large">{order.order.number}</p>
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
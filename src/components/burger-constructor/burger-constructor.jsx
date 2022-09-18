import { useContext, useState } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';

import { useFetch } from '../../hooks/use-fetch';
import api from '../../utils/burger-api';

import { BurgerConstructorContext, BurgerOrderContext } from '../../services/appContext';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

	const { ingredientsConstructor} = useContext(BurgerConstructorContext);
	const { bun, ingredients, totalPrice } = ingredientsConstructor;
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

	const { 
		data: order, 
		loading, 
		error, 
		execute: executeOrder
	} = useFetch(api.postOrder);

	const handleOrderClose = () => {
		setIsOrderModalOpen(false);
	}
	const handleOrderOpen = () => {
		const ingredientIds = ingredients.map((item) => item._id);
		executeOrder({ingredients: [ bun._id, ...ingredientIds, bun._id]});
		setIsOrderModalOpen(true);
	}

	return (
		<div className={styles.container}>
			<section className={styles.ingredientsBlockedTop}>
				<ul className={styles.ingredientsList}>
					{
						bun &&
						<BurgerConstructorItem 
							ingredient={bun}
							type={'top'}
							isLocked={true}
							draggable={false}
						/>
					}
					
				</ul>
			</section>
			<section className={styles.ingredientsSection}>
				<ul className={styles.ingredientsList}>
					{
					ingredients &&
					ingredients.map((ingredient, i) => {
						return (
							<BurgerConstructorItem 
								key={ingredient.unique_key_id}
								ingredient={ingredient}
								type={null}
								isLocked={false}
								draggable={true}
							/>
						)
					} )}
				</ul>
    		</section>
			<section className={styles.ingredientsBlockedBottom}>
				<ul className={styles.ingredientsList}>
					{
						bun &&
						<BurgerConstructorItem 
						ingredient={bun}
						type={'bottom'}
						isLocked={true}
						draggable={false}
					/>
					}
					
				</ul>
			</section>
			<section className={styles.order}>
				<span className="text text_type_digits-medium">{ totalPrice }</span>
				<span className="pl-2 pr-10"><CurrencyIcon type="primary" /></span>
				<Button type="primary" size="medium" onClick={handleOrderOpen}>
					{ loading ? "Загрузка" : "Оформить заказ" }
				</Button>
				{
					error && <p>Произошла ошибка при отправке заказа.</p>
				}
				<BurgerOrderContext.Provider value={order} >
				{
					isOrderModalOpen && !loading &&
					<Modal 
						header="" 
						onClose={handleOrderClose}>
						<OrderDetails/>
					</Modal>
				}
				</BurgerOrderContext.Provider>
			</section>
		</div>
	);
}
  
export default BurgerConstructor;
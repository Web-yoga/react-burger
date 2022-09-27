import { useState } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';


import { useSelector, useDispatch } from 'react-redux';
import { sendOrder } from '../../services/actions/order';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

	const {
		ingredients, 
		totalPrice, 
		loading, 
		error
	} = useSelector(state => ({
		ingredients: state.constructorIngredients.ingredients,
		totalPrice: state.constructorIngredients.totalPrice,
		loading: state.order.loading,
		error: state.order.error
	}));
	const dispatch = useDispatch();
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
	
	const bun = ingredients.find(item => item.type === 'bun');
	const ingredientsNoBun = ingredients.filter(item => item.type !== 'bun');


	const handleOrderClose = () => {
		setIsOrderModalOpen(false);
	}
	const handleOrderOpen = () => {
		const ingredientIds = ingredientsNoBun.map((item) => item._id);
		dispatch(sendOrder({ingredients: [ bun._id, ...ingredientIds, bun._id]}));
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
					ingredientsNoBun &&
					ingredientsNoBun.map((ingredient, i) => {
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

				{
					isOrderModalOpen && !loading &&
					<Modal 
						header="" 
						onClose={handleOrderClose}>
						<OrderDetails/>
					</Modal>
				}

			</section>
		</div>
	);
}
  
export default BurgerConstructor;
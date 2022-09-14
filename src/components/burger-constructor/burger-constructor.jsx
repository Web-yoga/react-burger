import { useContext, useState, useMemo, useReducer } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';

import { IngredientsContext } from '../../services/appContext';

import styles from './burger-constructor.module.css';

const initialTotalPrice = {count: 0};

function totalPriceReducer (state, action){
	switch (action.type){
		case "count":
			const {bun, ingredients} = action.payload;
			let total = bun ? bun.price*2 : 0;
			if(ingredients && ingredients.length){
				total = ingredients.reduce((prev, curr) => {
						return { price: prev.price + curr.price}},
					{price: total})['price'];
			}
			return {count: total}
		default:
			throw new Error(`Wrong type of action: ${action.type}`)
	}
}

function BurgerConstructor () {

	const { ingredientsConstructor } = useContext(IngredientsContext);
	const { bun, ingredients } = ingredientsConstructor;

	const [totalPrice, dispatchTotalPrice] = useReducer(totalPriceReducer, initialTotalPrice)

	useMemo( () => {
		dispatchTotalPrice({type: "count", payload:{ bun, ingredients }});
	}, [ bun, ingredients ]); 

	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

	const handleOrderClose = () => {
		setIsOrderModalOpen(false);
	}
	const handleOrderOpen = () => {
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
								key={i}
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
				<span className="text text_type_digits-medium">{ totalPrice.count }</span>
				<span className="pl-2 pr-10"><CurrencyIcon type="primary" /></span>
				<Button type="primary" size="medium" onClick={handleOrderOpen}> Оформить заказ </Button>
				{
					isOrderModalOpen &&
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
import { useCallback, useState } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { useDrop } from "react-dnd";


import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_ORDER, sendOrder } from '../../services/actions/order';
import { 
	SORT_INGREDIENT, 
	COUNT_TOTAL_PRICE, 
	addConstructorIngredient
} from './../../services/actions/constructor-ingredients';
import { DND_TYPES } from '../../constants';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

	const {
		ingredients,
		bun,
		totalPrice, 
		loading, 
		error
	} = useSelector(state => ({
		ingredients: state.constructorIngredients.ingredients,
		bun: state.constructorIngredients.bun,
		totalPrice: state.constructorIngredients.totalPrice,
		loading: state.order.loading,
		error: state.order.error
	}));
	const dispatch = useDispatch();
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

	const [{isHover}, dropTarget] = useDrop({
		accept: DND_TYPES.INGREDIENT,
		drop(ingredient){
			handleDrop(ingredient);
		},
		collect: monitor => ({
			isHover: monitor.isOver(),
		})
	})

	const handleDrop = (ingredient) => {
		dispatch(addConstructorIngredient(ingredient));
		dispatch({
			type: COUNT_TOTAL_PRICE
		});
	}

	const handleSortIngredient = useCallback((dragIndex, hoverIndex) => {
		dispatch({
			type: SORT_INGREDIENT,
			payload: {
				dragIndex,
				hoverIndex
			}
		});
	}, [dispatch]);


	const handleOrderClose = () => {
		setIsOrderModalOpen(false);
		dispatch({
			type: CLOSE_ORDER
		});
	}
	const handleOrderOpen = () => {
		const ingredientIds = ingredients.map((item) => item._id);
		dispatch(sendOrder({ingredients: [ bun._id, ...ingredientIds, bun._id]}));
		setIsOrderModalOpen(true);
	}

	const outline = isHover ? "#2f2f37 dashed 3px" : 'inherit'

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
			<section 
				ref={dropTarget}
				style={{outline}}
				className={styles.ingredientsSection}>
				<ul className={styles.ingredientsList}>
					{
					ingredients &&
					ingredients.map((ingredient, i) => {
						return (
							<BurgerConstructorItem 
								key={ingredient.unique_key_id}
								ingredient={ingredient}
								index={i}
								type={null}
								isLocked={false}
								draggable={true}
								handleSortIngredient={handleSortIngredient}
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
			{ error && <div className={styles.error}>Произошла ошибка при отправке заказа.</div> }
			<section className={styles.order}>
				<span className="text text_type_digits-medium">{ totalPrice }</span>
				<span className="pl-2 pr-10"><CurrencyIcon type="primary" /></span>
				<Button type="primary" size="medium" onClick={handleOrderOpen}>
					{ loading ? "Загрузка" : "Оформить заказ" }
				</Button>
				{
					isOrderModalOpen && !loading && !error &&
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
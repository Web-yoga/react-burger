import { useContext, useState } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { IngredientsContext } from '../../services/appContext';

import styles from './burger-constructor.module.css';

function BurgerConstructor () {

	const { ingredientsConstructor } = useContext(IngredientsContext);
	const { bun, ingredients } = ingredientsConstructor;

	/* Test data */
	const TOTAL = 100;

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalClose = () => {
		setIsModalOpen(false);
	}
	const onOrderModalOpen = () => {
		setIsModalOpen(true);
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
				<span className="text text_type_digits-medium">{ TOTAL }</span>
				<span className="pl-2 pr-10"><CurrencyIcon type="primary" /></span>
				<Button type="primary" size="medium" onClick={onOrderModalOpen}> Оформить заказ </Button>
				{
					isModalOpen &&
					<Modal 
						header="" 
						onClose={handleModalClose}>
						<OrderDetails/>
					</Modal>
				}
			</section>
		</div>
	);
}
  
export default BurgerConstructor;
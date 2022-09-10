import { useState } from 'react';
import { 
	Button, 
	CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import OrderDetails from './../order-details/order-details';
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';

import PropTypes from 'prop-types';

import styles from './burger-constructor.module.css';


function BurgerConstructor ({ ingredients }) {

	/* Test data */
	const total = 100;
	const 	ingredientBlocked =	[{
		"_id":"60666c42cc7b410027a1a9b1",
		"name":"Краторная булка N-200i",
		"type":"bun",
		"proteins":80,
		"fat":24,
		"carbohydrates":53,
		"calories":420,
		"price":1255,
		"image":"https://code.s3.yandex.net/react/code/bun-02.png",
		"image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
		"image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
		"__v":0
	 }];

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
				{ingredientBlocked.map((ingredient, i) => {
						
						return (
							<BurgerConstructorItem 
							key={i}
							ingredient={ingredient}
							type={'top'}
							isLocked={true}
							draggable={false}
							/>
						)
					} )}
				</ul>
			</section>
			<section className={styles.ingredientsSection}>
				<ul className={styles.ingredientsList}>
					{ingredients.map((ingredient, i) => {
						
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
				{ingredientBlocked.map((ingredient, i) => {
						
						return (
							<BurgerConstructorItem 
							key={i}
							ingredient={ingredient}
							type={'bottom'}
							isLocked={true}
							draggable={false}
							/>
						)
					} )}
				</ul>
			</section>
			<section className={styles.order}>
				<span className="text text_type_digits-medium">{ total }</span>
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

BurgerConstructor.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string,
		image_mobile: PropTypes.string,
		image_large: PropTypes.string,
		__v: PropTypes.number.isRequired,
	})).isRequired,
}
  
export default BurgerConstructor;
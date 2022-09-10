import { useState } from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';

import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-ingredients-item.module.css';




const BurgerIngredientsItem = ({ ingredient }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	/* TEST DATA */
	const ingredient_counter = null;

	const handleModalClose = () => {
		setIsModalOpen(false);
	}

	const handleModalOpen = () =>{
		setIsModalOpen(true);
	}

	return(
		<>
			<li 
			className={styles.container} 
			onClick={handleModalOpen}>
				<div className={styles.counter}>
					{
						ingredient_counter && 
						<Counter count={ingredient_counter} size="default" />
					}
				</div>
				<img src={ingredient.image} alt={ingredient.name} className="ml-4 mr-4 mb-1"/>
				<p className={styles.price}>
					<span className="text text_type_digits-default"> {ingredient.price} </span>
					<CurrencyIcon type="primary" />
				</p>
				<p className="text text_type_main-small">
					{ingredient.name}
				</p>
			</li>
			{
				isModalOpen &&
				<Modal 
					header="Детали ингредиента" 
					onClose={handleModalClose}>
					<IngredientDetails ingredient={ingredient}/>
				</Modal>
			}
		</>
	);
}

BurgerIngredientsItem.propTypes = {
	ingredient: ingredientPropTypes.isRequired
}

export default BurgerIngredientsItem;
import { useState } from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';

import PropTypes from 'prop-types';

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
	ingredient: PropTypes.shape({
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
	}).isRequired,
}

export default BurgerIngredientsItem;
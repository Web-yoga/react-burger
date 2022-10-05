import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './../modal/modal';
import IngredientDetails from './../ingredient-details/ingredient-details';
import { SET_CURRENT_INGREDIENT, UNSET_CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';
import { DND_TYPES } from '../../constants';

import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-ingredients-item.module.css';

const BurgerIngredientsItem = ({ ingredient, count }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [ { opacity }, dragRef] = useDrag({
		type: DND_TYPES.INGREDIENT,
		item: ingredient,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	})

	const dispatch = useDispatch();

	const handleModalClose = () => {
		setIsModalOpen(false);
		dispatch({
			type: UNSET_CURRENT_INGREDIENT
		});
	}

	const handleModalOpen = () =>{
		dispatch({
			type: SET_CURRENT_INGREDIENT,
			payload: ingredient
		});
		setIsModalOpen(true);
	}

	return(
		<>
			<li 
			ref={dragRef}
			style={{opacity}}
			className={styles.container} 
			onClick={handleModalOpen}>
				<div draggable={false} className={styles.counter}>
					{
						count > 0 &&
						<Counter count={count} size="default" />
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
					<IngredientDetails/>
				</Modal>
			}
		</>
	);
}

BurgerIngredientsItem.propTypes = {
	ingredient: ingredientPropTypes.isRequired
}

export default BurgerIngredientsItem;
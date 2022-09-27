import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { REMOVE_INGEDIENT } from "../../services/actions/constructor-ingredients";

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-constructor-item.module.css';

const BurgerConstructorItem = ({ ingredient, type, isLocked, draggable }) => {

	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch({
			type: REMOVE_INGEDIENT,
			payload: ingredient.unique_key_id
		});
	}

	let name = ingredient.name;
	if(type === 'top')  name += ' (верх)';
	if(type === 'bottom')  name += ' (низ)';

	return(
		<li className={styles.container}>
			{ 
			draggable &&
			<span  className={styles.drag}><DragIcon type="primary" /></span>
			}

			<ConstructorElement
				type={type}
				isLocked={isLocked}
				text={name}
				thumbnail={ingredient.image}
				price={ingredient.price}
				handleClose={handleClose}
			/>
		</li>
	);
}

BurgerConstructorItem.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
	type: PropTypes.string, 
	isLocked: PropTypes.bool.isRequired, 
	draggable: PropTypes.bool.isRequired,
}

export default BurgerConstructorItem;
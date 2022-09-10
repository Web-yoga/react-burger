import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-constructor-item.module.css';

const BurgerConstructorItem = ({ ingredient, type, isLocked, draggable }) => {
	return(
		<li className={styles.container}>
			{ 
			draggable &&
			<span  className={styles.drag}><DragIcon type="primary" /></span>
			}

			<ConstructorElement
				type={type}
				isLocked={isLocked}
				text={ingredient.name}
				thumbnail={ingredient.image}
				price={ingredient.price}
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
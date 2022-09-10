import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from 'prop-types';

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
				handleClose={null}
				text={ingredient.name}
				thumbnail={ingredient.image}
				price={ingredient.price}
			/>
		</li>
	);
}

BurgerConstructorItem.propTypes = {
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
	type: PropTypes.string, 
	isLocked: PropTypes.bool.isRequired, 
	draggable: PropTypes.bool.isRequired,
}

export default BurgerConstructorItem;
import BurgerIngredientsItem from './../burger-ingredients-item/burger-ingredients-item';

import PropTypes from 'prop-types';

import styles from './burger-ingredients-section.module.css';

const BurgerIngredientsSection = ({ ingredients, filter, title }) => {
	return(
		<>
			<h2 className="text text_type_main-medium mb-6">{title}</h2>
			<ul className={styles.itemsSection}>
				{ 
				ingredients
				.filter( item => item.type === filter)
				.map( (ingredient, i) => 
				<BurgerIngredientsItem 
				key={ ingredient._id + i} 
				ingredient={ingredient}
				/> ) 
				}
			</ul>
		</>
	)
}

BurgerIngredientsSection.propTypes = {
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
	filter: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default BurgerIngredientsSection
import BurgerIngredientsItem from './../burger-ingredients-item/burger-ingredients-item';

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

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
				key={ingredient._id} 
				ingredient={ingredient}
				/> ) 
				}
			</ul>
		</>
	)
}

BurgerIngredientsSection.propTypes = {
	ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
	filter: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default BurgerIngredientsSection
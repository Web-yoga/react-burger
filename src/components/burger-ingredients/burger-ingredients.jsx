import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsSection from '../burger-ingredients-section/burger-ingredients-section';

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-ingredients.module.css';


function BurgerIngredients({ ingredients }) {
	
	const INGREDIENT_TYPES = {
		BUN: 'bun', 
		SAUCE: 'sauce', 
		MAIN: 'main'
	};

	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	return (
		<div className={ `${styles.container} mr-10` }>
			<h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
			<section className={styles.tabs}>
    		  <Tab 
			  value={INGREDIENT_TYPES.BUN} 
			  active={current === INGREDIENT_TYPES.BUN} 
			  onClick={setCurrent}>
    		    Булки
    		  </Tab>
    		  <Tab 
			  value={INGREDIENT_TYPES.SAUCE} 
			  active={current === INGREDIENT_TYPES.SAUCE} 
			  onClick={setCurrent}>
    		    Соусы
    		  </Tab>
    		  <Tab 
			  value={INGREDIENT_TYPES.MAIN} 
			  active={current === INGREDIENT_TYPES.MAIN} 
			  onClick={setCurrent}>
    		    Начинки
    		  </Tab>
    		</section>
			<section className={styles.ingredientsList}>
				<BurgerIngredientsSection
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.BUN}
					title='Булки' />
				<BurgerIngredientsSection
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.SAUCE}
					title='Соусы' />
				<BurgerIngredientsSection
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.MAIN}
					title='Начинки' />
			</section>
		</div>
					
	);
}

BurgerIngredients.propTypes = {
	ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}
  
export default BurgerIngredients;
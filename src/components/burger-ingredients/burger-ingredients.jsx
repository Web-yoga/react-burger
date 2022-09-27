import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsSection from '../burger-ingredients-section/burger-ingredients-section';
import { useSelector } from 'react-redux';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
	
	const INGREDIENT_TYPES = {
		BUN: 'bun', 
		SAUCE: 'sauce', 
		MAIN: 'main'
	};

	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	const {ingredients, loading, error} = useSelector(state => state.ingredients);

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
				{ loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
				{ 
				ingredients && ingredients.length > 0 
				&& 
				<>
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
				</>
				}

			</section>
		</div>
					
	);
}
  
export default BurgerIngredients;
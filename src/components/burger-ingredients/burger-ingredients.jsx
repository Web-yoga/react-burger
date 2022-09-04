import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
	const INGREDIENT_TYPES = {
		BUN: 'bun', 
		SAUCE: 'sauce', 
		TOPPING: 'topping'
	};
	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)
	return (
		<div className={ `${styles.container} mr-10` }>
			<h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
			<div className={styles.tabs}>
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
			  value={INGREDIENT_TYPES.TOPPING} 
			  active={current === INGREDIENT_TYPES.TOPPING} 
			  onClick={setCurrent}>
    		    Начинки
    		  </Tab>
    		</div>
		</div>
	);
}
  
export default BurgerIngredients;
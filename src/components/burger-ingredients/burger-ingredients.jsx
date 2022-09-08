import { useState } from 'react';
import { CurrencyIcon, Tab, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({ ingredients }) {
	const ingredient_counter = 0;
	const INGREDIENT_TYPES = {
		BUN: 'bun', 
		SAUCE: 'sauce', 
		MAIN: 'main'
	};

	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	const IngredientsSection = ({ filter }) => {
		return(
			<ul className={styles.itemsSection}>
				{ 
				ingredients
				.filter( item => item.type === filter)
				.map( (ingredient, i) => <IngredientItem key={i} ingredient={ingredient}/> ) 
				}
			</ul>
		)
	}

	const IngredientItem = ({ ingredient }) => {
		return(
			<li className={styles.itemContainer}>
				<div className={styles.itemCounter}>
					{
						ingredient_counter > 0 
						? <Counter count={ingredient_counter} size="default" />
						: null
					}
				</div>
				<img src={ingredient.image} alt={ingredient.name} className="ml-4 mr-4 mb-1"/>
				<p className={styles.itemPrice}>
					<span className="text text_type_digits-default"> {ingredient.price} </span>
					<CurrencyIcon type="primary" />
				</p>
				<p className="text text_type_main-small">
					{ingredient.name}
				</p>
			</li>
		);
	}

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
				<h2 className="text text_type_main-medium mb-6">Булки</h2>
				<IngredientsSection filter='bun' />
				<h2 className="text text_type_main-medium mt-2 mb-6">Соусы</h2>
				<IngredientsSection filter='sauce' />
				<h2 className="text text_type_main-medium mt-2 mb-6">Начинки</h2>
				<IngredientsSection filter='main' />
			</section>
		</div>
	);
}
  
export default BurgerIngredients;
import { useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsSection from '../burger-ingredients-section/burger-ingredients-section';
import { useSelector } from 'react-redux';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {

	const ingredientMenuRef = useRef(null);
	const bunTitleRef = useRef(null);
	const sauceTitleRef = useRef(null);
	const mainTitleRef = useRef(null);
	
	const INGREDIENT_TYPES = {
		BUN: 'bun', 
		SAUCE: 'sauce', 
		MAIN: 'main'
	};

	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	const {ingredients, loading, error} = useSelector(state => state.ingredients);

const handleScroll = event => {
	const menuTop = ingredientMenuRef.current.getBoundingClientRect().top;
	const bunTop = Math.abs(bunTitleRef.current.getBoundingClientRect().top - menuTop);
	const sauceTop = Math.abs(sauceTitleRef.current.getBoundingClientRect().top - menuTop);
	const mainTop = Math.abs(mainTitleRef.current.getBoundingClientRect().top - menuTop);

	if(bunTop < sauceTop){
		setCurrent(INGREDIENT_TYPES.BUN);
	}else if(sauceTop < mainTop){
		setCurrent(INGREDIENT_TYPES.SAUCE);
	}else{
		setCurrent(INGREDIENT_TYPES.MAIN);
	}
}

	return (
		<div className={ `${styles.container} mr-10` }>
			<h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
			<section 
				ref={ingredientMenuRef}
				className={styles.tabs}
			>
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
			<section 
				className={styles.ingredientsList}
				onScroll={handleScroll}
			>
				{ loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
				{ 
				ingredients && ingredients.length > 0 
				&& 
				<>
				<BurgerIngredientsSection
					ref={bunTitleRef}
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.BUN}
					title='Булки' />
				<BurgerIngredientsSection
					ref={sauceTitleRef}
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.SAUCE}
					title='Соусы' />
				<BurgerIngredientsSection
					ref={mainTitleRef}
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
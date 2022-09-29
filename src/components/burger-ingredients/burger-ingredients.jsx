import { useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredientsSection from '../burger-ingredients-section/burger-ingredients-section';
import { useSelector } from 'react-redux';
import { INGREDIENT_TYPES } from '../../constants';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {

	const ingredientMenuRef = useRef(null);

	const ref = {
		bun: useRef(null),
		sauce: useRef(null),
		main: useRef(null),
	}
	
	const [current, setCurrent] = useState(INGREDIENT_TYPES.BUN)

	const {ingredients, loading, error} = useSelector(state => state.ingredients);

	const handleScroll = event => {
		const menuTop = ingredientMenuRef.current.getBoundingClientRect().top;

		const bunTop = Math.abs(ref.bun.current.getBoundingClientRect().top - menuTop);
		const sauceTop = Math.abs(ref.sauce.current.getBoundingClientRect().top - menuTop);
		const mainTop = Math.abs(ref.main.current.getBoundingClientRect().top - menuTop);
	
		if(bunTop < sauceTop){
			setCurrent(INGREDIENT_TYPES.BUN);
		}else if(sauceTop < mainTop){
			setCurrent(INGREDIENT_TYPES.SAUCE);
		}else{
			setCurrent(INGREDIENT_TYPES.MAIN);
		}

	}

	const onTabClick = (type) => {
		setCurrent(type);
		ref[type].current.scrollIntoView({behavior:'smooth'});
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
			  onClick={()=>{onTabClick(INGREDIENT_TYPES.BUN)}}>
    		    Булки
    		  </Tab>
    		  <Tab 
			  value={INGREDIENT_TYPES.SAUCE} 
			  active={current === INGREDIENT_TYPES.SAUCE} 
			  onClick={()=>{onTabClick(INGREDIENT_TYPES.SAUCE)}}>
    		    Соусы
    		  </Tab>
    		  <Tab 
			  value={INGREDIENT_TYPES.MAIN} 
			  active={current === INGREDIENT_TYPES.MAIN} 
			  onClick={()=>{onTabClick(INGREDIENT_TYPES.MAIN)}}>
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
					ref={ref.bun}
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.BUN}
					title='Булки' />
				<BurgerIngredientsSection
					ref={ref.sauce}
					ingredients = {ingredients}
					filter={INGREDIENT_TYPES.SAUCE}
					title='Соусы' />
				<BurgerIngredientsSection
					ref={ref.main}
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
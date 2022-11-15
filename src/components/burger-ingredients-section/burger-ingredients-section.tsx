import { forwardRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import { TUniqueIngredient } from '../../types/ingredients';

import styles from './burger-ingredients-section.module.css';

type TBurgerIngredientsSectionProps = {
	ingredients: Array<TUniqueIngredient>;
	filter: string;
	title: string;
};

type TRef = HTMLDivElement;

const BurgerIngredientsSection = forwardRef<TRef, TBurgerIngredientsSectionProps>(({ ingredients, filter, title }, ref) => {
	const { constructorIngredients } = useSelector(state => ({
		// @ts-ignore
		constructorIngredients: state.constructorIngredients
	}));
	const countIngredientsInConstructor = useMemo(() => {
		const count: Record<string, number> = {};
		ingredients.forEach((ingredient: TUniqueIngredient) =>{
			if(ingredient.type === 'bun'){
				if(constructorIngredients.bun && constructorIngredients.bun._id === ingredient._id){
					count[ingredient._id] = 2;
				}else{
					count[ingredient._id] = 0;
				}
			}else{
				count[ingredient._id] = constructorIngredients.ingredients.filter((item: TUniqueIngredient) => item._id === ingredient._id).length;
			}
		});
		return count;
	}, [constructorIngredients, ingredients]);

	return(
		<>
			<h2 ref={ref} className="text text_type_main-medium mb-6">{title}</h2>
			<ul className={styles.itemsSection}>
				{ 
				ingredients
				.filter( item => item.type === filter)
				.map( (ingredient, i) => 
				<BurgerIngredientsItem 
				key={ingredient._id} 
				count={countIngredientsInConstructor[ingredient._id]}
				ingredient={ingredient}
				/> ) 
				}
			</ul>
		</>
	)
});

export default BurgerIngredientsSection
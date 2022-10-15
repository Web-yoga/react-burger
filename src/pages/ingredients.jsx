import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from './../components/app-header/app-header';
import IngredientDetails from './../components/ingredient-details/ingredient-details';
import { SET_CURRENT_INGREDIENT } from './../services/actions/current-ingredient';
import { getIngredients } from '../services/actions/get-ingredients';

export function IngredientsPage() {
	const { id } = useParams();
	const { loading, error, ingredients } = useSelector(state => state.ingredients);

	const dispatch = useDispatch();

	useEffect(() => {
		if(ingredients.length > 0){
			const ingredient = ingredients.find(item => item._id === id);
			if(ingredient){
				dispatch({
					type: SET_CURRENT_INGREDIENT,
					payload: ingredient
				});
			} else {
				dispatch({
					type: SET_CURRENT_INGREDIENT,
					payload: 'not found'
				});
			}
		}
	}, [id, ingredients, dispatch]);
	
	useEffect( () => {
		dispatch(getIngredients());
	}, [dispatch]);

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				{ loading && <p>Загрузка...</p> }
				{ error && <p>Произошла ошибка!</p> }
				<IngredientDetails />
			</main>
		</div>
	)

}
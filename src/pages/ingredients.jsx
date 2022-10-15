import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppHeader from './../components/app-header/app-header';
import IngredientDetails from './../components/ingredient-details/ingredient-details';
import { getIngredients } from '../services/actions/get-ingredients';

export function IngredientsPage() {
	const dispatch = useDispatch();
	
	useEffect( () => {
		dispatch(getIngredients());
	}, [dispatch]);

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				<IngredientDetails />
			</main>
		</div>
	)

}
import AppHeader from './../components/app-header/app-header';
import IngredientDetails from './../components/ingredient-details/ingredient-details';

export function IngredientsPage() {
	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
			<IngredientDetails />
			</main>
		</div>
	)
}
import { useEffect, useState } from 'react';
import api from '../../services/apiService';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';


function App() {
	const [ingredients, setIngredients] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hasError, setHasError] = useState(false);


	useEffect(() => {
		const getIngredientsData = async() => {
			setLoading(true);
			const result = await api.ingredients();
			if(result){
				setIngredients(result);
				setLoading(false);
				setHasError(false);
			}else{
				setIngredients([]);
				setLoading(false);
				setHasError(true);
			}
		}
		getIngredientsData();

	}, []);

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				{
				loading 
				? <p>Loading!</p>
				: <BurgerIngredients  ingredients={ ingredients }  />
				}
				{
				loading 
				? <p>Loading!</p>
				: <BurgerConstructor  ingredients={ ingredients } />
				}
				
			</main>
		</div>
	);
}

export default App;

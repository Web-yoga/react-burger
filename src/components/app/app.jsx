/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import { useFetch } from '../../hooks/use-fetch';
import api from '../../utils/burger-api';

import { IngredientsContext } from '../../services/appContext';

import styles from './app.module.css';

function App() {
	const [ingredientsConstructor, setIngredientsConstructor] = useState({bun:null, ingredients:null });

	const { 
		data, 
		loading, 
		error, 
		execute: executeIngredients 
	} = useFetch(api.getIngredients);

	const ingredients = data ? data.data : null;

	useEffect(()=>{
		executeIngredients();
	}, []);

	useEffect(()=>{
		if(ingredients){
			let bun = ingredients.filter(item => item.type === 'bun')[0]
			let others = ingredients.filter(item => item.type !== 'bun')
			setIngredientsConstructor({ bun, ingredients:others });
		}
	}, [ingredients]);
	

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				{ loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
				{ ingredients && <BurgerIngredients  ingredients={ ingredients }  /> }
				<IngredientsContext.Provider value={{ingredientsConstructor, setIngredientsConstructor}} >
					<BurgerConstructor /> 
				</IngredientsContext.Provider>
			</main>
		</div>
	);
}

export default App;
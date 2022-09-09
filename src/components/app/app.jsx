/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { useFetch } from '../../hooks/use-fetch';

import styles from './app.module.css';

function App() {

	const { 
		data: ingredients, 
		loading, 
		error, 
		execute: executeIngredients 
	} = useFetch('ingredients');

	useEffect(()=>{
		executeIngredients();
	}, []);

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				{ loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
				{ ingredients && <BurgerIngredients  ingredients={ ingredients }  /> }
				{ ingredients && <BurgerConstructor   ingredients={ ingredients }  /> }
			</main>
		</div>
	);
}

export default App;
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import addUniqueKeyIds from '../../utils/unique-key-generator';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import { useFetch } from '../../hooks/use-fetch';
import api from '../../utils/burger-api';

import { BurgerConstructorContext } from '../../services/appContext';

import styles from './app.module.css';

function App() {
	const [ingredientsConstructor, setIngredientsConstructor] = useState({ bun:null, ingredients:null, totalPrice: 0 });

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
			const bun = addUniqueKeyIds(ingredients.find(item => item.type === 'bun'));
			const others = addUniqueKeyIds(ingredients.filter(item => item.type !== 'bun'));
			const total = bun ? bun.price*2 : 0;
			
			const totalPrice = ingredients.reduce((prev, curr) => {
						return { price: prev.price + curr.price}},
					{price: total})['price'];
			
			setIngredientsConstructor({ bun, ingredients:others, totalPrice });
		}
	}, [ingredients]);

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				{ loading && <p>Loading!</p> }
				{ error && <p>Error!</p> }
				{ ingredients && <BurgerIngredients  ingredients={ ingredients }  /> }
				<BurgerConstructorContext.Provider value={{ingredientsConstructor, setIngredientsConstructor}} >
					<BurgerConstructor /> 
				</BurgerConstructorContext.Provider>
			</main>
		</div>
	);
}

export default App;
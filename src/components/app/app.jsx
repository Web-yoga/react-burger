/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/get-ingredients';

import styles from './app.module.css';

function App() {

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getIngredients());
	}, [])


/*
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
*/
	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				<BurgerIngredients/> 
				<BurgerConstructor/> 
			</main>
		</div>
	);
}

export default App;
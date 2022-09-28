/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} container` }>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients/> 
					<BurgerConstructor/> 
				</DndProvider>
			</main>
		</div>
	);
}

export default App;
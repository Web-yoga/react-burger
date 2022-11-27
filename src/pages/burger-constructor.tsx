import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';

import styles from './burger-constructor.module.css';

export function BurgerConstructorPage() {
	return (
		<main className={ `${styles.content} container` }>
			<DndProvider backend={HTML5Backend}>
				<BurgerIngredients/> 
				<BurgerConstructor/> 
			</DndProvider>
		</main>
	);
}
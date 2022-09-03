import AppHeader from '../app-header/app-header';
import BurgerConstructor from './../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

function App() {

	const data = [];

	return (
		<div className={ styles.app }>
			<AppHeader/>
			<main className={ `${styles.content} conteiner` }>
				<BurgerConstructor />
				<BurgerIngredients data={data}/>
			</main>
		</div>
	);
}

export default App;

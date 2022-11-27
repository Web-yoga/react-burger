import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from '../../services/hooks';

import SwitchWithModal from '../switch-with-modal/switch-with-modal';
import AppHeader from '../app-header/app-header';
import { getIngredients } from '../../services/actions/get-ingredients';

import styles from './app.module.css';

function App() {
	
	const dispatch = useDispatch();

	useEffect(() => {
			dispatch(getIngredients());
	}, [dispatch]);

	return (
		<Router>
			<div className={styles.app}>
				<AppHeader/>
				<SwitchWithModal/>
			</div>
		</Router>
	);
}

export default App;
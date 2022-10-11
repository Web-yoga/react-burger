import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BurgerConstructorPage } from './pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
			</Switch>
		</Router>
	);
}

export default App;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BurgerConstructorPage, NotFound404 } from './pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/login" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/register" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/forgot-password" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/reset-password" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/profile" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/ingredients/:id" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route>
            		<NotFound404 />
          		</Route>
			</Switch>
		</Router>
	);
}

export default App;
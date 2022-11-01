import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { 
	BurgerConstructorPage, 
	LoginPage, 
	RegisterPage, 
	ForgotPasswordPage, 
	ResetPasswordPage, 
	ProfilePage, 
	IngredientsPage, 
	NotFound404 } from './pages';
import { ProtectedRoute } from './components/protected-route/protected-route';
import { PublicRoute } from './components/public-route/public-route';
import Modal from './components/modal/modal';
import IngredientDetails from './components/ingredient-details/ingredient-details';

type TLocationState = {
	background: {
		hash: string;
		key: string; 
		pathname: string; 
		search: string; 
		state: string;
	}
};

function App() {
	return (
		<Router>
			<SwitchWithModal/>
		</Router>
	);
}

function SwitchWithModal() {
	const history = useHistory();
	const location = useLocation<TLocationState>();
	const background = location.state && location.state.background;

	console.log(background);
	return (
		<div>
			<Switch location={background || location}>
				<Route path="/" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<PublicRoute path="/login" exact={true} redirectTo="/">
          			<LoginPage />
        		</PublicRoute>
				<PublicRoute path="/register" exact={true} redirectTo="/">
          			<RegisterPage />
        		</PublicRoute>
				<PublicRoute path="/forgot-password" exact={true} redirectTo="/">
          			<ForgotPasswordPage />
        		</PublicRoute>
				<PublicRoute path="/reset-password" exact={true} redirectTo="/">
          			<ResetPasswordPage />
        		</PublicRoute>
				<ProtectedRoute path="/profile" redirectTo="/login">
          			<ProfilePage />
        		</ProtectedRoute>
				<Route path="/ingredients/:id" exact={true}>
          			<IngredientsPage />
        		</Route>
				<Route>
            		<NotFound404 />
          		</Route>
			</Switch>

			{ background &&
			<Route path="/ingredients/:id">
				<Modal
					header="Детали ингредиента" 
					onClose={()=>{history.goBack()}}>
					<IngredientDetails/>
				</Modal>
			</Route>
			}
		</div>
	);
}

export default App;
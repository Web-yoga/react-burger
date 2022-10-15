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

function App() {
	return (
		<Router>
			<SwitchWithModal/>
		</Router>
	);
}

function SwitchWithModal() {
	const history = useHistory();
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<div>
			<Switch location={background || location}>
				<Route path="/" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<PublicRoute path="/login" exact={true} redirectTo="/">
          			<LoginPage />
        		</PublicRoute>
				<Route path="/register" exact={true}>
          			<RegisterPage />
        		</Route>
				<Route path="/forgot-password" exact={true}>
          			<ForgotPasswordPage />
        		</Route>
				<Route path="/reset-password" exact={true}>
          			<ResetPasswordPage />
        		</Route>
				<ProtectedRoute path="/profile" exact={true} redirectTo="/login">
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
					onClose={()=>{history.goBack(background.pathname)}}>
					<IngredientDetails/>
				</Modal>
			</Route>
			}
		</div>
	);
}

export default App;
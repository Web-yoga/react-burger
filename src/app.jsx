import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { 
	BurgerConstructorPage, 
	LoginPage, 
	RegisterPage, 
	ForgotPasswordPage, 
	ResetPasswordPage, 
	ProfilePage, 
	IngredientsPage, 
	NotFound404 } from './pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact={true}>
          			<BurgerConstructorPage />
        		</Route>
				<Route path="/login" exact={true}>
          			<LoginPage />
        		</Route>
				<Route path="/register" exact={true}>
          			<RegisterPage />
        		</Route>
				<Route path="/forgot-password" exact={true}>
          			<ForgotPasswordPage />
        		</Route>
				<Route path="/reset-password" exact={true}>
          			<ResetPasswordPage />
        		</Route>
				<Route path="/profile" exact={true}>
          			<ProfilePage />
        		</Route>
				<Route path="/ingredients/:id" exact={true}>
          			<IngredientsPage />
        		</Route>
				<Route>
            		<NotFound404 />
          		</Route>
			</Switch>
		</Router>
	);
}

export default App;
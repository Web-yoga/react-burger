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
import { ProtectedRoute } from './components/protected-route/protected-route';
import { PublicRoute } from './components/public-route/public-route';

function App() {
	return (
		<Router>
			<Switch>
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
		</Router>
	);
}

export default App;
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { 
	BurgerConstructorPage, 
	LoginPage, 
	RegisterPage, 
	ForgotPasswordPage, 
	ResetPasswordPage, 
	ProfilePage, 
	IngredientsPage, 
	FeedPage,
	OrderInfoPage,
	NotFound404 } from '../../pages';
import { ProtectedRoute } from '../../components/protected-route/protected-route';
import { PublicRoute } from '../../components/public-route/public-route';
import Modal from '../../components/modal/modal';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import OrderInfo from '../../components/order-info/order-info';

import styles from './switch-with-modal.module.css';

type TLocationState = {
	background: {
		hash: string;
		key: string; 
		pathname: string; 
		search: string; 
		state: string;
	}
};

function SwitchWithModal() {
	const history = useHistory();
	const location = useLocation<TLocationState>();
	const background = location.state && location.state.background;

	return (
		<div className={styles.wrapContainer}>
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
				<ProtectedRoute path="/profile" exact={true} redirectTo="/login">
          			<ProfilePage />
        		</ProtectedRoute>
				<ProtectedRoute path="/profile/orders" exact={true} redirectTo="/login">
					<ProfilePage />
        		</ProtectedRoute>
				<ProtectedRoute path="/profile/orders/:id" exact={true} redirectTo="/login">
					<OrderInfoPage />
        		</ProtectedRoute>
				<Route path="/ingredients/:id" exact={true}>
          			<IngredientsPage />
        		</Route>
				<Route path="/feed" exact={true}>
          			<FeedPage />
        		</Route>
				<Route path="/feed/:id" exact={true}>
          			<OrderInfoPage />
        		</Route>
				<Route>
            		<NotFound404 />
          		</Route>
			</Switch>

			{ background &&
			<Route path="/ingredients/:id">
				<Modal
					onClose={()=>{history.goBack()}}>
					<IngredientDetails/>
				</Modal>
			</Route>
			}

			{ background &&
			<Route path="/feed/:id">
				<Modal
					onClose={()=>{history.goBack()}}>
					<OrderInfo/>
				</Modal>
			</Route>
			}

			{ background &&
			<Route path="/profile/orders/:id">
				<Modal
					onClose={()=>{history.goBack()}}>
					<OrderInfo/>
				</Modal>
			</Route>
			}
		</div>
	);
}

export default SwitchWithModal;
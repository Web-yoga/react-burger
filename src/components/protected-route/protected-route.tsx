import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { isLogin } from '../../utils/login';

interface IProps extends RouteProps {
	readonly path: string;
	readonly redirectTo: string;
}

export const ProtectedRoute = ({path, redirectTo, ...props}: IProps) => {

	const location = useLocation();

	if(isLogin()){
		return <Route {...props}/>
	}else{
		return (
		<Redirect to={{ 
			pathname: redirectTo,
			state: { from: location.pathname }
		}}/>
		)
	}
}
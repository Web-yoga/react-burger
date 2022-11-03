import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLogin } from '../../utils/login';

interface IProps extends RouteProps {
	readonly path: string;
	readonly redirectTo: string;
};

export function PublicRoute({ path, redirectTo, ...props}: IProps){
	if(!isLogin()){
		return <Route {...props} />
	}else{
		return <Redirect to={{ 
			pathname: redirectTo,
			state: { from: path }
		}}/>
	}
}
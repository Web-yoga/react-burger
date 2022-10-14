import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/login';

export function ProtectedRoute({redirectTo, ...props}){
	if(isLogin()){
		return <Route {...props} />
	}else{
		return <Redirect to={{ 
			pathname: redirectTo,
			state: { from: props.path }
		}}/>
	}
}
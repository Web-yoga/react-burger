import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils/login';
import PropTypes from 'prop-types';

export function PublicRoute({redirectTo, ...props}){
	if(!isLogin()){
		return <Route {...props} />
	}else{
		return <Redirect to={{ 
			pathname: redirectTo,
			state: { from: props.path }
		}}/>
	}
}

PublicRoute.propTypes = {
	redirectTo: PropTypes.string.isRequired
}
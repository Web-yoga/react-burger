import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../services/actions/auth';

import AppHeader from './../components/app-header/app-header';

export function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {loading, error, message} = useSelector(state => state.auth);

	const dispatch = useDispatch();
	const history = useHistory();

	const onLogin = () => {
		dispatch(getLogin({
			email, 
			password 
		}));
		history.replace({ pathname: '/'});
	};

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				<p className="text text_type_main-medium mb-6">Вход</p>
				<div className="mb-6">
					<EmailInput 
						onChange={e => setEmail(e.target.value)} 
						value={email} 
						name={'email'}
					/>
				</div>
				<div className="mb-6">
					<PasswordInput 
						onChange={e => {setPassword(e.target.value)}}
						value={password} 
						name={'password'} 
					/>
				</div>
				<div className="mb-20">
					<Button type="primary" size="medium" onClick={onLogin} htmlType="button">
						{loading ? 'Загрузка...' : 'Войти' }
					</Button>
					{ error && <p className="text text_type_main-small pl-8">Произошла ошибка!</p>}
					{ message && <p className="text text_type_main-small text_color_inactive pl-8">{message}</p>}
				</div>
				<p className="text text_type_main-default text_color_inactive mb-4">
					Вы — новый пользователь? 
					<Link to='/register' className="ml-2">Зарегистрироваться</Link>
				</p>
				<p className="text text_type_main-default text_color_inactive mb-4">
					Забыли пароль? 
					<Link to='/forgot-password' className="ml-2">Восстановить пароль</Link>
				</p>
			</main>
		</div>
	)
}
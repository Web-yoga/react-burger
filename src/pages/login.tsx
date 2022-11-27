import { useState, SyntheticEvent } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from '../services/hooks';
import { getLogin } from '../services/actions/auth';
import { isLogin } from '../utils/login';

type TLocationState = {
	from: string;
};

export function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {loading, message} = useSelector(	state => state.auth );

	const dispatch = useDispatch();
	const location = useLocation<TLocationState>();
	let from = location.state && location.state.from;

	const onLogin = (event: SyntheticEvent) => {
		event.preventDefault();
		dispatch(getLogin({
			email, 
			password 
		}));
	};

	if(isLogin()){
		return (
			<Redirect to={from || '/'} />
		)
	}

	return(
		<main className='container--center'>
			<p className="text text_type_main-medium mb-6">Вход</p>
			<form className="text--center" onSubmit={onLogin}>
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

				{message && 
					<p className="text text_type_main-default">{message}</p>}

				<div className="mb-20">
					<Button type="primary" htmlType="submit" size="medium">
						{loading ? 'Загрузка...' : 'Войти' }
					</Button>
				</div>
			</form>


			<p className="text text_type_main-default text_color_inactive mb-4">
				Вы — новый пользователь? 
				<Link to='/register' className="ml-2">Зарегистрироваться</Link>
			</p>
			<p className="text text_type_main-default text_color_inactive mb-4">
				Забыли пароль? 
				<Link to='/forgot-password' className="ml-2">Восстановить пароль</Link>
			</p>
		</main>
	)
}
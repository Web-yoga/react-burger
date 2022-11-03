import { useState } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { passwordReset } from '../utils/auth-api';

import AppHeader from './../components/app-header/app-header';

type TLocationState = {
	from: string;
};

export function ResetPasswordPage() {
	const [password, setPassword] = useState('');
	const [code, setCode] = useState('');

	const history = useHistory();
	const location = useLocation<TLocationState>();

	const onPasswordReset = async () => {
		const res = await passwordReset(JSON.stringify({
			password: password,
			token: code
		}));
		if(res && res.success){
			history.replace({ pathname: '/login'});
		}
	};

	if( !(location.state && location.state.from === 'forgot-password') ){
		return(
			<Redirect to="/forgot-password"/>
		)
	}

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				<p className="text text_type_main-medium mb-6">Восстановление пароля</p>
				<div className="mb-6">
					<PasswordInput 
						onChange={e => {setPassword(e.target.value)}}
						value={password} 
						name={'Введите новый пароль'} 
					/>
				</div>
				<div className="mb-6">
					<Input 
						type={'text'}
						placeholder={'Введите код из письма'}
						onChange={e => setCode(e.target.value)}
						value={code}
						name={'code'}
						size={'default'}
					/>
				</div>
				<div className="mb-20">
					<Button type="primary" size="medium" onClick={onPasswordReset} htmlType="button">
						Сохранить
					</Button>
				</div>
				<p className="text text_type_main-default text_color_inactive mb-4">
					Вспомнили пароль? 
					<Link to='/login' className="ml-2">Войти</Link>
				</p>
			</main>
		</div>
	)
}
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../services/hooks';
import { getRegister } from '../services/actions/auth';

import AppHeader from './../components/app-header/app-header';

export function RegisterPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {loading, error, message} = useSelector( state => state.auth );

	const dispatch = useDispatch();

	const onRegister = () => {
		dispatch(getRegister({
			email, 
			password, 
			name 
		}));
	};

	return(
		<div className='app'>
			<AppHeader/>
			<main className='container--center'>
				<p className="text text_type_main-medium mb-6">Регистрация</p>
				<div className="mb-6">
					<Input 
						type={'text'}
						placeholder={'Имя'}
						onChange={e => setName(e.target.value)}
						value={name}
						name={'name'}
						size={'default'}
					/>
				</div>
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
					<Button type="primary" size="medium" onClick={onRegister} htmlType="button">
						{loading ? 'Загрузка...' : 'Зарегистрироваться'}
					</Button>
					{ error && <p className="text text_type_main-small pl-8">Произошла ошибка!</p>}
					{ message && <p className="text text_type_main-small text_color_inactive pl-8">{message}</p>}
				</div>
				<p className="text text_type_main-default text_color_inactive mb-4">
					Уже зарегистрированы? 
					<Link to='/login' className="ml-2">Войти</Link>
				</p>
			</main>
		</div>
	)
}
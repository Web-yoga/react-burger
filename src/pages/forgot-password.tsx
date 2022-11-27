import { useState, SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { sendResetEmail } from '../utils/auth-api';

export function ForgotPasswordPage() {
	const [email, setEmail] = useState('');

	const history = useHistory();

	const onRestore = async (event: SyntheticEvent) => {
		event.preventDefault();
		const res = await sendResetEmail(JSON.stringify({
			email: email
		}));
		if(res && res.success){
			history.replace({ pathname: '/reset-password' }, { from: 'forgot-password' } );
		}
	};

	return(
		<main className='container--center'>
			<p className="text text_type_main-medium mb-6">Восстановление пароля</p>
			<form className="text--center" onSubmit={onRestore}>
				<div className="mb-6">
					<EmailInput 
						onChange={e => setEmail(e.target.value)} 
						value={email} 
						name={'email'}
						placeholder={'Укажите e-mail'}
					/>
				</div>
				<div className="mb-20">
					<Button type="primary" htmlType="submit" size="medium">
						Восстановить
					</Button>
				</div>
			</form>

			<p className="text text_type_main-default text_color_inactive mb-4">
				Вспомнили пароль? 
				<Link to='/login' className="ml-2">Войти</Link>
			</p>
		</main>
	)
}
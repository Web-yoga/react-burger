/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from './../components/app-header/app-header';

import styles from './profile.module.css';

export function ProfilePage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return(
		<div className='app'>
			<AppHeader/>
			<main className={`container mt-30 ${styles.wrapper}`}>
				<section className={styles.menu}>
					<NavLink to="/profile" exact activeClassName={styles.activeLink} className="pt-3 pb-3">
						<p className="text text_type_main-medium">Профиль</p>
					</NavLink>
					<NavLink to="/profile/orders" activeClassName={styles.activeLink} className="pt-3 pb-3">
						<p className="text text_type_main-medium">История заказов</p>
					</NavLink>
					<a href="#" className="pt-3 pb-3">
						<p className="text text_type_main-medium">Выход</p>
					</a>
					<p className="text text_type_main-default text_color_inactive mt-20">
						В этом разделе вы можете
						изменить свои персональные данные
					</p>
				</section>
				<section className={styles.content}>
					<div className="ml-15 mb-6">
						<Input 
							type={'text'}
							placeholder={'Имя'}
							onChange={e => setName(e.target.value)}
							value={name}
							name={'name'}
							size={'default'}
							icon={'EditIcon'}
						/>
					</div>
					<div className="ml-15 mb-6">
						<EmailInput 
							onChange={e => setEmail(e.target.value)} 
							value={email} 
							name={'email'}
							icon={'EditIcon'}
						/>
					</div>
					<div className="ml-15 mb-6">
						<PasswordInput 
							onChange={e => {setPassword(e.target.value)}}
							value={password} 
							name={'password'} 
							icon={'EditIcon'}
						/>
					</div>
				</section>
				
			</main>
		</div>
	)
}
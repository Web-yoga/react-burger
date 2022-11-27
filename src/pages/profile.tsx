/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, SyntheticEvent } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import OrderList from '../components/order-list/order-list';
import { getUser, getLogout, updateUser } from '../services/actions/auth';
import { isLogin } from '../utils/login';
import { ORDER_LIST_CONNECT, ORDER_LIST_DISCONNECT, ORDER_LIST_AUTH_SERVER_URL } from './../services/constants/index';
import { getCookie } from '../utils/cookie';

import { Input, PasswordInput, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch} from '../services/hooks';
import { TFormRegisterUser } from '../types/form';



import styles from './profile.module.css';

export function ProfilePage() {
	const [formData, setFormData] = useState<TFormRegisterUser>({ name:'', email:'', password:''});
	const [isFormChanged, setIsFormChanged] = useState(false);
	const {message, user} = useSelector( state => state.auth );
	const dispatch = useDispatch();


	useEffect(() => {
		const tokenFromCookie = getCookie('access_token');
		if (tokenFromCookie){
			const token = tokenFromCookie.split(' ')[1];
			const url = ORDER_LIST_AUTH_SERVER_URL + '?token=' + token;
			dispatch({type: ORDER_LIST_CONNECT, payload: url});
		}
		
		return () => {
			dispatch({type: ORDER_LIST_DISCONNECT});
		};
	}, [dispatch]);

	const setFormDataFromState = () => {
		if(user && user.name && user.email){
			setFormData((prev) => ({
				...prev,
				name: user.name,
				email: user.email,
				password: ''
			}))
		}
	}

	useEffect(()=>{
		setFormDataFromState();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[user])

	useEffect(() => {
		if(isLogin()){
			dispatch(getUser());
		}
	}, [dispatch])

	const loguot = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(getLogout());
	}

	if(!isLogin()){
		return(
			<Redirect to="/login"/>
		)
	}
	const handleFormChange = (e: SyntheticEvent<HTMLInputElement>) => {
		const target = e.target as typeof e.target & {
					name: string;
					value: string;
			  };
		const newFormData = {
			...formData,
			[target.name]: target.value
		}
		setFormData(newFormData);
		if(user){
			if(newFormData.name !== user.name
				|| newFormData.email !== user.email
				|| newFormData.password 
				){
				setIsFormChanged(true);
			}else{
				setIsFormChanged(false);
			}
		}
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(updateUser(formData));
	}

	const handleReset = (e: SyntheticEvent) => {
		e.preventDefault();
		setFormDataFromState();
	}

	return(
		<main className={`container ${styles.wrapper}`}>
			<section className={`mr-15 mt-30 ${styles.menu}`}>
				<NavLink to="/profile" exact activeClassName={styles.activeLink} className="pt-3 pb-3">
					<p className="text text_type_main-medium">Профиль</p>
				</NavLink>
				<NavLink to="/profile/orders" activeClassName={styles.activeLink} className="pt-3 pb-3">
					<p className="text text_type_main-medium">История заказов</p>
				</NavLink>
				<a href="#" className="pt-3 pb-3" onClick={loguot}>
					<p className="text text_type_main-medium">Выход</p>
				</a>
				<p className="text text_type_main-default text_color_inactive mt-20">
					В этом разделе вы можете
					изменить свои персональные данные
				</p>
				{message && 
				<p className="text text_type_main-default">{message}</p>}
			</section>
			<Route path="/profile" exact={true} >
				<section className={`mt-30 ${styles.content}`}>
					<form 
						onSubmit={handleSubmit} 
						onReset={handleReset}>
						<div className="ml-15 mb-6">
							<Input 
								type={'text'}
								placeholder={'Имя'}
								onChange={handleFormChange}
								value={formData.name}
								name={'name'}
								size={'default'}
								icon={'EditIcon'}
							/>
						</div>
						<div className="ml-15 mb-6">
							<EmailInput 
								onChange={handleFormChange} 
								value={formData.email} 
								name={'email'}
								// @ts-ignore
								icon={'EditIcon'}
							/>
						</div>
						<div className="ml-15 mb-6">
							<PasswordInput 
								onChange={handleFormChange}
								value={formData.password || ''} 
								name={'password'} 
								icon={'EditIcon'}
							/>
						</div>
						{
							isFormChanged && (
								<div className="ml-15 mb-6">
									<Button 
									htmlType="submit"
									type="primary" 
									size="medium"
									>Сохранить</Button>
									<Button 
									htmlType="reset"
									type="secondary" 
									size="medium"
									>Отмена</Button>
								</div>
							)
						}
					</form>
				</section>
			</Route>
			<Route path="/profile/orders" exact={true} >
				<section className={`mt-10 ${styles.content}`}>
					<div className={styles.orderList}>
						<OrderList />
					</div>
				</section>
			</Route>
		</main>
	)
}
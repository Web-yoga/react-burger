/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useRouteMatch } from 'react-router-dom';
import { 
	Logo, 
	BurgerIcon, 
	ListIcon, 
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
	const { path } = useRouteMatch();
	return (
		<header className= { `${styles.header} p-4` } >
			<menu className={ `${styles.menu} container` }>
				<NavLink 
					to="/"
					exact 
					className={`${styles.btn} p-5 mr-2`} 
					activeClassName={styles.active}>
						<BurgerIcon type={ path === "/" ? "primary" : "secondary" } />
						<span className='pl-2'>Конструктор</span>
				</NavLink>
				<NavLink 
					to="/order-list"  
					className={`${styles.btn} p-5`}
					activeClassName={styles.active}>
						<ListIcon type={ path === "/order-list" ? "primary" : "secondary" } />
						<span className='pl-2'>Лента заказов</span>
				</NavLink>
				<Logo />
				<NavLink 
					to="/profile"  
					className={`${styles.btn} p-5`}
					activeClassName={styles.active}>
						<ProfileIcon type={ path === "/profile" ? "primary" : "secondary" } />
						<span className='pl-2'>Личный кабинет</span> 
				</NavLink>
			</menu>
		</header>
	);
}

export default AppHeader;
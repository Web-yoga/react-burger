/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useLocation } from 'react-router-dom';
import { 
	Logo, 
	BurgerIcon, 
	ListIcon, 
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
	const { pathname } = useLocation();
	return (
		<header className={ `${styles.header} p-4` } >
			<menu className={ `${styles.menu} container` }>
				<NavLink 
					to="/"
					exact 
					className={`${styles.btn} p-5 mr-2`} 
					activeClassName={styles.active}>
						<BurgerIcon type={ pathname === "/" ? "primary" : "secondary" } />
						<span className='pl-2'>Конструктор</span>
				</NavLink>
				<NavLink 
					to="/feed"  
					className={`${styles.btn} p-5`}
					activeClassName={styles.active}>
						<ListIcon type={ pathname === "/feed" ? "primary" : "secondary" } />
						<span className='pl-2'>Лента заказов</span>
				</NavLink>
				<NavLink 
					to="/"
					className={`${styles.logo}`}>
					<Logo />
				</NavLink>
				<NavLink 
					to="/profile"  
					className={`${styles.btn} p-5`}
					activeClassName={styles.active}>
						<ProfileIcon type={ pathname === "/profile" ? "primary" : "secondary" } />
						<span className='pl-2'>Личный кабинет</span> 
				</NavLink>
			</menu>
		</header>
	);
}

export default AppHeader;
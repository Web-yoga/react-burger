import { 
	Logo, 
	BurgerIcon, 
	ListIcon, 
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className= { `${styles.header} p-4` } >
		<menu className={ `${styles.menu} conteiner` }>
			<div className={ `${styles.btn} ${styles.active} p-4 mr-2` }>
				<BurgerIcon type="primary" />
				<span className='pl-2'>Конструктор</span>
			</div>
			<div className={ `${styles.btn} p-4` }>
				<ListIcon type="secondary" />
				<span className='pl-2'>Лента заказов</span>
			</div>
			<Logo />
			<div className={ `${styles.btn} p-4` }>
				<ProfileIcon type="secondary" />
				<span className='pl-2'>Личный кабинет</span> 
			</div>
		</menu>
    </header>
  );
}

export default AppHeader;
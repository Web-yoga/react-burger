import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

function BurgerConstructor () {
	const [current, setCurrent] = useState('one')
	return (
		<div className={ `${styles.conteiner} mr-10` }>
			<h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
			<div className={styles.tabs}>
    		  <Tab value="one" active={current === 'one'} onClick={setCurrent}>
    		    Булки
    		  </Tab>
    		  <Tab value="two" active={current === 'two'} onClick={setCurrent}>
    		    Соусы
    		  </Tab>
    		  <Tab value="three" active={current === 'three'} onClick={setCurrent}>
    		    Начинки
    		  </Tab>
    		</div>
		</div>
	);
}
  
export default BurgerConstructor;
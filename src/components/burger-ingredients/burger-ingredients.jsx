import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({data}) {
	return (
		<div className={ `${styles.conteiner}` }>
			<div className={ `${styles.list} mt-25` }>
    		  <ConstructorElement
    		    type="top"
    		    isLocked={true}
    		    text="Краторная булка N-200i (верх)"
    		    price={200}
    		    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
    		  />
    		  <ConstructorElement
    		    text="Краторная булка N-200i (верх)"
    		    price={50}
    		    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
    		  />
    		  <ConstructorElement
    		    type="bottom"
    		    isLocked={true}
    		    text="Краторная булка N-200i (низ)"
    		    price={200}
    		    thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
    		  />
    		</div>
		</div>
	);
}
  
export default BurgerIngredients;
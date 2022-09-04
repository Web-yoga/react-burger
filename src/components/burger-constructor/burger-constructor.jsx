import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './burger-constructor.module.css';

function BurgerConstructor ({ingredients}) {
	return (
		<div className={ `${styles.container}` }>
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

BurgerConstructor.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
		proteins: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		calories: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string,
		image_mobile: PropTypes.string,
		image_large: PropTypes.string,
		__v: PropTypes.number.isRequired,
	})).isRequired,
 }
  
export default BurgerConstructor;
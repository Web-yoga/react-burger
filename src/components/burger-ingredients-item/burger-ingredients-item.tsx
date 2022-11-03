import { FC } from 'react';
import { useDrag } from "react-dnd";
import { useHistory, useLocation } from 'react-router';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { DND_TYPES } from '../../constants';
import { TUniqueIngredient } from '../../types/ingredients';

import styles from './burger-ingredients-item.module.css';

type TBurgerIngredientsItemProps = {
	ingredient: TUniqueIngredient;
	count: number;
}

const BurgerIngredientsItem: FC<TBurgerIngredientsItemProps> = ({ ingredient, count }) => {

	const [ { opacity }, dragRef] = useDrag({
		type: DND_TYPES.INGREDIENT,
		item: ingredient,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	})

	const history = useHistory();
	const location = useLocation();

	const handleModalOpen = () =>{
		history.push(`ingredients/${ingredient._id}`, {background: location});
	}

	return(
		<li 
			ref={dragRef}
			style={{opacity}}
			className={styles.container} 
			onClick={handleModalOpen}>
				<div draggable={false} className={styles.counter}>
					{
						count > 0 &&
						<Counter count={count} size="default" />
					}
				</div>
				<img src={ingredient.image} alt={ingredient.name} className="ml-4 mr-4 mb-1"/>
				<p className={styles.price}>
					<span className="text text_type_digits-default"> {ingredient.price} </span>
					<CurrencyIcon type="primary" />
				</p>
				<p className="text text_type_main-small">
					{ingredient.name}
				</p>
		</li>
	);
}

export default BurgerIngredientsItem;
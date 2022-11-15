import { useRef, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier } from 'dnd-core';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_INGREDIENT, COUNT_TOTAL_PRICE } from "../../services/actions/constructor-ingredients";
import { DND_TYPES } from '../../constants';
import { TUniqueIngredient } from '../../types/ingredients';

import styles from './burger-constructor-item.module.css';

type TBurgerConstructorItem = {
	ingredient:  TUniqueIngredient;
	type: "top"| "bottom" | undefined; 
	isLocked: boolean; 
	draggable: boolean; 
	handleSortIngredient?: (dragIndex: number, hoverIndex: number) => void;
};

interface DragItem {
	index: number
	id: string
	type: string
  }

const BurgerConstructorItem: FC<TBurgerConstructorItem> = ({ ingredient, type, isLocked, draggable, handleSortIngredient }) => {
	const ref = useRef<HTMLLIElement>(null);
	const ingredients: Array<TUniqueIngredient> = useSelector(
		state => 
		// @ts-ignore 
		state.constructorIngredients.ingredients);
	const index = ingredients.findIndex(item => item.unique_key_id === ingredient.unique_key_id);

	const dispatch = useDispatch();

	const [{ handlerId }, drop] = useDrop< DragItem, void, { handlerId: Identifier | null } >({
		accept: DND_TYPES.SORT_INGREDIENT,
		collect(monitor) {
		  return {
			handlerId: monitor.getHandlerId(),
		  }
		},
		hover(item: DragItem, monitor) {
			if (!ref.current) {
			  return
			}
			const dragIndex = item.index
			const hoverIndex = index

			if (dragIndex === hoverIndex) {
			  return
			}
			const hoverBoundingRect = ref.current.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const clientOffsetY = clientOffset && clientOffset.y ? clientOffset.y : 0
			const hoverClientY = clientOffsetY - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			  return
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			  return
			}
			if(handleSortIngredient){
				handleSortIngredient(dragIndex, hoverIndex);
			}
			item.index = hoverIndex
		  },
		});

		const [{ isDragging }, drag] = useDrag({
			type: DND_TYPES.SORT_INGREDIENT,
			item: () => {
			  return { ingredient, index }
			},
			collect: (monitor) => ({
			  isDragging: monitor.isDragging(),
			}),
		  })
		  const opacity = isDragging ? 0 : 1
		  drag(drop(ref))

	const handleClose = () => {
		dispatch({
			type: REMOVE_INGREDIENT,
			payload: ingredient.unique_key_id
		});
		dispatch({
			type: COUNT_TOTAL_PRICE
		})
	}

	let name = ingredient.name;
	if(type === 'top')  name += ' (верх)';
	if(type === 'bottom')  name += ' (низ)';

	return(
		<li 
			ref={ draggable ? ref : null}
			style={{opacity}}
			data-handler-id={handlerId} 
			className={`${styles.container} ${draggable ? 'draggable' : ''}`}
		>
			{ 
			draggable &&
			<span  className={styles.drag}><DragIcon type="primary" /></span>
			}

			<ConstructorElement
				type={type}
				isLocked={isLocked}
				text={name}
				thumbnail={ingredient.image}
				price={ingredient.price}
				handleClose={handleClose}
			/>
		</li>
	);
}

export default BurgerConstructorItem;
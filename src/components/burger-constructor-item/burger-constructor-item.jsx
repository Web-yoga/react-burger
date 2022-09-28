import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_INGEDIENT } from "../../services/actions/constructor-ingredients";

import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/prop-types';

import styles from './burger-constructor-item.module.css';

const BurgerConstructorItem = ({ ingredient, type, isLocked, draggable, handleSortIngredient }) => {
	const ref = useRef(null);
	const ingredients = useSelector(state => state.constructorIngredients.ingredients);
	const index = ingredients.findIndex(item => item.unique_key_id === ingredient.unique_key_id);

	const dispatch = useDispatch();

	const [{ handlerId }, drop] = useDrop({
		accept: 'sortIngredient',
		collect(monitor) {
		  return {
			handlerId: monitor.getHandlerId(),
		  }
		},
		hover(item, monitor) {
			if (!ref.current) {
			  return
			}
			const dragIndex = item.index
			const hoverIndex = index

			if (dragIndex === hoverIndex) {
			  return
			}
			const hoverBoundingRect = ref.current.getBoundingClientRect()
			const hoverMiddleY =
			  (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const hoverClientY = clientOffset.y - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			  return
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			  return
			}
			handleSortIngredient(dragIndex, hoverIndex)
			item.index = hoverIndex
		  },
		});

		const [{ isDragging }, drag] = useDrag({
			type: 'sortIngredient',
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
			type: REMOVE_INGEDIENT,
			payload: ingredient.unique_key_id
		});
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

BurgerConstructorItem.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
	type: PropTypes.string, 
	isLocked: PropTypes.bool.isRequired, 
	draggable: PropTypes.bool.isRequired,
}

export default BurgerConstructorItem;
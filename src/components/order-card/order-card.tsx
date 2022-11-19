import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-card.module.css';

import { TIngredient } from '../../types/ingredients';
import { TWSOrder } from '../../types/websocket';

import { useSelector } from '../../services/hooks';
import { formatDate } from "../../utils/format-date";

type TOrderCardProps = {
	order: TWSOrder;
};

const OrderCard: FC<TOrderCardProps> = ({ order }) => {

const location = useLocation();
const maxIngredients = 6;

const ingredients = useSelector((state) => state.ingredients.ingredients );

const orderInfo = useMemo(() => {
	if (!ingredients.length) return null;

	const ingredientsInfo = order.ingredients.reduce(
		(acc: TIngredient[], orderItemID: string) => {
			const ingredient = ingredients.find((ing) => ing._id === orderItemID);
			if (ingredient){
				return [...acc, ingredient];
			} else {
				return acc;
			}
		}, []
	);

	if(!ingredientsInfo)  return null;
	const total = ingredientsInfo.reduce((acc: number, item: TIngredient) => {
		return acc + item.price;
	}, 0);
	const ingredientsVisible = ingredientsInfo.slice(0, maxIngredients);

	const rest = ingredientsInfo.length > maxIngredients ? ingredientsInfo.length - maxIngredients : 0;

	const date = formatDate(order.createdAt);
	return {
		...order,
		ingredientsInfo,
		ingredientsVisible,
		rest,
		total,
		date
	};

}, [order, ingredients]);

if (!orderInfo) return null;

	return(
	
		<Link to={{
			pathname: `${location.pathname}/${orderInfo.number}`,
			state: { background: location },
		}}
		className={`mb-4 mr-2 p-6 ${styles.card}`}
		>
		
		<div className={styles.order_info}>
			<span className={`text text_type_digits-default ${styles.number}`}>
				#{orderInfo.number}
			</span>
			<span className="text text_type_main-default text_color_inactive">
				{orderInfo.date}
			</span>
		</div>
		<h4 className="pt-6 text text_type_main-medium"> {orderInfo.name} </h4>
		{location.pathname === "/profile/orders" && (
			<p>{orderInfo.status}</p>
		)}
	
			<div className={`pt-6 ${styles.ingredientsContent}`}>
				<ul className={styles.ingredients}>
					{orderInfo.ingredientsVisible.map((ingredient: any, index: number) => {
						let zIndex = maxIngredients - index;
						let right = 20 * index;

						return (
							<li	className={styles.img_wrap}
								style={{ zIndex: zIndex, right: right }}
								key={index}
							>
								<img style={{
										opacity: orderInfo.rest && maxIngredients === index + 1 ? "0.5" : "1",
									}}
									className={styles.img}
									src={ingredient.image_mobile}
									alt={ingredient.name}
								/>
								{ maxIngredients === index + 1 ? (
									<span className={`text text_type_main-small ${styles.rest}`}>
										{orderInfo.rest > 0 ? `+${orderInfo.rest}` : null}
									</span>
								) : null}
							</li>
						);
					})}

				</ul>
				<div className={styles.price}>
					<span className="text text_type_digits-default pr-3">{orderInfo.total}</span>
					<CurrencyIcon type="primary" />
				</div>

			</div>
		</Link>
	)
}

export default OrderCard;
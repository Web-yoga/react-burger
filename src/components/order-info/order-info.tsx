import { useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "../../services/hooks";
import { formatDate } from "../../utils/format-date";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from "../../types/ingredients";

import styles from "./order-info.module.css";

type TOrderIngredient = {
	id: string;
	count: number;
	data?: TIngredient;
};

export default function OrderInfo(){
	const { orders, error } = useSelector(state => state.orderList);
	const { ingredients } = useSelector(state => state.ingredients);

	const params: {id: string} = useParams();
	const status = {
		created: "Создан",
		pending: "В работе",
		done: "Выполнен",
	};

	const orderInfo = useMemo(() => {

		if(!orders || orders.length === 0) return null;
		const order = orders.find(item => String(item.number) === params.id);

		if(!order) return null;
		const count: Record<string, number> = {};
		order.ingredients.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
		let ingredientsInOrder: Array<TOrderIngredient> = [];
		for(let id in count){
			ingredientsInOrder.push({id: id, count: count[id]})
		}
		const orderIngredients: Array<TOrderIngredient> = ingredientsInOrder.map(ingr => {
			const data = ingredients.find(item => item._id === ingr.id);
			if(data) return {...ingr, data };
			return ingr;
		});

		const total: number = orderIngredients.reduce((acc: number, item: TOrderIngredient) => {
			if(!item.data) return acc;
			const itemsPrice = item.count * item.data.price;
			return acc + itemsPrice;
		}, 0);

		const date = formatDate(order.createdAt);

		return {
			...order,
			ingredients: orderIngredients,
			total,
			date
		}

	}, [params.id, orders, ingredients]);

	return(
		<section className={styles.content}>
			{ error && <p className="text text_type_main-medium mt-20">Произошла ошибка!</p> }
			{ orderInfo 
			? (
				<>
				<span className="pt-5 text text_type_digits-default">#{orderInfo.number}</span>
				<span className="pt-10 pb-3 text text_type_main-medium">{orderInfo.name}</span>
				<span className={`pb-15 text text_type_main-small ${styles.status}`}>
					{status[orderInfo.status]}
				</span>
				<span className="pb-6 text text_type_main-medium">Состав:</span>
				<ul className={`pb-10 ${styles.ingredients}`}>
					{
						orderInfo.ingredients.map((ingredient, i) => { 
							if(!ingredient || !ingredient.data) return null;
							return (
								<li 
									key={i}
									className={styles.ingredient}
								>
									<div className={`mr-4 ${styles.img_wrap}`}>
										<img className={styles.img}
											src={ingredient.data.image_mobile}
											alt={ingredient.data.name}
										/>
									</div>
									<span className={`mr-4 text text_type_main-small ${styles.name}`}>{ingredient.data.name}</span>
									<div className={styles.price}>
										<span className="pr-2 text text_type_digits-default">
											{ingredient.count} x {ingredient.data.price}
										</span>
										<CurrencyIcon type="primary"/>
									</div>
	
								</li>
							)
						}
						)
					}
				</ul>
				<div className={`pt-10 ${styles.footer}`}>
					<span className="text text_type_main-default text_color_inactive">{orderInfo.date}</span>
					<div className={styles.totalPrice}>
						<span className="pr-2 text text_type_digits-default">{orderInfo.total}</span> 
						<CurrencyIcon type="primary"/>
					</div>
				</div>
				</>
			)
			: (<p className="text text_type_main-medium mt-20">Данные о заказе отсутствуют!</p>)
			}
		</section>
	);
}
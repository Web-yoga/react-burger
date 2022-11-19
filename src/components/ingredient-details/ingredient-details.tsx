import { useSelector } from '../../services/hooks';
import { useParams } from 'react-router';

import styles from './ingredient-details.module.css';

type TIngredientId = {id: string};

function IngredientDetails(){
	const { id }: TIngredientId = useParams();
	const { loading, error, ingredients } = useSelector(
		state => state.ingredients);
	const ingredient = ingredients.find(item => item._id === id);

	return(
		<section className={styles.container}>
			{ loading && <p className="text text_type_main-medium mt-20">Загрузка...</p> }
			{ error && <p className="text text_type_main-medium mt-20">Произошла ошибка!</p> }
			{ 
			ingredient
			? ( 
			<>
				<span className="text text_type_main-large">Детали ингредиента</span>
				<img src={ingredient.image_large} alt={ingredient.name} className="mb-4"/>
				<p className="text text_type_main-medium mb-8">{ingredient.name}</p>
				<section className={styles.composition}>
					<div className={styles.compositionItem}>
						<p className="text text_type_main-small">Калории, ккал</p>
						<p className="text text_type_digits-default">{ingredient.calories}</p>
					</div>
					<div className={styles.compositionItem}>
						<p className="text text_type_main-small">Белки, г</p>
						<p className="text text_type_digits-default">{ingredient.proteins}</p>
					</div>
					<div className={styles.compositionItem}>
						<p className="text text_type_main-small">Жиры, г</p>
						<p className="text text_type_digits-default">{ingredient.fat}</p>
					</div>
					<div className={styles.compositionItem}>
						<p className="text text_type_main-small">Углеводы, г</p>
						<p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
					</div>
				</section>
			</>	)
			: ( <p className="text text_type_main-medium mt-20">Ингредиент не найден!</p> )
			}
		</section>
	)
}

export default IngredientDetails
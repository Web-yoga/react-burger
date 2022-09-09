import styles from './ingredient-details.module.css';

function IngredientDetails({ ingredient }){
console.log(ingredient)
	return(
		<section className={styles.container}>
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

		</section>
	)
}

export default IngredientDetails
import addUniqueKeyIds from '../../utils/unique-key-generator';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_BUN = 'ADD_BUN';
export const COUNT_TOTAL_PRICE = 'COUNT_TOTAL_PRICE';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SORT_INGREDIENT = 'SORT_INGREDIENT';

export const addConstructorIngredient = (ingredient) => {

	if(ingredient.type === 'bun'){
		return {
			type: ADD_BUN,
			payload: addUniqueKeyIds(ingredient)
		}
	}else{
		return {
			type: ADD_INGREDIENT,
			payload: addUniqueKeyIds(ingredient)
		}
	}


}
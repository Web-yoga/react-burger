import addUniqueKeyIds from '../../utils/unique-key-generator';
import { 
	ADD_INGEDIENT,
	REMOVE_INGEDIENT
} from './../actions/constructor-ingredients';

const initialState = { 
	ingredients: [], 
	totalPrice: 0 
}

export const constructorIngredientsReducer = (state = initialState, action) =>{

	let newIngredients = state.ingredients;

	const countTotalPrice = (ingredients) => {
		return ingredients.reduce((totalPrice, currItem) => {
			if(currItem.type === 'bun'){
				return totalPrice + 2*currItem.price
			}
			return totalPrice + currItem.price
		}, 0);
	
	}

	switch( action.type ){

		case ADD_INGEDIENT: {
			if(action.payload.type === 'bun'){
				const newIngredientsNoBun = newIngredients.filter(item => item.type !== 'bun');
				const newBun = addUniqueKeyIds(action.payload);
				newIngredients = [ ...newIngredientsNoBun, newBun ];
			}else{
				let newItem = addUniqueKeyIds(action.payload);
				newIngredients = [ ...newIngredients, newItem ];
			}
			return {
				...state,
				ingredients: newIngredients,
				totalPrice: countTotalPrice(newIngredients)
			}
		}

		case REMOVE_INGEDIENT: {
			newIngredients = state.ingredients.filter((item) => item.unique_key_id !== action.payload)
			return {
				...state,
				ingredients: newIngredients,
				totalPrice: countTotalPrice(newIngredients)
			}
		}
		
		default: { 
			return state
		}
	}
}
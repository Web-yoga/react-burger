import { TUniqueIngredient } from '../../types/ingredients';
import { TConstructorActions } from '../actions/constructor-ingredients';
import{
	CONSTRUCTOR_ADD_INGREDIENT,
	CONSTRUCTOR_ADD_BUN,
	CONSTRUCTOR_COUNT_TOTAL_PRICE,
	CONSTRUCTOR_REMOVE_INGREDIENT,
	CONSTRUCTOR_SORT_INGREDIENT
} from '../constants';

type TConstructorState = {
	ingredients: TUniqueIngredient[];
	bun: null | TUniqueIngredient; 
	totalPrice: number;
}

const initialState: TConstructorState = { 
	ingredients: [],
	bun: null, 
	totalPrice: 0 
}

export const constructorIngredientsReducer = (state = initialState, action: TConstructorActions): TConstructorState => {

	let newIngredients = state.ingredients;

	switch( action.type ){
		
		case CONSTRUCTOR_ADD_INGREDIENT: {
			return {
				...state,
				ingredients: [ ...newIngredients, action.payload ]
			}
		}

		case CONSTRUCTOR_ADD_BUN: {
			return {
				...state,
				bun: action.payload
			}
		}

		case CONSTRUCTOR_COUNT_TOTAL_PRICE: {
			let newTotalPrice = state.ingredients.reduce((price, currItem) => {
				return price + currItem.price
			}, 0);
			if(state.bun){
				newTotalPrice = newTotalPrice + 2*state.bun.price;
			}
			return {
				...state,
				totalPrice: newTotalPrice
			}
		}

		case CONSTRUCTOR_REMOVE_INGREDIENT: {
			newIngredients = state.ingredients.filter((item) => item.unique_key_id !== action.payload)
			return {
				...state,
				ingredients: newIngredients
			}
		}

		case CONSTRUCTOR_SORT_INGREDIENT: {

			let temp = newIngredients[action.payload.hoverIndex];
			newIngredients[action.payload.hoverIndex] = newIngredients[action.payload.dragIndex];
			newIngredients[action.payload.dragIndex] = temp;

			return {
				...state,
				ingredients: newIngredients
			}
		}
		
		default: { 
			return state
		}
	}
}
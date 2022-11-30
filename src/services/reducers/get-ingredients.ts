import { TIngredient} from '../../types/ingredients';
import { TGetIngredientsActions } from "../actions/get-ingredients";
import{
	GET_INGREDIENTS,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED
} from '../constants';

type TGetIngredientsState = {
	loading: boolean;
	error: boolean;
	ingredients: ReadonlyArray<TIngredient>;
}

const initialState: TGetIngredientsState = {
	loading: false,
	error: false,
	ingredients: []
}

export const getIngredientsReducer = (state = initialState, action: TGetIngredientsActions): TGetIngredientsState => {

	switch( action.type ){
		case GET_INGREDIENTS: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case GET_INGREDIENTS_SUCCESS: {
			return{
				...state,
				ingredients: action.data,
				loading: false
			}
		}
		case GET_INGREDIENTS_FAILED: {
			return{
				...state,
				loading: false,
				error: true
			}
		}
		default: { 
			return state
		}
	}

}
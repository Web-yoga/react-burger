import { 
	SET_CURRENT_INGREDIENT,
	UNSET_CURRENT_INGREDIENT 
} from "../actions/current-ingredient";

const initialState = {};

export const currentIngredientReducer = (state = initialState, action) =>{
	switch( action.type ){
		case SET_CURRENT_INGREDIENT: {
			return action.payload;
		}
		case UNSET_CURRENT_INGREDIENT: {
			return initialState;
		}
		default: { 
			return state;
		}
	}
}
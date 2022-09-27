import { 
	SET_CURRENT_INGEDIENT,
	UNSET_CURRENT_INGEDIENT 
} from "../actions/current-ingredient";

const initialState = {};

export const currentIngredientReducer = (state = initialState, action) =>{
	switch( action.type ){
		case SET_CURRENT_INGEDIENT: {
			if(action.payload){
				return action.payload;
			}
			return initialState;
		}
		case UNSET_CURRENT_INGEDIENT: {
			return initialState;
		}
		default: { 
			return state;
		}
	}
}
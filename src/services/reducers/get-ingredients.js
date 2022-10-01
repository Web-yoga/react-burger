import { 
	GET_INGREDIENTS,
	GET_INGREDIENTS_FAILED,
	GET_INGREDIENTS_SUCCESS
} from "../actions/get-ingredients"

const initialState = {
	loading: false,
	error: false,
	ingredients: []
}

export const getIngredientsReducer = (state = initialState, action) => {

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
				ingredients: action.ingredients,
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
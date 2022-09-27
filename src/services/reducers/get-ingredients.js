import { 
	GET_INGEDIENTS,
	GET_INGEDIENTS_FAILED,
	GET_INGEDIENTS_SUCCESS
} from "../actions/get-ingredients"

const initialState = {
	loading: false,
	error: false,
	ingredients: []
}

export const getIngredientsReducer = (state = initialState, action) => {

	switch( action.type ){
		case GET_INGEDIENTS: {
			return{
				...state,
				loading: true,
				error: false
			}
		}
		case GET_INGEDIENTS_SUCCESS: {
			return{
				...state,
				ingredients: action.ingredients,
				loading: false
			}
		}
		case GET_INGEDIENTS_FAILED: {
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
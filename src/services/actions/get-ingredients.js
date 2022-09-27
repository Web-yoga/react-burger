import { fetchIngredients } from '../../utils/burger-api';

export const GET_INGEDIENTS = 'GET_INGEDIENTS';
export const GET_INGEDIENTS_FAILED = 'GET_INGEDIENTS_FAILED';
export const GET_INGEDIENTS_SUCCESS = 'GET_INGEDIENTS_SUCCESS';

export function getIngredients(){

	return function (dispatch){

		dispatch({
			type: GET_INGEDIENTS
		})

		fetchIngredients()
		.then(res => {
			if(res && res.success){
				dispatch({
					type: GET_INGEDIENTS_SUCCESS,
					ingredients: res.data
				})
			}else{
				dispatch({
					type: GET_INGEDIENTS_FAILED
				})
			}
		}).catch( err =>{
			dispatch({
				type: GET_INGEDIENTS_FAILED
			})
		})


	}
}
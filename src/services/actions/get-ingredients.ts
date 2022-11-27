import { fetchIngredients } from '../../utils/burger-api';
import { TIngredient} from '../../types/ingredients';
import { AppDispatch, AppThunk } from '../../types';

import{
	GET_INGREDIENTS,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED
} from '../constants';

export interface IGetIngredientsAction {
	readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsSuccessAction {
	readonly type: typeof GET_INGREDIENTS_SUCCESS;
	readonly data: ReadonlyArray<TIngredient>;
}

export interface IGetIngredientsFailedAction {
	readonly type: typeof GET_INGREDIENTS_FAILED;
}

export type TGetIngredientsActions = IGetIngredientsAction
	| IGetIngredientsSuccessAction
	| IGetIngredientsFailedAction;

export const getIngredientsAction = (): IGetIngredientsAction => ({
	type: GET_INGREDIENTS
});

export const getIngredientsSuccessAction = (
	data: ReadonlyArray<TIngredient>
): IGetIngredientsSuccessAction => ({
	type: GET_INGREDIENTS_SUCCESS,
	data
});

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
	type: GET_INGREDIENTS_FAILED
});

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {

		dispatch(getIngredientsAction());

		fetchIngredients()
		.then(res => {
			if(res && res.success){
				dispatch(getIngredientsSuccessAction(res.data));
			}else{
				dispatch(getIngredientsFailedAction())
			}
		}).catch( err =>{
			dispatch(getIngredientsFailedAction())
		})
};
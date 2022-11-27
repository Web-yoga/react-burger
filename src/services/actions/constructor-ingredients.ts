import addUniqueKeyIds from '../../utils/unique-key-generator';
import { TUniqueIngredient } from '../../types/ingredients';

import{
	CONSTRUCTOR_ADD_INGREDIENT,
	CONSTRUCTOR_ADD_BUN,
	CONSTRUCTOR_COUNT_TOTAL_PRICE,
	CONSTRUCTOR_REMOVE_INGREDIENT,
	CONSTRUCTOR_SORT_INGREDIENT,
	CONSTRUCTOR_RESET
} from '../constants';

export interface IConstructorAddIngredientAction {
	readonly type: typeof CONSTRUCTOR_ADD_INGREDIENT;
	readonly payload: TUniqueIngredient;
}

export interface IConstructorAddBunAction {
	readonly type: typeof CONSTRUCTOR_ADD_BUN;
	readonly payload: TUniqueIngredient;
}

export interface IConstructorCountTotalPriceAction {
	readonly type: typeof CONSTRUCTOR_COUNT_TOTAL_PRICE;
}

export interface IConstructorRemoveIngredientAction {
	readonly type: typeof CONSTRUCTOR_REMOVE_INGREDIENT;
	readonly payload: string;
}

export interface IConstructorSortIngredientAction {
	readonly type: typeof CONSTRUCTOR_SORT_INGREDIENT;
	payload: {dragIndex: number, hoverIndex: number};
}

export interface IConstructorResetAction {
	readonly type: typeof CONSTRUCTOR_RESET;
}

export type TConstructorActions = IConstructorAddIngredientAction
	| IConstructorAddBunAction
	| IConstructorCountTotalPriceAction
	| IConstructorRemoveIngredientAction
	| IConstructorSortIngredientAction
	| IConstructorResetAction;

export const constructorAddIngredientAction = (payload: TUniqueIngredient): IConstructorAddIngredientAction => ({
	type: CONSTRUCTOR_ADD_INGREDIENT,
	payload
});

export const constructorAddBunAction = (payload: TUniqueIngredient): IConstructorAddBunAction => ({
	type: CONSTRUCTOR_ADD_BUN,
	payload
});

export const constructorCountTotalPriceAction = (): IConstructorCountTotalPriceAction => ({
	type: CONSTRUCTOR_COUNT_TOTAL_PRICE
});

export const constructorRemoveIngredientAction = (payload: string): IConstructorRemoveIngredientAction => ({
	type: CONSTRUCTOR_REMOVE_INGREDIENT,
	payload
});

export const constructorSortIngredientAction = (payload: {dragIndex: number, hoverIndex: number}): IConstructorSortIngredientAction => ({
	type: CONSTRUCTOR_SORT_INGREDIENT,
	payload
});

export const constructorResetAction = (): IConstructorResetAction => ({
	type: CONSTRUCTOR_RESET
});

export const addConstructorIngredient = (ingredient: TUniqueIngredient) => {

	if(ingredient.type === 'bun'){
		return {
			type: CONSTRUCTOR_ADD_BUN,
			payload: addUniqueKeyIds(ingredient)
		}
	}else{
		return {
			type: CONSTRUCTOR_ADD_INGREDIENT,
			payload: addUniqueKeyIds(ingredient)
		}
	}
};
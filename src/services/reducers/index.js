import { combineReducers } from "redux";
import { getIngredientsReducer } from "./get-ingredients"; 
import { constructorIngredientsReducer } from "./constructor-ingredients"; 
import { currentIngredientReducer } from "./current-ingredient"; 
import { orderReducer } from "./order"; 

export const rootReducer = combineReducers({
	ingredients: getIngredientsReducer,
	constructorIngredients: constructorIngredientsReducer,
	currentIngredient: currentIngredientReducer,
	order: orderReducer
});
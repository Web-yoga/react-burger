import { combineReducers } from "redux";
import { authReducer } from "./auth"; 
import { getIngredientsReducer } from "./get-ingredients"; 
import { constructorIngredientsReducer } from "./constructor-ingredients"; 
import { orderReducer } from "./order"; 

export const rootReducer = combineReducers({
	auth: authReducer,
	ingredients: getIngredientsReducer,
	constructorIngredients: constructorIngredientsReducer,
	order: orderReducer
});
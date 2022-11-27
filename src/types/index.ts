import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import store from './../services/store';
import { rootReducer } from "../services/reducers";

import { TGetIngredientsActions } from "../services/actions/get-ingredients";

type TApplicationActions = TGetIngredientsActions;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
	ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

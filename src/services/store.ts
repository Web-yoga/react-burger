import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers";
import { socketMiddleware } from './middleware/socket-middleware';

import{
	ORDER_LIST_CONNECT,
	ORDER_LIST_DISCONNECT,
	ORDER_LIST_WS_SUCCESS,
	ORDER_LIST_WS_CLOSE,
	ORDER_LIST_WS_MESSAGE,
	ORDER_LIST_WS_ERROR
} from './constants';

const orderListWsActions =  {
	wsConnect: ORDER_LIST_CONNECT,
	wsDisconnect: ORDER_LIST_DISCONNECT,
	onOpen: ORDER_LIST_WS_SUCCESS,
	onClose: ORDER_LIST_WS_CLOSE,
	onError: ORDER_LIST_WS_ERROR,
	onMessage: ORDER_LIST_WS_MESSAGE
};

const orderWsMiddleware = socketMiddleware(orderListWsActions);

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const enhancer = composeEnhancers(applyMiddleware(thunk, orderWsMiddleware));
const store = createStore(rootReducer, enhancer);

export default store;
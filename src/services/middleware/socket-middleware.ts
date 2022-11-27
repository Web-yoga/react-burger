import { Middleware } from "redux";
import { RootState } from "../../types";

export type TWsActions = {
	wsConnect: string;
	wsDisconnect: string;
	wsSendMessage?: string;
	wsConnecting?: string;
	onOpen: string;
	onClose: string;
	onError: string;
	onMessage: string;
}

export const socketMiddleware = (wsActions: TWsActions): Middleware<{}, RootState> => {
	return (store) => {

		let socket: WebSocket | null = null;
		let url = '';

		return (next) => (action) => {
			const {type, payload} = action;
			const {dispatch} = store;
			const{
				wsConnect,
				wsDisconnect,
				onOpen,
				onClose,
				onError,
				onMessage
			} = wsActions;

			if(type === wsConnect) {
				url = payload;
				socket = new WebSocket(url);
			}

			if(socket){
				if(type === wsDisconnect){
					socket.close(1000);
					dispatch({type: onClose});
				}

				socket.onopen = () =>{
					dispatch({type: onOpen});
				}

				socket.onmessage = (event) => {
					const {data} = event;
					const persedData = JSON.parse(data);
					dispatch({type: onMessage, payload: persedData});
				}

				socket.onerror = (error) => {
					dispatch({type: onError, error: JSON.stringify(error)});
				}

				socket.onclose = (event) => {
					if(event.code === 1000){
						dispatch({type: onClose});
					}
					dispatch({type: onError, error: event.code.toString()});

				}
			}

			next(action);
		}
	}
}
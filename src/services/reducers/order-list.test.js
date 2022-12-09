import { orderListReducer } from "./order-list";
import{
	ORDER_LIST_CONNECT,
	ORDER_LIST_DISCONNECT,
	ORDER_LIST_WS_SUCCESS,
	ORDER_LIST_WS_CLOSE,
	ORDER_LIST_WS_MESSAGE,
	ORDER_LIST_WS_ERROR
} from '../constants';

describe('order list reducer', () => {

	it('should return the initial sate', () => {
		expect(orderListReducer(undefined, {}))
		.toEqual(
			{
				orders: [],
				total: null,
				totalToday: null,
				loading: false,
				error: ''
			}
		)
	});

	it('should handle ORDER_LIST_CONNECT', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_CONNECT
		}))
		.toEqual(
			{
				loading: true,
				error: ''
			}
		)
	});

	it('should handle ORDER_LIST_DISCONNECT', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_DISCONNECT
		}))
		.toEqual(
			{
				loading: false
			}
		)
	});

	it('should handle ORDER_LIST_WS_SUCCESS', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_WS_SUCCESS
		}))
		.toEqual(
			{
				error: ''
			}
		)
	});

	it('should handle ORDER_LIST_WS_CLOSE and  return the initial sate', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_WS_CLOSE
		}))
		.toEqual(
			{
				orders: [],
				total: null,
				totalToday: null,
				loading: false,
				error: ''
			}
		)
	});

	it('should handle ORDER_LIST_WS_MESSAGE', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_WS_MESSAGE,
			payload: {
				orders: [{_id: 'test'}],
				total: 100,
				totalToday: 200
			}
		}))
		.toEqual(
			{
				loading: false,
				orders: [{_id: 'test'}],
				total: 100,
				totalToday: 200
			}
		)
	});

	it('should handle ORDER_LIST_WS_ERROR', () => {
		expect(orderListReducer([], {
			type: ORDER_LIST_WS_ERROR,
			payload: 'test'
		}))
		.toEqual(
			{
				loading: false,
				error: 'test',
			}
		)
	});

});
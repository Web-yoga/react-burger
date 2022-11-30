import { orderReducer } from "./order";
import{
	ORDER_SEND,
	ORDER_SEND_SUCCESS,
	ORDER_SEND_FAILED,
	ORDER_SEND_CLOSE
} from '../constants';

describe('order list reducer', () => {

	it('should return the initial sate', () => {
		expect(orderReducer(undefined, {}))
		.toEqual(
			{
				loading: false,
				error: false,
				order: null
			}
		)
	});

	it('should handle ORDER_SEND', () => {
		expect(orderReducer([], {
			type: ORDER_SEND
		}))
		.toEqual(
			{
				loading: true,
				error: false
			}
		)
	});

	it('should handle ORDER_SEND_SUCCESS', () => {
		expect(orderReducer([], {
			type: ORDER_SEND_SUCCESS,
			payload: { order: {number: 1} }
		}))
		.toEqual(
			{
				order: { order: {number: 1} },
				loading: false
			}
		)
	});

	it('should handle ORDER_SEND_FAILED', () => {
		expect(orderReducer([], {
			type: ORDER_SEND_FAILED
		}))
		.toEqual(
			{
				loading: false,
				error: true
			}
		)
	});

	it('should handle ORDER_SEND_CLOSE and return the initial sate', () => {
		expect(orderReducer([], {
			type: ORDER_SEND_CLOSE
		}))
		.toEqual(
			{
				loading: false,
				error: false,
				order: null
			}
		)
	});
});
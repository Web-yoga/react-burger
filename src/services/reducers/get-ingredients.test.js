import { getIngredientsReducer } from "./get-ingredients";
import{
	GET_INGREDIENTS,
	GET_INGREDIENTS_SUCCESS,
	GET_INGREDIENTS_FAILED
} from '../constants';

describe('get-ingredients reducer', () => {

	it('should return the initial sate', () => {
		expect(getIngredientsReducer(undefined, {}))
		.toEqual(
			{
				loading: false,
				error: false,
				ingredients: []
			}
		)
	});

	it('should handle GET_INGREDIENTS', () => {
		expect(getIngredientsReducer([], {
			type: GET_INGREDIENTS
		}))
		.toEqual(
			{
				loading: true,
				error: false
			}
		)
	});

	it('should handle GET_INGREDIENTS_SUCCESS', () => {
		expect(getIngredientsReducer([], {
			type: GET_INGREDIENTS_SUCCESS,
			data: { _id: 'test' }
		}))
		.toEqual(
			{
				ingredients: { _id: 'test' },
				loading: false
			}
		)
	});

	it('should handle GET_INGREDIENTS_FAILED', () => {
		expect(getIngredientsReducer([], {
			type: GET_INGREDIENTS_FAILED
		}))
		.toEqual(
			{
				loading: false,
				error: true
			}
		)
	});

});

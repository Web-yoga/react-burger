import { constructorIngredientsReducer } from './constructor-ingredients';
import{
	CONSTRUCTOR_ADD_INGREDIENT,
	CONSTRUCTOR_ADD_BUN,
	CONSTRUCTOR_COUNT_TOTAL_PRICE,
	CONSTRUCTOR_REMOVE_INGREDIENT,
	CONSTRUCTOR_SORT_INGREDIENT,
	CONSTRUCTOR_RESET
} from '../constants';

describe('constructor ingredients reducer', () => {

	it('should return the initial sate', () => {
		expect(constructorIngredientsReducer(undefined, {}))
		.toEqual(
			{
				ingredients: [],
				bun: null, 
				totalPrice: 0 
			}
		)
	});

	it('should handle CONSTRUCTOR_ADD_INGREDIENT', () => {
		expect(constructorIngredientsReducer({ ingredients: [] }, {
			type: CONSTRUCTOR_ADD_INGREDIENT,
			payload: { _id: "test",  type: "main"}
		}))
		.toEqual(
			{
				ingredients: [ { _id: "test",  type: "main" } ], 
			}
		)
	});

	it('should handle CONSTRUCTOR_ADD_BUN', () => {
		expect(constructorIngredientsReducer([], {
			type: CONSTRUCTOR_ADD_BUN,
			payload: { _id: "test",  type: "bun"}
		}))
		.toEqual(
			{
				bun: { _id: "test",  type: "bun" }, 
			}
		)
	});

	it('should handle CONSTRUCTOR_COUNT_TOTAL_PRICE', () => {
		expect(constructorIngredientsReducer({
				ingredients: [{ _id: "test",  type: "main", price: 3}],
				bun: { _id: "test",  type: "bun", price: 7},
			}, {
			type: CONSTRUCTOR_COUNT_TOTAL_PRICE
		}))
		.toEqual(
			{
				ingredients: [{ _id: "test",  type: "main", price: 3}],
				bun: { _id: "test",  type: "bun", price: 7},
				totalPrice: 17,
			}
		)
	});

	it('should handle CONSTRUCTOR_REMOVE_INGREDIENT', () => {
		expect(constructorIngredientsReducer({
			ingredients: [
				{ unique_key_id: "test_to_remove" },
				{ unique_key_id: "test_to_stay" }
			]
		}, {
			type: CONSTRUCTOR_REMOVE_INGREDIENT,
			payload: "test_to_remove"
		}))
		.toEqual(
			{
				ingredients: [{ unique_key_id: "test_to_stay" }], 
			}
		)
	});

	it('should handle CONSTRUCTOR_SORT_INGREDIENT', () => {
		expect(constructorIngredientsReducer({
			ingredients: [
				{ unique_key_id: "1" },
				{ unique_key_id: "2" }
			]
		}, {
			type: CONSTRUCTOR_SORT_INGREDIENT,
			payload: {dragIndex: 1, hoverIndex: 0}
		}))
		.toEqual(
			{
				ingredients: [
					{ unique_key_id: "2" },
					{ unique_key_id: "1" }
				], 
			}
		)
	});

	it('should handle CONSTRUCTOR_RESET and return the initial sate', () => {
		expect(constructorIngredientsReducer({}, {
			type: CONSTRUCTOR_RESET
		}))
		.toEqual(
			{
				ingredients: [],
				bun: null, 
				totalPrice: 0 
			}
		)
	});
});
import { v4 as uuidv4 } from 'uuid';
import { TUniqueIngredient } from '../types/ingredients';

export default function addUniqueKeyIds(items: TUniqueIngredient | TUniqueIngredient[]){
	
	if(Array.isArray(items)){
		return items.map(item => ({...item, unique_key_id: uuidv4()}))
	}else if(typeof items === 'object'){
		return {...items, unique_key_id: uuidv4()}
	}
	return items;
}
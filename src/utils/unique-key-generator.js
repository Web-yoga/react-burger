import { v4 as uuidv4 } from 'uuid';

export default function addUniqueKeyIds(items){
	
	if(Array.isArray(items)){
		return items.map(item => ({...item, unique_key_id: uuidv4()}))
	}else if(typeof items === 'object'){
		return {...items, unique_key_id: uuidv4()}
	}
	return items;
}
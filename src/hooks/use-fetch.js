import { useState } from 'react';
import config from '../config/apiConfig';

export function useFetch(requestMethod){
	const [data, setData] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	function execute(){
			setLoading(true);
			setError(false);
			fetch(config.url + requestMethod)
			.then(res => res.json())
			.then(res => {
				setData(res.data);
				setLoading(false);
				setError(false);
			})
			.catch(error => {
				console.log(error);
				setLoading(false);
				setError(true);
			});
	};

	return {
		data,
		loading,
		error,
		execute
	}
}
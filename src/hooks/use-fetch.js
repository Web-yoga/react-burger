import { useState } from 'react';

function useFetch(request){
	const [data, setData] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const checkReponse = (res) => {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	  };

	function execute(){
			setLoading(true);
			setError(false);
			fetch(request.url, request.options)
			.then(checkReponse)
			.then(res => {
				setData(res.data);
				setError(false);
			})
			.catch(error => {
				console.log('Fetch Error:');
				console.log(error);
				setError(true);
			})
			.finally(() => setLoading(false));
	};

	return {
		data,
		loading,
		error,
		execute
	}
}

export { useFetch } 
import { useState } from 'react';

function useFetch(request){
	const [data, setData] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const checkReponse = (res) => {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	  };

	function execute(data){
		let options = {...request.options, body: JSON.stringify(data)}
			setLoading(true);
			setError(false);
			fetch(request.url, options)
			.then(checkReponse)
			.then(res => {
				setData(res);
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
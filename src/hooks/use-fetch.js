import { useState } from 'react';

import PropTypes from 'prop-types';

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

useFetch.propTypes = {
	request: PropTypes.shape({
		url: PropTypes.string.isRequired,
		options: PropTypes.shape({
			method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']),
			headers: PropTypes.oneOf([
				"'Content-Type': 'application/json'", 
				"'Content-Type': 'application/x-www-form-urlencoded'"]),
			body: PropTypes.string
		})
	}).isRequired
}

export { useFetch } 
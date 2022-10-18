export function setCookie(name, value, props){
	props = props || {};
	let expir = props.expires;
	if(typeof expir == 'number' && expir) {
		const date = new Date();
		date.setTime(date.getTime() + expir * 1000);
		expir = props.expires = date;
	}
	if(expir && expir.toUTCString){
		props.expires = expir.toUTCString();
	}
	value = encodeURIComponent(value);
	let updatedCookie = name + '=' + value;
	for(const propName in props){
		updatedCookie += '; ' + propName;
		const prop = props[propName];
		if(prop !== true){
			updatedCookie += '=' + prop;
		}
	}
	document.cookie = updatedCookie;
}

export function getCookie(name){
	const matches = document.cookie.match(
		// eslint-disable-next-line no-useless-escape
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
} 
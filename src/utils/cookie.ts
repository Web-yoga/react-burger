export function setCookie(name: string, value: string | null, props?: Record<string, string | number | boolean>){
	props = props || {};
	let expir = props.expires;
	if(typeof expir == 'number') {
		const date = new Date();
		date.setTime(date.getTime() + expir * 1000);
		const expirDate = date;
		props.expires = expirDate.toUTCString();
	}
	if(value){
		value = encodeURIComponent(value);
	}
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

export function getCookie(name: string){
	const matches = document.cookie.match(
		// eslint-disable-next-line no-useless-escape
		new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
} 
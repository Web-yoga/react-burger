import numeralWord from "./numeral-word";

function padTo2Digits(num: number): string
{
	return String(num).padStart(2, '0');
}

export const formatDate = (pastTimestamp: string): string => {

	let resultDateString = '';

	// Set days difference
	const nowDate = new Date();
	const nowDay = nowDate.setHours(0, 0, 0, 0);
	const pastDate = new Date(pastTimestamp);
	const pastDay = pastDate.setHours(0, 0, 0, 0);
	const daysDifference = Math.ceil(Math.abs(nowDay - pastDay) / (1000 * 60 * 60 * 24));

	if(daysDifference === 0){
		resultDateString = 'Сегодня, ';
	}else if (daysDifference === 1){
		resultDateString = 'Вчера, ';
	}else{
		resultDateString = `${daysDifference} ${numeralWord(daysDifference, ['день', 'дня', 'дней'])} назад, `;
	}
	// Set hours : minutes
	const pastDateTime = new Date(pastTimestamp);
	const pastTime = padTo2Digits(pastDateTime.getHours()) + ':' + padTo2Digits(pastDateTime.getMinutes());

	resultDateString += pastTime;

	return resultDateString;
}
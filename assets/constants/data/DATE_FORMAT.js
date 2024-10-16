import LOCALE from '../locale/EN_DEFAULT.json'

// Use Intl.DateTimeFormat to make LOCALE in loops more efficient
const dateOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric'
}

const DATE_FORMAT = new Intl.DateTimeFormat(LOCALE.LOCALE, dateOptions)

export default DATE_FORMAT
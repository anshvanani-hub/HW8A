import moment from 'moment';

const now = moment();
console.log(`Current date: ${now.format('YYYY-MM-DD')}`);

const reference = moment('1976-11-26', 'YYYY-MM-DD');
const yearsSince = now.diff(reference, 'years');
console.log(`Years since Nov 26, 1976: ${yearsSince}`);



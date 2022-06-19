import moment from 'moment-timezone';

console.log('-----------Local------------');
console.log('Timezone \n', Intl.DateTimeFormat().resolvedOptions().timeZone);
console.log('ISO Date \n', moment().local().toISOString());
const localStart = moment().local().startOf('day').toISOString();
const localEnd = moment().local().endOf('day').toISOString();
console.log('End of day \n', localStart, localEnd);

const date = new Date();
const timezone = 'Asia/Bangkok';
console.log('--------Asia/Bangkok--------');
console.log('ISO Date \n', date.toISOString());
const start = moment.tz(timezone).startOf('day').utc().toISOString();
const end = moment.tz(timezone).endOf('day').utc().toISOString();
console.log('End of day \n', start, end);

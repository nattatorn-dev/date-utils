import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const date = dayjs();
console.log('-------------Local--------------');
console.log('Timezone \n', dayjs.tz.guess());
console.log('ISO Date \n', date.local().format());
const localStart = date.local().startOf('day').format();
const localEnd = date.local().endOf('day').format();
console.log('End of day \n', localStart, localEnd);

const tz = 'Asia/Bangkok';
console.log('--------UTC-Asia/Bangkok--------');
console.log('ISO Date \n', dayjs.tz(date, tz).utc().format());
const start = dayjs.tz(date, tz).startOf('day').utc().format();
const end = dayjs.tz(date, tz).endOf('day').utc().format();
console.log('End of day \n', start, end);

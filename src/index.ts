import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const date = dayjs();
console.log('-----------Local------------');
console.log('Timezone \n', dayjs.tz.guess());
console.log('ISO Date \n', date.local().toISOString());
const localStart = date.local().startOf('day').toISOString();
const localEnd = date.local().endOf('day').toISOString();
console.log('End of day \n', localStart, localEnd);

const tz = 'Asia/Bangkok';
console.log('--------Asia/Bangkok--------');
console.log('ISO Date \n', dayjs.tz(date, tz).utc().toISOString());
const start = dayjs.tz(date, tz).startOf('day').utc().toISOString();
const end = dayjs.tz(date, tz).endOf('day').utc().toISOString();
console.log('End of day \n', start, end);

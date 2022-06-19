#!/usr/bin/env node

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_timezone_1 = __importDefault(require("moment-timezone"));
console.log('-----------Local------------');
console.log('Timezone \n', Intl.DateTimeFormat().resolvedOptions().timeZone);
console.log('ISO Date \n', (0, moment_timezone_1.default)().local().toISOString());
var localStart = (0, moment_timezone_1.default)().local().startOf('day').toISOString();
var localEnd = (0, moment_timezone_1.default)().local().endOf('day').toISOString();
console.log('End of day \n', localStart, localEnd);
var date = new Date();
var timezone = 'Asia/Bangkok';
console.log('--------Asia/Bangkok--------');
console.log('ISO Date \n', date.toISOString());
var start = moment_timezone_1.default.tz(timezone).startOf('day').utc().toISOString();
var end = moment_timezone_1.default.tz(timezone).endOf('day').utc().toISOString();
console.log('End of day \n', start, end);

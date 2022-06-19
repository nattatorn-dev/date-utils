#!/usr/bin/env node

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
var timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
var date = (0, dayjs_1.default)();
console.log('-------------Local--------------');
var tzLocal = dayjs_1.default.tz.guess();
console.log('Timezone \n', dayjs_1.default.tz.guess());
console.log('ISO Date \n', dayjs_1.default.tz(date, tzLocal).format());
var tz = 'Asia/Bangkok';
console.log('--------UTC-Asia/Bangkok--------');
console.log('ISO Date \n', dayjs_1.default.tz(date, tz).utc().format());
var start = dayjs_1.default.tz(date, tz).startOf('day').utc().format();
var end = dayjs_1.default.tz(date, tz).endOf('day').utc().format();
console.log('End of day \n', start, end);

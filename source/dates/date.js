// ! Creating Date object
// * 1. No parameters
new Date(); //* =>                                  Mon Jun 06 2022 22:29:51 GMT-0500 (Central Daylight Time)
// * 2. String parameters
new Date('Mon Jun 06 2022 16:19:45');//* =>         Mon Jun 06 2022 16:19:45 GMT-0500 (Central Daylight Time)
// * 3. new Date(year, month, day, hour, minute, second) = all numbers
// * months are 0-based in JS (0-11)
new Date(2022, 10, 1); //* =>                       Tue Nov 01 2022 00:00:00 GMT-0500 (Central Daylight Time)
// * 4. new Date(miliSecondsSinceUnixTime) 
new Date(0);//* =>                                  Wed Dec 31 1969 18:00:00 GMT-0600 (Central Standard Time)

// ! Date methods
const future = new Date(2039, 10, 30, 23, 0);//* => Tue Nov 15 2039 12:00:00 GMT-0600 (Central Standard Time)
// ! method                             result                      explanation
future.getFullYear(); //*               2039                        get year as number
future.getMonth();//*                   10                          get month (0-11)
future.getDay();//*                     2                           get day in a week (0-6)
future.getDate();//*                    30                          day in a month (1-31)
future.getHours();//*                   23                          get hours (0-23)
future.getMinutes();//*                 0                           get minutes (0-59)
future.getSeconds();//*                 0                           get seconds (0-59)
future.getTime();//*                    2206328400000               get miliseconds since 1970. Jan 1st
future.toISOString();//*                2039-12-01T05:00:00.000Z    Z => UTC time in London
future.toDateString();//*               Wed Nov 30 2039
future.toTimeString();//*               23:00:00 GMT-0600 (Central Standard Time)

// ! Operations with Dates
Number(future); //*                     2206328400000               number representing date in miliseconds 
+future;//*                             2206328400000               number representing date in miliseconds

// * dayse passed between dates
const calcDaysPassed = (date1, date2) => Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;

// ! Internationalizing API 
// * new Intl.<method>().format()
// * list of formats http://www.lingoes.net/en/translator/langcode.htm

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    weekday: 'short'
}
// * values: numeric, long and 2-digit, short,...

const locale = navigator.language;

new Intl.DateTimeFormat('en-US').format(new Date());//*                  6/6/2022
new Intl.DateTimeFormat(locale, options).format(new Date());//*          Mon, June 6, 11:41 PM

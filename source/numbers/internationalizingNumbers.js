// * resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

const num = 388872626.23;
// ! format                                             result
new Intl.NumberFormat('en-US').format(num);//*          388,872,626.23
new Intl.NumberFormat('de-DE').format(num);//*          388.872.626,23

const option = {
    style:'unit',
    unit: 'mile-per-hour'
}

console.log(new Intl.NumberFormat('en-US', option).format(num))



console.log(`Germany: ${new Intl.NumberFormat('de-DE').format(num)}`)
console.log(`USA: ${new Intl.NumberFormat('en-US').format(num)}`)
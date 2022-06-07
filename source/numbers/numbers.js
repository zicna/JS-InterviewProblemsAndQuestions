
// ! method                     result      typeof      explanation
Number("23"); // *              23          number
+"23";//*                       23          number
Number.parseInt("23");//*       23          number
Number.parseInt("2.3rem")//*    2           number
// ! goto for reading values from CSS
Number.parseFloat('2.3rem');//* 2.3         number
// !isNaN() => checking ONLY is something is NaN(value)
Number.isNaN(20); //*           false       boolean     
Number.isNaN('20'); //*         false       boolean     '20' is regular value and it is NOT NaN     
Number.isNaN(23 / 0);//*        false       boolean     Infinity is NOT a NaN
Number.isNaN(+"20px"); //*      true        boolean     +'20px' can NOT be convertet to number => NaN
Number.isNaN(NaN);//*           true        boolean
// ! isFinite() => ultimate Number to check if something is a Number
Number.isFinite(20); //*        true        boolean     true only for numbers
Number.isFinite('20'); //*      false       boolean         
Number.isFinite(23 / 0);//*     false       boolean     Infinity is NOT a Finite        
Number.isFinite(+"20px"); //*   false       boolean     
Number.isFinite(NaN);//*        false       boolean

Number.isInteger(23); //*       true        boolean
Number.isInteger(23.0); //*     true        boolean        
Number.isInteger(23.9); //*     false       boolean       
Number.isInteger('23'); //*     false       boolean       
Number.isInteger(23 / 0); //*   false       boolean 

// ! Math method (all methods will do type coercion)
Math.sqrt(25);//*               5                       same as (25 ** (1 / 2)) cubik root: (8 ** (1 / 3))

Math.max(2,3,4,23);//*          23                      returns max value
Math.max(2,3,4,"23");//*        23                      does type coercion
Math.max(2,3,4,"23px");//*      NaN                     does NOT do parse
// * same is for Math.min()
Math.abs(-12);//*               12                      returns absolute values
Math.random();//*               rand(0-1)

// ! rounding integers
Math.round(2.49); //*           2
Math.round(2.5); //*            3

Math.floor(23.1);//*            23                      round DOWN to neares Integer
Math.floor(-23.1);//*           -24                     round DOWN to neares Integer

Math.trunc(23.1);//*            23                       removes decimal part of number
Math.trunc(-23.1); //*          -23

Math.ceil(23.1);//*             24                      round UP to neares Integer

// ! rounding decimals
2.777777.toFixed(3); //*        '2.778'     string
+(2.77.toFixed(1));//*          2.8         number
Number(2.77.toFixed(1));//*     2.8         number      Number.parseFloat() does the same

// ! Math Constants
Math.PI;//*                     3.141592653589793
// ! Number Constants
Number.MAX_SAFE_INTEGER; //*    9007199254740991            if > loses precision        (2 ** 53 -1)
Number.MAX_VALUE;//*            1.7976931348623157e+308
Number.MIN_SAFE_INTEGER;//*     -9007199254740991           if < loses precision
Number.MIN_VALUE;//*            5e-324
// ! bigint ES 2020
9812919829182918928192891289182989218n;//* bigint

// ! Numeric Sparators for big numbers (_)
const solarSysDiameter = 287_460_000_000;//*        same as 287460000000        
// ! Restrictions: * 1. beginning   2. ending   3. two in a row 4.next to dot

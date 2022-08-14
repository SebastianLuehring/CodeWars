// Miles per gallon to kilometers per liter





// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// Make sure to round off the result to two decimal points.
// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres



// Solution:


function converter (mpg) {
    let liter = (mpg * 4.54609188 )
   let kilo = (mpg * 1.609344 )
   let conversion = (kilo / liter) * mpg
   if(mpg > 0){
     return Number(conversion.toFixed(2))
   }else{
     return 0
   }
 }
 
 
 
 var LITRES_PER_GALLON = 4.54609188;
 var KILOMETERS_PER_MILE = 1.609344;
 function converter (mpg) {
   return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
 }
 
 
 function converter (mpg) {
   return +(mpg * .354006043538).toFixed(2)
 }
 
 
 
 function converter (mpg) {
   return +(mpg*1.609344/4.54609188).toFixed(2)
 }

 

 
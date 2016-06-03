//alert('howdy');
(function(){
  'use strict';
/*
1. Show me how to calculate the average price of all items. Please console.log the average.
The average price is $23.63
I'll accept either $23.63 or $23.62
*/

//console.log(items);

(function(){

var sumPrices = items.reduce(function(previousValue, product){
  //console.log(previousValue);
  //console.log(productPrice.price);
  return previousValue + product.price;
},0);
//console.log(sumPrices);
 var avgPrice  = sumPrices/items.length;
 var avgPriceR = avgPrice.toFixed(2);
 console.log("$ " + avgPriceR);

 }());

// var prices = items.filter(function(product){ //sample code for .filter() reference
//   return product.price > 50;
// });
// console.log(prices);

/*
2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
  "Items that cost between $14.00 USD and $18.00 USD:"
  [
   {
      title: "1970s Coors Banquet Glass Beer Pitcher",
      ...
   },
   {
      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
      ...
   },
   {
      title: "Hand Painted Colorful Feather Glass",
      ...
   }
 ]
 */
(function(){
 var prod1418 = items.filter(function(product){
  return product.price > 14 && product.price < 18;
 });


 console.log(prod1418);
 //console.log(prod1418[0].title);
 //console.log(prod1418[1].title);
 //console.log(prod1418[2].title);

/*
function listBuild(){
 var prodList = "";
 var i;
 for (i = 0; i< prod1418.length; i++){

   prodList += prod1418[i].title + "; ";
 }
 return '"Items that cost between $14.00 USD and $18.00 USD:" ' + prodList;
}
console.log(listBuild());
*/
 }());


/*
3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
*/
(function(){

var productUKSearch = items.filter(function(product){

 var productUK = product.currency_code ==='GBP';

 return productUK;
});
console.log(productUKSearch);
 }());
/*
4. Show me how to find which items are made of wood. Please console.log the ones you find.
  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
*/

(function(){
//need to search the arrays 'materials' inside the product objects inside array 'items'
  var woodProductSearch = items.filter(function(product){
    var woodProducts = (product.materials).indexOf("wood") >= 0;

    return woodProducts;
  }
);

console.log(woodProductSearch);

}());
/*
5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  wall mount bottle opener
  wedding
  man cave
  christmas gift
  guy gift
  fathers day
  home bar
  beer
  bar

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

  glass
  sandblast cabinet
  vinyl
  beer glass
  pint glass
  etched pint glass
  etched glass
  etched beer glass
  16 oz pint
  beer gift
  etched harry potter glass
  the three broomsticks glass
  personalized harry potter glass
*/
(function(){

var highCountMaterials= items.filter(function(product){
 return (product.materials).length > 8;
});

console.log(highCountMaterials);
 }());
/*
6. Show me how to calculate how many items were made by their sellers
18 were made by their sellers
*/

(function(){

var selfMade= items.filter(function(product){
 return product.who_made == "i_did";
});
console.log(selfMade);
var numSelfMade = selfMade.length;
var message = numSelfMade + " were made by their sellers";
console.log(message);

}());













}());

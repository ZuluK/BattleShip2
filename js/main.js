/*How to get strict
with equality

Two values are strictly equal only if they have
the same type and the same value.

*/

"42" == 42 //true
"0" == 0 //true
true == (1 == "1")

"42" === 42//false
"0" === 0 //false
"0" === false //false
"true" === true//false
true === (1 === "1")//false

/* So, what if I try something like “true” == true?

That is comparing a string and a boolean, so according to the rules,
JavaScript will first convert true to 1, and then compare “true” and 1.
It will then try to convert “true” to a number, and fail, so you’ll get false.

*/

"true" == true//false


/* So if I write 99 <= “100” what happens?

Use the rules: “100” is converted to a number, and then compared with 99.
Because 99 is less than or equal to 100 (it’s less than), the result is true.

*/

99 <= "100"//true


/* Another look at concatenation, and addition

You’ve probably figured out that when you use the + operator with numbers you get addition,
and when you use it with strings you get concatenation. But what happens when we mix the types of +’s operands? Let’s find out.
If you try to add a number and a string, JavaScript converts the number to a string and concatenates the two.
Kind of the opposite of what it does with equality:

*/

var 3 + "4"//a string added to a number is concatenation
//the result would be "34" not 7

var plusi = "4" + 3//the same here we get "43"


/* What about the other arithmetic operators?

When it comes the other arithmetic operators—like multiplication,
 division and subtraction—
 JavaScript prefers to treat those as arithmetic operations, not string operations.

*/

var multi = 3 * "4";//Here, JavaScript converts the string “4” to the number 4, and multiplies it by 3, resulting in 12.

var div = 80/"10";//Here the string “10” is converted to the number 10. Then 80 is divided by the number 10, resulting in 8.

var minus = "10" - 5;//With minus, the “10” is converted to the number 10, so we have 10 minus 5, which is 5.


/* How to determine if two objects are equal?

Your first question might be: are we talking about == or ===? Here’s the good news: if you’re comparing two objects, it doesn’t matter!
That is, if both operands are objects, then you can use either == or === because they work in exactly the same way.
Here’s what happens when you test two objects for equality:

When we test equality of two object variables, we compare the references to those objects
Remember, variables hold references to objects, and so whenever we compare two objects, we’re comparing object references.

*/

if (var1 == var2){
  //do something
}

/*Two references are equal only if they reference
the same object

The only way a test for equality between two variables containing object references returns true
is when the two references point to the same object.

*/

if (var1 === var3){
  //wow, these are the same objects
}


/*
Here's a little code that helps find cars in Earl’s Autos parking lot.
Trace through this code and write the values of loc1 through loc4 below.

*/


function findCarInLot(car){//function takes a parameter of car
  for(var i = 0; i < lot.length; i++){//loops through the length of the objet array
    if (car === lot[i]){//if the car inputted is equal to i
      return i;//then return i
    }
  }
  return -1;//not sure what this does
}

var chevy = {
  make: "Chevy",
  model: "Bel Air"
};
var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};
var fiat1 = {
  make: "Fiat",
  model: "500"
};
var fiat2 = {
  make: "Fiat",
  model: "500"
};

var lot = [chevy, taxi,fiat1,fiat2];

var loc1 = findCarInLot(fiat2); //returns the indexed position of parameter in the array; 3
var loc2 = findCarInLot(taxi); //returns 1
var loc3 = findCarInLot(chevy); //returns 0
var loc4 = findCarInLot(fiat1);// returns 2

/*The truthy is out there...

Now here’s the secret to understanding truthy and falsey: concentrate on knowing what is falsey,
 and then everything else you can consider truthy.
 Let’s look at some examples of using these falsey values in a conditional:

 */

 var testThis;
 if (testThis){//variable will be undefined in a conditional test but this is legal Javascript
   //do something
 }

 var element = document.getElementById('elementDoesntexist');
 if (element){//here the value of element will be null
   //do something
 }

 if (0){//We're testing 0
   //do something
 }

 if(""){
   //does code here ever get evaluated?
 }

 if(NaN){
   //Hmm, what's NaN doing in a boolean test
 }


 /* What JavaScript considers falsey

 There are five falsey values in JavaScript:
undefined is falsey.
null is falsey.
0 is falsey.
The empty string is falsey.
NaN is falsey.

To remember which values are truthy and which
are falsey, just memorize
the five falsey values— undefined, null, 0, "” and NaN—and remember that everything else is truthy.

*/


/* every other value is truthy (except for false, of course)? Here are some examples of truthy values:
*/


if ([]){//This is an array, not undefined, null,zero or NaN, so it has to be true.
  //this will happen
}

var element = document.getElementById('elementDoesntexist');//this time we have an actual element objects, so it has to be true.
if(element) {
  //so will this
}

if(1){//Only the number 0 is falsy, all others are truthy
  //gonna happen
}

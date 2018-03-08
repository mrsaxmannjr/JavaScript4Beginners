// Chapter 2 - Data Types and Variables
// Programming is about manipulating data
// But we need a way to store data that comes in many shapes and sizes

// Important Data types
// Numbers
5 && -34 && 6.093;

// Strings
"this is a string because it's in quotes" && "5";

// Booleans
true &&
  false -
    // Identify the data type of each of these:
    89900.20324432;
("34");
false;
("true");

// Math in JavaScript
5 + 3;
7 - 9;
10 * 34;
2 / 9;

// PEMDAS
2 + 5 * 6(2 + 5) * 6;

//Storing Data

// Variables
// Variables are like boxes that hold data for us

// Syntax
// var - a keyword that lets JavaScript know we are creating a new variable
// name -  the name of the variable, this can be any collection of letters and numbers we want
var myName;

// To have our variable hold some data we use the equals sign followed by the data we want it to hold

var myName = "BJ";

var age = 12;

// Now that we've had our variable hold data for us we need to be able to access that data.  We do that by simply calling the variable name wherever we need that data

myName;

age;

// We can also update the data at any time by calling the variable and setting it equal to something new

myName = "James";

age = 15;

// We can even set variables to be the result of an equation

var numberOfCats = 1 + 2;

// and then use that variable in another equation

numberOfCats + 3;

// Note: be careful with variable names, when you call a variable if you spell it wrong or even get the case of just one letter wrong it won't work

numberofCats;

// Let's get a little more complex by using variables within other variables

var secondsInAMinute = 60;
var minutesInAnHour = 60;

var secondsInAnHour = secondsInAMinute * minutesInAnHour;

secondsInAnHour;

var hoursInADay = 24;
var secondsInADay = hoursInADay * secondsInAnHour;

secondsInADay;

// There are also things called incrementers and decrementers, these make it easy to add or subtract one from a current value

var myNumber = 0;

myNumber++;
myNumber;

myNumber++;
myNumber;

myNumber--;
myNumber;

// To change our variable by more than one we can do this

var x = 10;
x = x + 5;
x;

// Shorthand for this is

x += 5;
x;

// This both of those ways accomplish the same thing
// We could also use one of the other operators in place of +

// What is the result of this

var number = 100;
number *= 2;

// Strings
// We talked earlier about being able to save strings to variables like this

var myString = "my super cool string";

// When we create variables their data types are not set in stone so we can stuff like this

var myVariable = 5;

myVariable = "this is a string";

myVariable;

// We've added variables together that were numbers like this

var numberVar = 4;
numberVar + numberVar;

// but what would happen if we did this

var stringVar = "4";
stringVar + stringVar;

// Unlike numbers strings just get smashed together
// Let's try that again

var greeting = "Hello";
var name = "BJ";

greeting + name;

// String Methods
// A method is built in functionality that helps you do something
// Like we mentioned earlier programming is all about manipulation data and a string on its doesn't do much

// .length
// the .length method will give you back the length of the string that you are dealing with

var shortWord = "short";
shortWord.length;

var longWord = "looooooooooooooooong";
longWord.length;

// Find the length of the phrase "JavaScript is dope"

var newWord = "JavaScript is dope";
newWord.length;

// The syntax we used here is called dot notation, its how we tell JS that we want to use a method
// We'll talk about some more methods shortly but first let's talk about how to get individual characters from a string

// What's going on here

var myName = "BJ";
myName[0];

// There's a couple of new things going on here
// First we have these brackets, this is called bracket notation
// We use bracket notation when we want to get a piece of information from a string
// The number inside the brackets is pointing to which character in the array we want
// Another thing the know about JavaScript is that when it makes lists of things it always starts with zero, not one
// This is called being zero indexed
// So the first letter is always going to be index 0
// What do we think this will do

myName[1];

// What about this

myName[2];

"S    T    R    I    N    G"
 0    1    2    3    4    5

// These words are hiding a secret message in the second character of every string
// Let's see if we cant get the second character of every string and put them together to find out what the code is

var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";
codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];

// We can do more than just get one letter at a time
// Instead of using bracket notation we can use a new method called slice to get a section of the string

var newString = "This Is A New String"
newString.slice(10,12)

// We could also leave off the last argument which will simply give us back everything after the index we provided

newString.slice(10)

// We can also change the case of the string using .toLowerCase() and .toUpperCase()

newString.toLowerCase()

newString.toUpperCase()

// How would I capitalize just the first letter of this string

var lowerCaseString = "capitalize me"

lowerCaseString[0].toUpperCase()

// Booleans
// Just like we set variables equal to numbers and strings we can set them equal to booleans

var myBoolean = true
myBoolean = false

// This is where things get a little confusing so stay with me here
// We can use logical operators to determine the total truthiness or falsiness of two or more booleans
// The first way we can do that is with &&, the JS equivalent of "and"

var boolean1 = true
var boolean2 = false

boolean1 && boolean2

// We can change those values around to see how our results change

// We can also use ||, the JS equivalent of "or"
// Lets try it again

boolean1 || boolean2

// The last one is !, the JS equivalent of "not"

!boolean1

// These can be mixed and matched however we like, let's try a complicated one
// Is shouldGoToSchool true or false

var isWeekend = false; var hadShower = true; var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange); 

// Comparison operators
// Comparison operators allow us to judge if a comparison of two numbers is true or false

var num1 = 15
var num2 = 4

num1 > num2

// In JS we have access to > and < just like in math class, plus a few more
// If we wanted to less than or equal to we'd simply put an equal sign after the < symbol

num1 <= 15

// We also have === which judges if the two things are exactly the same

num1 === num2
num2 === 4

// Careful not to confuse triple equals with single equals
// This can be done with any data type

"my string" === "my string"
true === false

// To add a bit of confusion in the mix we also have ==
// While === checks to see if both things are the same type and have the same data == only checks that they have the same data
// This would equal true

"434" == 434

// But this would not

"434" === 434

// Null and undefined
// Undefined tells us that there isn't any data in there and null says that this has been deliberately left empty

// In groups use comparison operators and variables to get a boolean value as a result to the problem below
// You want to be able to work out whether someone is allowed into a PG-13 movie or not.
// The rules are, if someone is 13 or over, they’re allowed in. If they’re not over 13, but they are accompanied by an adult, they’re also allowed in. Otherwise, they can’t see the movie.
// Start here:
// var age = 12;
// var accompanied = true;
// Try changing the values of the variables to see if you can get different results
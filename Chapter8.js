// Functions
// Functions are we write code that we can use over and over again without having to copy and paste the code everytime.
// They also allow us to group functionality together and give it a name that makes it clearer what this group of code does

// Function syntax

// There are a couple of different ways to write functions but today we are only going to go over the most popular an versatile way to write them
// This particular way is called a function declaration

function myFunction() {}

// First we have the function keyword
// Similar to using var with variables this is how we let the computer know that we are writing a function

// Next is the function name
// Again, just like a variable this is the name of our function and can be whatever we like

// After that are the opening and closing parentheses, we'll get into more what they do later but every function has to have these

// Then we have the curly braces
// The curly braces denote that everything inside of them is the actual functionality of the function, what code we want the fucntion to run

// Lets write a function that simply outputs "Hello world!" to the console

function sayHello() {
  console.log("Hello world!");
}

// Now if we stop here and run this nothing is going to happen
// Just like with variables we have to actually call them for the code inside to be run

// This is the synax for a funtion call

sayHello();

// Its simply the name of the function that we created earlier followed by opening and closing paretheses

// Now if we run this we get "Hello world!" in the console

// Parameters and arguments

// Let's talk about what those parentheses are for
// Functions have things called parameters and arguments, which is what goes inside the parentheses

// Parameters are like placeholder for stuff inside functions and are only used when you are creating a function

function greeting(name) {
  console.log("Hello " + name);
}

// Now that we have our placeholder or parameter we can call our function and pass it an argument that take the place of name

greeting("BJ");

// What do you think is going to happen

// So the argument that we passed in took the place of the parameter we set and the code ran
// Again, functions are reusable bits of code so I can call the function again and pass in a different argument this time

greeting("Hobbes");

// I can even use variables

var newName = "James";

greeting(newName);

// Arguments and parameters can be what ever we want
// Lets create a function in which we pass in an argument that says how many times we want to print something

function drawCats(howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
}

// Now that we have our function set with our parameter lets try calling it with a number

drawCats(3);

drawCats(7);

drawCats(100);

// Functions with multiple arguments
// We've seen how passing in arguments works, let's try using multiple arguments at once
// We can do that by simply putting a comma that separates the parameters

function multiArg(param1, param2) {
  console.log("My first argument is: " + param1);
  console.log("My second argument is: " + param2);
}

// Now when we call the function we'll do the same thing and put in two arguments separated by a comma

multiArg("Hello world!", 5);

multiArg(true, "BJ");

// Let's use this in a real function
// We need to create a function that not only takes in an argument that says how many times we want to print something but also what we want to print
// How can we do that

function printAnything(howManyTimes, printWhat) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + printWhat);
  }
}

printAnything(5, "^.^");

printAnything(10, "Yo");

// Another thing to keep in mind here is that the order of the arguments does matter
// Whatever order the parameters are in is the order your arguments should be in

// Returning values

// So far we've only been logging values to the console which is great for displaying data but it doesnt make that data available to us elswehere in our program

// That's where return comes in

// Using return, whenever we call a function it will now equate to whatever value we've returned

// For instance, if I did this

function times2(number) {
  console.log(number * 2);
}

var myNumber = times2(5);

// myNumber is never set to the result of the function because all we did was log the number to the console

// However if I returned that instead

function newTimes2(number) {
  return number * 2;
}

var myNewNumber = newTimes2(5);

// Now myNumber equals 10 because we returned it

// How would I write a function that returned the string "Hello " plus a name that I passed in as an argument

function returnHello(name) {
  return "Hello " + name;
}

// What using return allows us to do is use functions as values
// This means whenever we call a function it equates to some value and then can be used just like how we used variables before

// What do you think is going to happen when I log this

newTimes2(5) + newTimes2(2);

// Since functions can equate to values we can also pass functions in as agruments to functions

// For instance

newTimes2(newTimes2(5));

// 5 is passed into the innermost function, which equates to 10
// Then the outermost function is run with 10 as its argument, equating to 20

// A while ago we used Math.random and Math.floor to select random items in an array
// Let's extrapolate that into a function that we can call whenever we want

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// So now we can pass in an array of words and get a random one back everytime

var someWords = ["Hello", "Goodbye", "Top O the Morn"];

getRandomWord(someWords);

// Something to note about return is that it ends the function
// So if a function hits return it will end right there and not run anything after that
// We can use this to our benefit using conditionals

// Let's write a function that returns the fifth letter of your name

function fifthLetter(name) {
  return "The fifth letter of your name is " + name[4];
}

// But what if your name is not 5 letters long
// We might want the function to do something different in that case and make sure it never reaches that return we just wrote

function fifthLetter(name) {
  if (name.length < 5) {
    return "Your name is not 5 letters long, sorry";
  }
  return "The fifth letter of your name is " + name[4];
}

// What do you think will happen when I call the function like this

fifthLetter("James");

// How about this

fifthLetter("BJ");

// When I put in a name shorther than five letters it only returns the first string becuase it never reaches the second one

// Project time
// As a group follow these instructions to create a random insult generator

// * create a variable named randomBodyParts that is an array of strings of three body parts
// * create a variable named randomAdjectives that is an array of strings of three insulting adjectives
// * create a variable named randomWords that that is an array of strings of at least three nouns
// create a function named generateRandomInsult that does not take in any arguments
// inside the function create a variable named randomString that concats some strings and gets a random word from each of the three random word categories
// return randomString on the last line
// Utilize the getRandomWord function we created before in randomString

// Heres what your code should look like

var randomBodyParts = **insert your array of body parts here**;
var randomAdjectives = **insert your array of insulting adjectives here**;
var randomWords = **insert your array of nouns here**;

 function generateRandomInsult() {

var randomString = "Your " + **find a way to insert a random body part here** +  " is like a " + **find a way to insert a random adjective here** + 
" " + **find a way to insert a random noun here** + "!!!";

  return randomString;
}

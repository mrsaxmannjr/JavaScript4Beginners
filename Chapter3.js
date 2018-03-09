// Chapter 3: Arrays
// So far we’ve learned about numbers and strings, which are types of data that you can store and use in your programs. There’s not a lot that you can do with a string on its own. JavaScript lets you create and group together data in more interesting ways with arrays.
// An array is just a list of other JavaScript data values.

// For example, if your friend asked what your favorite foods were, you could create 3 seperate strings or create an array with all of those foods and save it to one var

const favFood1 = "Ramen";
const favFood2 = "Sushi";
const favFood3 = "Mexican";

// This is much easier than giving 3 seperate strings
const favFoods = ["Ramen", "Sushi", "Mexican"];

// Imagine if I wanted to list all the foods I have tried, creating a var for each would be a mess.

// It’s like if you had a shopping list, but every item was on a different piece of paper. You’d have one piece of paper that said “eggs,” another piece that said “bread,” and another piece that said “oranges.” Most people would write the full list of things they want to buy on a single piece of paper. Wouldn’t it be much easier if you could group the shopping list together in just one place?
// You can, and that’s where arrays come in.

// Creating an array
// To create an array you just need square brackets and it needs to be stored in a var.

var shoppingList = [];

// To create an array with values in it, enter the values, sepa- rated by commas, between the square brackets. We can call the individual values in an array items or elements.

var shoppingList = ["apples", "bananas", "chicken", "eggs", "butter", "bacon", "cheese"];

// If you find it hard to read the array in a single line you can list them

var shoppingList = [
  "apples",
  "bananas",
  "chicken",
  "eggs",
  "butter",
  "bacon",
  "cheese",
];

// it's all the same to JS

// Accesing an Array's elements
// When it’s time to access elements in an array, you use square brackets with the index of the element you want, as you can see in the following example:

shoppingList[0];
"apples";

shoppingList[3];
"chicken";

// Index is the location or spot of an item in an array
// Just like strings, the first element in an array is at 0 and the 2nd is at 1 etc.
// "chicken" is 4th in the list but it is as index [3]

// Use the index to call up a specific item, if apples is the most important thing on my list it will be at the beginning so i can just call shoppingList[0];

// Setting or changing Elements in an array
// Square brackets can also be used to set or change an element at a specific index in an array

shoppingList[0] = "coffee";

// This will change index [0] which is "apples" to "coffee"
var shoppingList = ["coffee", "bananas", "chicken", "eggs", "butter", "bacon", "cheese"];

// You can also fill an empty array using bracket notation

let sFCharacters = [];

sFCharacters[0] = "Ryu";
sFCharacters[1] = "Ken";
sFCharacters[2] = "Akuma";
sFCharacters[3] = "Dan";
sFCharacters[4] = "Chun-Li";
sFCharacters[5] = "Zangief";

// When we call
sFCharacters;

["Ryu", "Ken", "Akuma", "Dan", "Chun-li", "Zangief"];

//You can actually add an element at any index you want. For example, to add a new character at index 10, you could write the following:

sFCharacters[10] = "Sagat";

sFCharacters;

["Ryu", "Ken", "Akuma", "Dan", "Chun-li", "Zangief", undefined x 4, "Sagat"];

// The indexes between 6 and 9 will be undefined and 10 will be "Sagat"

// Mixing Data Types in an Array
//Array elements don’t all have to be the same type. For example, this array contains a number (3), a string ("pizza"), an array
// (["fries", "nachos", 3627.5]), and another number(10):

var mixedArray = [3, "pizza", ["fries", "nachos", 3627.5], 10];

// To access an individual element in this array’s inner array, you would just use a second set of square brackets.

mixedArray[2];
["fries", "nachos", 3627.5]

mixedArray[2][1];
"nachos"

// We are telling JS go to index 2 and inside index 2 find the item at index 1

// Working with Arrays
//Properties and methods help you work with arrays. Properties generally tell you something about the array, and methods usually do something to change the array or return a new array.

// Finding the length of an Array
// It can be useful to know how many items are in an array.  If you kept adding items to your shopping list instead of counting each item to know how many you had you can use the length property

var shoppingList = ["coffee", "bananas", "chicken", "eggs", "butter", "bacon", "cheese"];

shoppingList.length;
7

// This gives us a useful piece of information: the last index in an array is always the same number as the length of the array minus 1. This means that there is an easy way to access the last element in an array, however long that array is:

shoppingList[shoppingList.length - 1];
"cheese"

// We used square brackets to get the item at the index.  Array length is 7, 7 - 1 = 6.

shoppingList[shoppingList.length - 1];
"cheese"
// is the same as

shoppingList[6];
"cheese"

// Adding Elements to an Array
// To add an element to the end of an array use the push method

var animals = [];
animals.push("Cat");
1
animals.push("Dog");
2
animals.push("Llama");
3
animals;
["Cat", "Dog", "Llama"]
animals.length;
3

//The act of running a method in computer-speak is known as calling the method. When you call the push method, two things happen. First, the element in parentheses is added to the array. Second, the new length of the array is returned.

//To add an element to the beginning of an array, you can use .unshift(element)

animals;
["Cat", "Dog", "Llama"]
animals[0];
"Cat"
animals.unshift("Monkey");
4
animals;
["Monkey", "Cat", "Dog", "Llama"]
animals.unshift("Polar Bear");
5
animals;
["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]
animals[0];
"Polar Bear"
animals[2];
"Cat"

// Removing elements from an Array
// To remove the last element from an array, you can pop it off by adding .pop() to the end of the array name.
// The pop method can be particularly handy because it does two things: it removes the last element, and it returns that last element as a value.

animals;
["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]

animals.pop();
"Llama"

animals;
["Polar Bear", "Monkey", "Cat", "Dog"]

// We can choose to save this popped off item to a var

animals;
["Polar Bear", "Monkey", "Cat", "Dog"]

var lastAnimal = animals.pop();

lastAnimal;
"Dog"

animals;
["Polar Bear", "Monkey", "Cat"]

// We can use unshift to add the value of lastAnimal to the animals array

animals.unshift(lastAnimal);
4

animals;
["Polar Bear", "Monkey", "Cat", "Dog"]

//To remove and return the first element of an array, use .shift()

animals.shift();
"Polar Bear"

animals;
["Monkey", "Cat", "Dog"]

// .shift() removes the first element, .pop() removes the last element
// .unshift() adds to the beginning of the array, .push() adds to the end of the array

// Adding Arrays
// To add two arrays together to make a new, single array, you can use firstArray.concat(otherArray). The term concat is short for concatenate, a fancy computer science word for joining two values together. The concat method will combine both arrays into a new array, with the values from firstArray added in front of those from otherArray.

var funnyMovies = ["The Hangover", "Waiting", "Superbad"];

var scaryMovies = ["The Shining", "IT", "The Exorcist"];

var funnyAndScaryMovies = funnyMovies.concat(scaryMovies);

funnyAndScaryMovies;
['The Hangover', 'Waiting', 'Superbad', 'The Shining', 'IT', 'The Exorcist']

// The 2 original arrays are unchanged

// Joining Multiple Arrays
//You can use concat to join more than two arrays together. Just put the extra arrays inside the parentheses, separated by commas

var funnyMovies = ["The Hangover", "Waiting", "Superbad"];

var scaryMovies = ["The Shining", "IT", "The Exorcist"];

var superheroMovies = ["Blade", "Batman", "Black Panther"];

var movies = funnyMovies.concat(scaryMovies, superheroMovies);

movies;
["The Hangover", "Waiting", "Superbad", "The Shining", "IT", "The Exorcist", "Blade", "Batman", "Black Panther"]

// Finding the Index of an element in an Array
// To find the index of an element in an array, use .indexOf(element).

var superheroMovies = ["Blade", "Batman", "Black Panther"];

//indexOf is like the reverse of using square brackets to get a value at a particular index;

superheroMovies.indexOf("Batman");
1

superheroMovies[1];
"Batman"

// If the element whose position you ask for is not in the array, JavaScript returns -1.

superheroMovies.indexOf("Superman");
-1

//This is JavaScript’s way of saying “That doesn’t exist here,” while still returning a number.

// If the element appears more than once in the array, the indexOf method will return the first index of that element in the array.

var superheroMovies = ["Blade", "Batman", "Black Panther", "Batman"];

superheroMovies.indexOf("Batman");
1

// Turning an Array into a String
// You can use .join() to join all the elements in an array together into one big string seperated by commas.

var superheroMovies = ["Blade", "Batman", "Black Panther"];

superheroMovies.join();
"Blade,Batman,Black Panther"

// what if you don’t want to use commas as the separator?
//You can use .join(separator)

var superheroMovies = ["Blade", "Batman", "Black Panther"];

var thing = superheroMovies.join(" is better than ");

thing;
"Blade is better than Batman is better than Black Panther"

// Array practice
//#1 - Finding Your Way Home
//Picture this: your friend has come over to your house. Now she wants to show you her house. The only problem is that you’ve never been to her house before, and later you’ll have to find your way back home on your own.
// Luckily, you have a clever idea to help you with your problem: on the way to your friend’s house, you’ll keep a list of all the landmarks you see. On the way back, you’ll go through the list in reverse and check items off the end of the list every time you pass a landmark so you know where to go next.

//Building the Array with push
// We start off by creating an empty array. The array starts off empty because you don’t know what landmarks you’ll see until you actually start walking to your friend’s house. Then, for each landmark on the way to your friend’s house, we’ll push a description of that land- mark onto the end of the array. Then, when it’s time to go home, we’ll pop each landmark off the array.

var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");

//Going in Reverse with .pop()
// To find your way home just pop off each landmark as you go

landmarks.pop();
"My friend's house"
landmarks.pop();
"My old school"
landmarks.pop();
"Cat rescue center"
landmarks.pop();
"Fire station"
landmarks.pop();
"Leaky fire hydrant"
landmarks.pop();
"Flickering streetlamp"
landmarks.pop();
"Front path"
landmarks.pop();
"My house"

//#2 - Decision Maker
//We can use arrays in JavaScript to build a program to make deci- sions for us (like a Magic 8-Ball).
// First, though, we need to find out how to get random numbers.

// Using Math.random()
//We can produce random numbers using a special method called Math.random(), which returns a random number between 0 and 1 each time it’s called.

Math.random();
0.8945409457664937

Math.random();
0.3697543195448816

Math.random();
0.48314980138093233

// It’s important to note that Math.random() always returns a num- ber less than 1 and will never return 1 itself.
// If you want a bigger number, just multiply the result of calling Math.random(). For example, if you wanted numbers between 0 and 10, you would multiply Math.random() by 10

Math.random() * 10;
7.648027329705656

Math.random() * 10;
9.7565904534421861

Math.random() * 10;
0.21483442978933454

// These are all still numbers with decimals - we can only access an array index with whole numbers

//Rounding Down with Math.floor()

// To fix that, we need another method called Math.floor(). This takes a number and rounds it down to the whole number below it (basically getting rid of everything after the decimal point).

Math.floor(3.7463463);
3

Math.floor(9.9999);
9

Math.floor(0.793423451963426);
0

// We can combine these two techniques to create a random index. All we need to do is multiply Math.random() by the length of the array and then call Math.floor() on that value

// For example, if the length of the array were 4, we would do this:

Math.floor(Math.random() * 4);
2 // could be 0, 1, 2, or 3

// Every time you call the code above, it returns a random num- ber from 0 to 3 (including 0 and 3). Because Math.random() always returns a value less than 1, Math.random() * 4 will never return 4 or anything higher than 4.

// Now, if we use that random number as an index, we can select a random element from an array:

var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex];
"Cave"

// we could shorten this by doing away with the randomIndex variable altogether and just say:

randomWords[Math.floor(Math.random() * 4)];
"Princess"

//The Complete Decision Maker
//Now let’s create our array of phrases, and we can use this code to pick a random one.

var phrases = [
  "That sounds good",
  "Yes, you should definitely do that",
  "I'm not sure that's a great idea",
  "Maybe not today?",
  "Computer says no."
];

// Should I have another milkshake?
phrases[Math.floor(Math.random() * 5)];
"I'm not sure that's a great idea"
// Should I do my homework?
phrases[Math.floor(Math.random() * 5)];
"Maybe not today?"

// Notice that because our array of decisions has five items, we multiply Math.random() by 5. This will always return one of five index positions: 0, 1, 2, 3, or 4.

//Creating a Random Insult Generator
// We can extend the decision maker example to create a program that generates a random insult every time you run it!

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 5)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

randomInsult;
"Your Nose is like a Stupid Marmot!!!"

// Try running this code a few times—you should get a different random insult each time!

// If you wanted to be really clever, you could replace var radomWord with this:

var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// We know that we always need to multiply Math.random() by the length of the array, so using randomWords.length means we don’t have to change our code if the length of the array changes.

// Here’s another way to build up our random insult:

var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");

randomInsult;
"Your Hair is like a Smelly Fly!!!"

// In this example, each word of the sentence is a separate string in an array, which we join with the space character. There’s only one place where we don’t want a space, which is in between randomWord and "!!!". In this case, we use the + operator to join those two strings without the space.

// What you Learned
// JavaScript arrays are a way to store a list of values. Now you know how to create and work with arrays, and you have many ways of accessing their elements.
//Arrays are one of the ways JavaScript gives you to bring mul- tiple values together into one place.

//

// Try out these challenges to practice the skills you learned

// #1: New Insults
// Make your own random insult generator with your own set of words.

// #2: More Sophisticated Insults
// Extend the random insult generator so it generates insults like “Your [body part] is more [adjective] than a [animal]’s [animal body part].” (Hint: You’ll need to create another array.)

// #3: use + or join?
// Make two versions of your random insult generator: one that uses the + operator to create the string, and one that creates an array and joins it with " ". Which do you prefer, and why?

// #4: Joining Numbers
// How could you turn the array [3, 2, 1] into the string "3 is bigger than 2 is bigger than 1" using the join method?

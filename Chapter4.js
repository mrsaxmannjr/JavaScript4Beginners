// Chapter 4 - Objects

// What are objects
// Similar to arrays, objects are another method of storing large amounts of data in JS
// In arrays, we typically are just storing single pieces of data in a row
// With objects, we can be much more specific with what the data is

// Object syntax
// Objects are denoted by being wrapped in curly braces and are made up of what are called key/value pairs

//               {}
//          curly braces

//          "age": 14
//           key  value

// Note that instead of an equals sign, here we are using a colon to separate the data (value) and its name (key)
// Keys are always, though they can be written with or without the double quotes when used in objects
// Values, however, can be any of the data types we've discussed before
// Values can even be more objects or arrays

// {
//     age: 30,
//     name: "BJ",
//     isSmart: false
// }

// This is what a basic object looks like
// We can put as many key-value pairs inside of this object as we want to
// Note that if we do have multiple key-value pairs, just as with arrays, we separate them with a comma

// Let's save that to a variable so that we can access that information later

var me = {
  age: 30,
  name: "BJ",
  isSmart: false
};

// Accessing values

// What were the two types of notation that we used earlier?

// Just like with strings, we can use both dot and bracket notation to access the data within an object
// I personally prefer to use dot notation whenever possible
// Let's take a look at what that looks like

me["name"];
me.name;

// Both of those accomplish the same task just using different types of notation

// What would I get back from these

me.isSmart;
me["age"];
me[age];
name;

// Adding data to objects

// Another way of getting data into an object is adding it in after the object has been created
// For instance, we can create an empty object and save it to a variable

var cat = {};

// We've saved it to a variable but there's no data inside of it
// If we wanted to add data to the object we'd use the same notation we did before

cat.name = "Hobbes";

// If the object does not have a key of "name" it will create that key and set its value
// We can also change it's value if it does exist

cat.name = "Zoey";

// Lets try bracket notation

cat["color"] = "Silver";
cat["breed"] = "Bengal";

// Now we can see that we not only have access to getting data out of objects but adding and changing data within them

// What would happen if I did this

cat.meowType;

// So now we know about arrays and we know about objects
// Let's get crazy and start combining them

// A very common occurrence in JavaScript is to have an array of objects like this

var cats = [
  { name: "Hobbes", color: "Copper" },
  { name: "Zoey", color: "Silver" },
  { name: "Finn", color: "Tuxedo" }
];

// Just as before with arrays, we can access pieces of the array with bracket notation

// What would we get back here

cats[1];
cats[0];
cats;

// Now we can start stringing these together to get deeper into the data
// How would I get just the name of the first cat

cats[0].name || cats[0]["name"];

// Note that dot notation can only be used with objects, not arrays

// Let's take the complexity up a notch

var Hobbes = { name: "Hobbes", color: "Copper", luckyNumbers: [17, 4, 98] };
var Zoey = { name: "Zoey", color: "Silver", luckyNumbers: [34, 19, 10004] };
var Finn = { name: "Finn", color: "Tuxedo", luckyNumbers: [23, 0, 12] };

var myCats = [Hobbes, Zoey, Finn];

// Now we have an array of cats, but this time we saved each individual cat to their own variable and then stashed them each in an array named myCats
// Remember just imagine that each variable name in the array is being replaced by the entire object that it is set to

// How would we get to Zoey's color

myCats[1].color;

// How about Finn's second lucky number

myCats[2].luckyNumbers[1];

// So now we see how these can all be strung together to access data that is nested deep within an array or object

// Uses for objects
// Here's what a real-world use case for objects would look like

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
  }
};

// Here we have a variable called "movies" that stores a bunch of information about 3 movies using an object with some nested objects and arrays

// How would we get to "Emma Watson"

movies["Harry Potter and the Goblet of Fire"].actors[1];

// How about the duration of Star Wars

movies["Star Wars: Episode VI - Return of the Jedi"].duration;

// Now, we can also add a whole new movie to the movie object like this

var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blu-ray"
};

movies["Cars"] = cars;

// In groups I want everybody to create an array of objects with these attributes (feel free to make up all of the information)

// * Saved to a variable named books
// * Is an array with two objects inside
// * Each object has the following info
// - a string for the name of the book
// - a string for the author
// - a number for the number of pages it has
// - an array of strings that has at least three of the characters names
// Add a third book to the array of objects using a new variable and dot notation

// Chapter 6: Conditionals and Loops
// Conditionals and loops are two of the most important concepts in JavaScript. A conditional says, “If some thing is true, do this. Otherwise, do that.” For example, if you do your homework, you can have ice cream, but if you don’t do your homework, you don’t get the ice cream. A loop says, “As long as something is true, keep doing this.” For example, as long as you are thirsty, keep drinking water.

// Conditionals and loops are powerful concepts that are key to any sophisticated program. They are called control structures because they allow you to control which parts of your code are executed when and how often they’re executed, based on certain conditions you define.

// Conditionals
// There are two forms of conditional statements in JavaScript: if statements and if...else statements. An if statement is used to execute a piece of code if something is true. For example, if you’ve been good, you get a treat. An if...else statement executes one piece of code if something is true and another if not. For example, if you’ve been good, you get a treat; else, you get grounded.

// if statements
// The if statement is the simplest of JavaScript’s control structures. It’s used to run code only if a condition is true.

const name1 = "BJ";

const name2 = "Jonathon";

if (name1.length > 7) {
  console.log("Wow, you have a really long name!");
}

// an if statement has two main parts: the condition and the body.

if { condition } {
  body
}

// The condition should be a Boolean value.  The if checks whether the condition is true

if (condition === true || false) {
  // body
  console.log("Random words");
}

// The body is one or more lines of JavaScript code, which are exe- cuted if the condition is true.

// The body of an if statement is executed only if the condition is true. When the condition is false, the interpreter simply skips over the if statement and moves on to the next line.

// if...else statements
//  an if statement will execute its body only if the condition is true. If you want something else to happen when the condition is false, you need to use an if...else statement.

const name1 = "BJ";

const name2 = "Jonathon";

if (name1.length > 7) {
  console.log("Wow, you have a really long name!");
} else {
  console.log("Your name isn't very long.");
}

// This does the same thing as before, except that if the name isn’t longer than seven characters, it prints out an alternative message.

// the if is run if the condition is true and the else is run if the condition is false

// chaining if...else statements
// Often we need to check a sequence of conditions and do something when one of them is true. For example, say you’re ordering Chinese food and you’re choosing what to eat. Your favorite Chinese dish is lemon chicken, so you’ll have that if it’s on the menu. If it’s not, you’ll have beef with black bean sauce. If that’s not on the menu, you’ll have sweet and sour pork. In the rare case that none of those options is available, you’ll have egg fried rice, because you know all the Chinese restaurants you go to will have that.

var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
  console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
  console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
  console.log("OK, I'll have the pork.");
} else {
  console.log("Well, I guess I'll have rice then.");
}

// To create a chain of if...else statements, start with a nor- mal if statement and, after the closing brace of its body, enter the keywords else if, followed by another condition and another body.

// You can keep doing this until you run out of conditions; there’s no limit to the number of conditions. The final else section will run if none of the conditions is true.

// When you have a chain of if...else statements like this with a final else section, you can be sure that one (and only one) of the bodies will be run. As soon as a true condition is found, its asso- ciated body is run, and none of the other conditions is checked. If we run the code in the previous example, I'm having the beef will be printed to the console, because beefWithBlackBean is the first condition that’s found to be true in the if...else chain. If none of the conditions are true, the else body is run.

// Try it out!

// Write a program with a name variable. If name is your name, print out Hello me!; otherwise, print Hello stranger!. (Hint: Use === to compare name to your name.)

// Next, rewrite the program so it’ll say hi to your dad if name is set to your dad’s name or hi to your mom if name is your mom’s name. If it’s neither of them, say Hello stranger! as before.

// Loops
//As we’ve seen, conditionals allow you to run a piece of code once if a condition is true. Loops, on the other hand, allow you to run a piece of code multiple times, depending on whether a condi- tion remains true. For example, while there’s food on your plate, you should keep eating; or, while you still have dirt on your face, you should keep washing.

// while loops
// The simplest kind of loop is a while loop. A while loop repeatedly executes its body until a particular condition stops being true. By writing a while loop, you are saying, “Keep doing this while this condition is true. Stop when the condition becomes false.”

while (condition that is checked each time the loop runs) {
  console.log("Do something as long as condition is true and stop when the condition is false");
  i++;
}

// Like an if statement, the body of a while loop is executed if the condition is true. Unlike an if statement, after the body is executed, the condition is checked again, and if it’s still true, the body runs again. This cycle goes on until the condition is false.

//Counting Sheep with a while loop
//Say you’re having trouble sleeping and you want to count sheep. But you’re a programmer, so why not write a program to count sheep for you?

var sheepCounted = 0;

while (sheepCounted < 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
     sheepCounted++;
   }
console.log("Zzzzzzzzzzz");

//This repeats until sheepCounted becomes 10, at which point the condition becomes false (10 is not less than 10), and the program moves on to whatever comes after the loop. In this case, it prints Zzzzzzzzzzz.

//Preventing Infinite loops
// Keep this in mind when you’re using loops: if the condition you set never becomes false, your loop will loop forever (or at least until you quit your browser). For example, if you left out the line sheepCounted++;, then sheepCounted would remain 0, and the output would look like this:

I have counted 0 sheep!
I have counted 0 sheep!
I have counted 0 sheep!
I have counted 0 sheep!
etc...

// Because there’s nothing to stop it, the program would keep doing this forever! This is called an infinite loop.  Replit has infinite loop protection

// for loops
//for loops make it easier to write loops that create a variable, loop until a condition is true, and update the variable at the end of each turn around the loop. When setting up a for loop, you create a variable, specify the condition, and say how the variable should change after each cycle—all before you reach the body of the loop. For example, here’s how we could use a for loop to count sheep:

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

// there are three parts to this for loop, separated by semicolons: the setup, condition, and increment.

for (setup - runs before loop starts; condition - true or false increment - run after each loop of the body) {
  console.log("Do something if condition is true");
}

// The setup (var sheepCounted = 0) is run before the loop starts. It’s generally used to create a variable to track the number of times the loop has run. Here we create the variable sheepCounted with an initial value of 0.

for (var SHEEPCOUNTED = 0; sheepCounted < 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

//The condition (sheepCounted < 10) is checked before each run of the loop body. If the condition is true, the body is executed; if it’s false, the loop stops. In this case, the loop will stop once sheepCounted is no longer less than 10.

for (var sheepCounted = 0; SHEEPCOUNTED < 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");
// The increment (sheepCounted++) is run after every execution of the loop body. It’s generally used to update the looping variable. Here, we use it to add 1 to sheepCounted each time the loop runs.

for (var sheepCounted = 0; sheepCounted < 10; SHEEPCOUNTED++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

// for loops are often used to do something a set number of times. For example, this program will say Hello! three times.

var timesToSayHello = 3;

for (var i = 0; i < timesToSayHello; i++) {
  console.log("Hello!");
}

// the output
Hello!
Hello!
Hello!

// If we were the JavaScript interpreter running this code, we would first create a variable called timesToSayHello and set it to 3. When we reach the for loop, we run the setup, which creates a variable i and sets it to 0. Next, we check the condition. Because i is equal to 0 and timesToSayHello is 3, the condition is true, so we enter the loop body, which simply outputs the string "Hello!". We then run the increment, which increases i to 1. Now we check the condition again. It’s still true, so we run the body and increment again. This happens repeatedly until i is equal to 3. At this point, the condition is false (3 is not less than 3), so we exit the loop.

// using for loops with Arrays and Strings
// One very common use of for loops is to do something with every element in an array or every character in a string. For example, here is a for loop that prints out the animals in a zoo:

var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}

// the output
This zoo contains a Lion.
This zoo contains a Flamingo.
This zoo contains a Polar Bear.
This zoo contains a Boa Constrictor.

// you can access individual characters in a string in the same way you can access individual elements in an array, using square brackets. This next example uses a for loop to print out the characters in a name:

var name = "Nick";

for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

// the output

My name contains the letter N.
My name contains the letter i.
My name contains the letter c.
My name contains the letter k.

// other Ways to use for loops
//  you don’t always have to start the looping variable at 0 and increment it by 1. For example, here’s a way to print all the powers of 2 below the number 10,000:

for (var x = 2; x < 10000; x = x * 2) {
  console.log(x);
}

// We set x to 2 and increment the value of x using x = x * 2;, which will double the value of x each time the loop runs. The result gets big very quickly, as you can see:

// the output
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192

// try it out
// Write a loop to print the powers of 3 under 10,000 (it should print 3, 9, 27, etc.). 

// what you learned
// you learned about conditionals and loops. Conditionals are used to run code only when a certain condition is true. Loops are used to run code multiple times and to keep running that code as long as a certain condition is true. You can use conditionals to make sure that the right code is run at the right time, and you can use loops to keep your program running as long as necessary. Having the ability to do these two things opens up a whole new world of programming possibilities.

// Programming Challenges
// #1 - Awesome Animals
// Write a for loop that modifies an array of animals, making them awesome! For example, if your starting array is . . .

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// then after you run your loop, it should look like this:

["Awesome Cat", "Awesome Fish", "Awesome Lemur", "Awesome Komodo Dragon"]

// Hint: You’ll need to reassign values to the array at each index. This just means assigning a new value at an existing position in the array. For example, to make the first animal awesome, you could say:

animals[0] = "Awesome " + animals[0];

// #2 Random String Generator
// Make a random string generator. You’ll need to start with a string containing all the letters in the alphabet:


var alphabet = "abcdefghijklmnopqrstuvwxyz";

// To pick a random letter from this string, you can update the code we used for the random insult generator in Chapter 3: Math.floor(Math.random() * alphabet.length). This will create a random index into the string. You can then use square brackets to get the character at that index.

// To create the random string, start with an empty string (var randomString = ""). Then, create a while loop that will continually add new random letters to this string, as long as the string length is less than 6 (or any length you choose). You could use the += operator to add a new letter to the end of the string. After the loop has finished, log it to the console to see your creation!

// #3 H4CK3R SP34K
// Turn text into h4ck3r sp34k! A lot of people on the Internet like to replace certain letters with numbers that look like those letters. Some numbers that look like letters are 4 for A, 3 for E, 1 for I, and 0 for O. Even though the numbers look more like capital letters, we’ll be replacing the lowercase versions of those letters. To change normal text to h4ck3r sp34k, we’ll need an input string and a new empty string:

var input = "javascript is awesome";
var output = "";

// You’ll then need to use a for loop to go through all the letters of the input string. If the letter is "a", add a "4" to the output string. If it’s "e", add a "3". If it’s "i", add a "1", and if it’s "o", add a "0". Otherwise, just add the original letter to the new string. As before, you can use += to add each new letter to the output string. After the loop, log the output string to the console. If it works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3".



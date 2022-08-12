const fs = require('fs');
/* ^ to use the fs module, add this to the top of the JS file.
 The require statement is a built-in function that's globally avaiable in Node.js. 
 It allows the app.js file to access the fs module's function through the fs assignment */
const generatePage = require('./page-template');
/* we're adding this above b/c we put the requre at the top of the page of the 
destination file(this one) that we want to receive exported functions to (receive from the source file -- page-template.js)
*/
// NOTE: the variable name is arbitrary; however the reltive path to include the file must be exact.


const profileDataArgs = process.argv.slice(2); 
console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name,github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


/* above, instead of hard-wiring the text into 
the terminal output, we interpolated the text using 
variables passed into the function that 
created the output */




/*
9.1 Lesson - JS CODE
const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/


/* 9.2 Lesson
Goal of this second lesson is to generate a file
*/







/* notes to self
learn the difference between variables and methods - it's important to know when something is a method or functon versus a value of those
*/

/* notes on Node.JS
We can't use the Web API because we aren't running the application in the browser.
This prevents us from using the DOM or DOM methods to create HTML elements. 
Without the DOM, how do we create the HTML?

One solution is to create a function that returns HTML as a string. 
Remember, HTML is just text set up in a structured format using markup. 
This solution would generate the HTML, which we could then later output as an HTML file. 
To start, let's have the function return a string, and then at the end of this step we'll modify the string into HTML
*/

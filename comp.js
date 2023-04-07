
// const regex=/rtl..([\s\S]*?)..h1/gm;
const fs = require('fs');

// Read the contents of the file
const fileContents = fs.readFileSync('doc.txt', 'utf-8');

// Define the regular expression pattern to search for
const title = /rtl..([\s\S]*?)..h1/gm;
const subtitle=/h3.([\s\S]*?)h3/gm;
const keywords=/h3[\s\S]*?<em([\s\S]*?)em/gm;

const arr=[title,subtitle,keywords];

// Search for the pattern in the file contents
//const matches = fileContents.match(title);

// Print the matches
//console.log(matches);

for (let i = 0; i < arr.length; i++) {
  const rg2 = new RegExp(arr[i]);
  const matches = fileContents.matchAll(rg2);
  for (const match of matches){
    console.log("The titles and keywords are: ");
    console.log(match[1]);
  };
}



/**
 * Using fs, Write into a file ./test.txt the sentence "Hello World!" in this project's root folder.
 * When the write is complete, console.log that the file was saved successfully.
 */

// your code goes here
var fs=require('fs');
fs.appendFile('test.txt', 'Hello World!',function(err){
    if(err) throw err;
    console.log('the file was saved successfully');
})

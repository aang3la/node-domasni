//? Domasna: da istrazime uste nekolku metodi na fs modulot
//? kako da izbriseme file
const fs = require ("fs");

fs.unlink("./test.txt", (err) => {
    if(err) {
        console.log("Error!");
    }
    console.log("Delete file successfully.");
});

//? Kako da preimenuvame file
fs.rename('text.txt', 'newtext.txt', () => console.log('File renamed'));


//? I uste eden metod po zelba
fs.stat("newFile.txt", (err, stats) => {
    if (err) {
      console.error('Error retrieving file/directory information:', err);
    } else {
      console.log('File/Directory information:');
      console.log('Is File:', stats.isFile());
      console.log('Is Directory:', stats.isDirectory());
      console.log('Size:', stats.size);
      console.log('Created:', stats.ctime);
      console.log('Modified:', stats.mtime);
      console.log('Accessed:', stats.atime);
    }
  });

//? Isto taka da kreirame file
const newFile = "I have created a new file with asyhron version"
fs.writeFile("./newFile.txt", newFile, "utf-8", (err) => {
    if(err) {
        return console.log('Error');
    }
    console.log('Created the file successfully!');
})

// //?i da procitame file
fs.readFile("./newFile.txt", "utf-8", (err,text) => {
    if(err) {
        return console.log("Error!");
    }
    console.log(text);
});
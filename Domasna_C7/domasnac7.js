//? DOMASHNA: da se rekreira domashnoto od cas 6 so express

//Povikuvanje na modul
const express = require ("express");

//*Kreirame nova express aplikacija
const app = express();

app.get("/ime/:name", (req, res) => {
    const name = req.params.name;
    const samoglaski = ["a", "e", "i", "o", "u"];
    const numCharacters = name.length;
    const isEven = numCharacters % 2 === 0 ? "da" : "ne";

    let countSamoglaski = 0;
    const letters = name.split("");

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (samoglaski.includes(letter)) {
            countSamoglaski++;
        };
    };

    const countSoglaski = name.length - countSamoglaski;

    res.send (`Imeto ${name} ima ${numCharacters} karakteri, paren: ${isEven}, soglaski: ${countSoglaski}, samoglaski: ${countSamoglaski}`);
});


//? Vtor primer za funkcija za express 
app.get("/presmetka/:op/:x/:y", (req, res) => {
    switch (req.params.op) {
        case "plostina" :
            return res.send (`${Number(req.params.x) * Number(req.params.y) / 2}`);
        case "perimetar" :
            return res.send (`${2 * Number(req.params.x) + Number(req.params.y)}`);
        default:
            return res.send("Unknown operator, please try again!");
    }
});

//* Ja startuvame aplikacijata na porta 10000
app.listen (10000, (err) => {
    if (err) return console.log(err);
    console.log("Server started successfully on port 10000");
});
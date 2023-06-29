const express = require("express");
const app = express();

const calculator = require("./controller/calculator");
app.get("/plostinapr/:sirina/:visina", calculator.plostinaPr);
app.get("/konverter/:op/:num", calculator.celFar);
app.get("/calculator/:op/:a/:b", calculator.calc);
app.get("/plostinatri/:osnova/:visina", calculator.plostinaTri);
app.get("/sila/:mass/:acc", calculator.calcForce);


app.listen(10000, (err) => {
    if(err) return console.log(err);
    console.log("Server started successfully.")
});
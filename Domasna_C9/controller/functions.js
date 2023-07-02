const fs = require("fs");

//* Object with data
let domasna = {
    ime: "Angela",
    prezime: "Antova",
    ovoshje: ["Jabolko", "Praska", "Kajsija", "Krusha"],
    zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
    vitamini: [
      { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
      { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
      { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
      { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
      { ime: "Domat", vitamin: "G", mineral: "Srebro" },
    ],
  };

//* Printing the object with data
const elements = (req, res) => {
    res.render("index", domasna);
};

//* Adding new elements in the table
const addingEl = (req, res) => {
    console.log(req.body);
    const newElement = {
        ime: req.body.ime,
        vitamin: req.body.vitamin,
        mineral: req.body.mineral
    };
    domasna.vitamini.push(newElement);
    res.render("index", domasna);
};

//* Export the modules
module.exports = {
    elements,
    addingEl
}
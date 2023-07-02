//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objektot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja

const express = require("express");
let ejs = require("ejs")

const { elements, addingEl } = require("./controller/functions");

const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/zelenchuk", elements);
// On the same url, we are adding new element in the table
app.post("/zelenchuk", addingEl);

// Launch the app on port
app.listen(10001, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started on port 10001")
});
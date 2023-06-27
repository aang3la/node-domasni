//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/angela
// /ime/julija
// parno: da, karakteri 5, soglaski: 2, samoglaski

//* Povikuvanje na http modulot
const http = require ("http");

//* Kreiranje na server
const server = http.createServer((req, res) => {
  //proveruvame url-ot; dava samo /
  console.log(req.url);
  
  //pravime destrukcija na url
  const [_, path, name] = req.url.split("/");
  //gledame dali funkcionira
  console.log(path, name);
   
  //Ova e da ne pagja serverot na sekoja promena na ime
  if (!name) {
    res.end("Invalid URL");
    return;
  }

  //ova e primer za da znae aplikacijata prema sto da se orientira, spored sto ke filtrirame
  const samoglaski = ["a", "e", "i", "o", "u"];

    if(name !== null){
        //Kolku bukvi ima imeto
        const numCharacters = name.length;
        const letters = name.split('');
        
        //Paren ili neparen broj na bukvi
        const eParen = numCharacters % 2 === 0 ? "da" : "ne";

        const soglaski = numCharacters - samoglaski;

        let countSamoglaski = 0;
        let countSoglaski = 0;
      
          //Kolku soglaski kolku samoglaski
          for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];
      
            if (samoglaski.includes(letter)) {
              countSamoglaski++;
            }
      
            if (soglaski.includes(letter)) {
              countSoglaski++;
            }
          }


        //Prikazuvanje na rezultatite
        // const message = {name, numCharacters, isEven, countSamoglaski, countSoglaski};
        res.end(`karateri na imeto ${numCharacters}, paren: ${eParen}, samoglaski: ${countSamoglaski} , soglaski: ${countSoglaski}`);
    } else {
        res.end("Not Found");
    }
});

//* Kreiranje listener na odredena porta
server.listen(10000,"127.0.0.1", (err) => {
    if(err) console.log(err);
    console.log("Server has started on port 10000");
});

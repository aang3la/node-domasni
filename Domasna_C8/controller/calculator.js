const fs = require("fs");

const parseTemplate = async(template, object = null) => {
    return new Promise ((success, fail) => {
        fs.readFile(`${__dirname}/../views/${template}`, "utf-8", (err, content) =>{
            if (err) return fail(err);
            if(object) {
                for (property in object) {
                    content = content.replaceAll(`{{${property}}}`, object[property]);
                }
            }
            return success(content);
        });
    });
};


//? DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
const plostinaPr = async (req, res) => {
    const sirina = req.params.sirina;
    const visina = req.params.visina;

    const plostinapr = sirina * visina;
    const response = await parseTemplate("rezultat.html", {data: plostinapr, ime: "Plostina na pravoagolnik", podatoci: "So ova se presmetuva plostina na pravoagolnik, odnosno shirinata pomnozena so visinata."});

    res.send(response);
}


//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
const celFar = async (req, res) => {
    let response;
    switch(req.params.op) {
        case "f2c" :
            response =`${Number(req.params.num - 32) * 0.556}`;
            break;
        case "c2f" :
            response = `${Number(req.params.num) * 1.8 + 32}`;
            break;
         default:
            return res.send("Nepoznat operator!");
    }
    response = await parseTemplate("rezultat.html", {data: response, ime: "Presmetuvanje na f2c ili c2f", podatoci: "Ova e konverter koj presmetuva kolku farenhajti se vo celziusovi"});
    res.send(response);
}


//? 3. DA SE KREIRA KALKULATOR (SWITH || IF ELSE)
const calc = async (req, res) => {
    let response;
    switch(req.params.op) {
        case "sobiranje" :
            response = `${Number(req.params.a) + Number(req.params.b)}`;
            break;
        case "odzemanje":
            response = `${Number(req.params.a) - Number(req.params.b)}`;
            break;
        case "delenje":
            response = `${Number(req.params.a) / Number(req.params.b)}`;
            break;
        case "mnozenje":
            response = `${Number(req.params.a) * Number(req.params.b)}`;
            break;
        default:
            return res.send("Nepoznat operator!");
    }
    response = await parseTemplate ("rezultat.html", {data: response, ime: "Presmetki so kalkulator", podatoci: "So ova se pravi presmetki kako sto se sobiranje, odzemanje, mnozenje i delenje."});
    res.send(response);
}


//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
const calcForce = async (req, res) => {
    const mass = req.params.mass;
    const acc = req.params.acc;

    const force = mass * acc;
    const response = await parseTemplate("rezultat.html", {data: force, ime:"Presmetuvanje na sila", podatoci:"So ova se presmetuva silata, odnosno masata pomnozena so zabrzuvanjeto na objektot."});
    res.send(response);
}


//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
const plostinaTri = async (req, res) => {
    const osnova = req.params.osnova;
    const visina = req.params.visina;

    const plostinatri = (osnova * visina) / 2;
    const response = await parseTemplate("rezultat.html", {data: plostinatri, ime: "Plostina na triagolnik", data: "So ova se presmetuva plostina na triagolnik, odnosno osnovata pomnozena so visinata, podeleno so 2."});
    res.send(response);
}

module.exports = {
    plostinaPr,
    celFar,
    calc,
    calcForce,
    plostinaTri
}
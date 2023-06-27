//? Domasna: Da se dodade uste eden modul so ime domasna.js koj ke ima funkcija da promeni farenhajt vo celzius i obratno

const c2farenheit = require ("./domasna.js");
console.log(c2farenheit.c2f(25));

const f2celsius = require ("./domasna.js");
console.log(f2celsius.f2c(95));


//? Da ima fukncija sto presmetuva plostina i perimetar na trigolnik

const areaTri = require ("./domasna.js");
console.log(areaTri.plostinaTri(3,5));


const perimeterTri = require ("./domasna.js");
console.log(perimeterTri.perimetarTri(3,5,8));


//? Da ima fukncija sto presmetuva plostina i parametar na pravoagolnik

const findArea = require ("./domasna.js");
console.log(findArea.plostinaPr(30,20));

const findPerimeter = require ("./domasna.js");
console.log(findPerimeter.perimetarPr(40,15))


//? Da ima funkcija sto proveruva dali nekoj broj e paren ili neparen

const numS = require ("./domasna.js");
console.log(numS.nums(2));
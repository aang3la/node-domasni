//? Domasna cas 2
const studenti = [
    { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
    { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
    { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
    { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
    { ime: "Simona", prosek: 7, grad: "Ohrid" },
    { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
    { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
    { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
    { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
  ];

//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
const students1 = studenti
    .filter ((student) => student.prosek > 7)
    .filter((student) => student.ime.endsWith("a"))
    .sort ((a,b) => a.prosek - b.prosek);
console.log(students1);


//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
const students2 = studenti
    .filter ((student) => student.prosek > 9)
    .filter ((student) => student.grad != "Skopje")
    .sort((a,b) => b.prosek - a.prosek);
console.log(students2);


//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
const students3 = studenti
    .filter ((student) => student.ime.length === 5)
    .sort ((a,b) => a.prosek - b.prosek)
    .slice(0, 3);
console.log(students3);


//? 4. Vkupen prosek na studenti koi se od Kumanovo
const students4 = studenti
  .filter((student) => student.grad === "Kumanovo")
  .reduce ((acc,student) => {
    return acc + student.prosek;
  },0)
console.log(`Vkupniot prosek na studenti od Kumanovo e ${students4}`);


// //? 5. Prosek na prosecite od gradovite Skopje i Ohrid
const students5 = studenti
  .filter((student) => student.grad === "Skopje" || student.grad === "Ohrid")
console.log(students5)

const prosek = studenti 
  .reduce ((acc, student) => {
    return acc + student.prosek / students5.length;
  }, 0)
console.log(`Prosekot na prosecite od gradovite Skopje i Ohrid e ${prosek}`)

//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
studenti.push({
  ime: "Goran",
  prosek: 7.3,
  grad: "Delchevo"
});
console.log(studenti);

//? 7.Da se izbrishe prviot student vo studentite
const firstStudent = studenti.shift();

//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)
const updatedStudents = studenti
  .filter((student) => student.grad === 'Ohrid' || student.grad === 'Kumanovo')
  .map(student => ({
    ...student,
    prosek: student.prosek + 1
  }));
console.log(updatedStudents);
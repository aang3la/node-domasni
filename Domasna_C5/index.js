const modul = require("./studentFun.js");

//? Dodavanje student vo fajlot
const addStudent = async (student) => {
    try{
        //Vcituvanje na celata niza
        const dataString = await modul.fileRead("studenti.json");
        let studentsData = JSON.parse(dataString);

        //Dodavanje nov objekt vo nizata
        studentsData.push(student);

        //Zacuvuvanje na objektot vo nizata
        await modul.fileWrite ("studenti.json", JSON.stringify(studentsData));

        console.log("New student was added successfully!");
    }
    catch(err){
        console.log("Error adding student: ", err);
    }
};
addStudent({ime: "Marija", grad: "Ohrid", prosek: 9.2});
addStudent({ime: "Oliver", grad: "Ohrid", prosek: 9.3});



// //? Brishenje na student od fajlot
// const deleteStudent = async () => {
//     try {
//         const dataString = await modul.fileRead ("studenti.json");
//         let studentsData = JSON.parse(dataString);

//         //Izminuvanje na site elementi i brisenje na eden student
//         studentsData.filter ((student) => student.ime == "Marko");

//         //Zacuvuvanje na tekstot vo fileot
//         await modul.fileWrite ("studenti.json", JSON.stringify(studentsData));
        
//         console.log("The student was deleted successfully!");
//     }
//     catch(err) {
//         console.log("Error deleting student: ", err);
//     }
// };
// deleteStudent();

// //? Menuvanje na podatoci na student od fajlot
// const changeName = async () => {
//     try {
//         //Vcituvanje na cela niza
//         const dataString = await modul.fileRead("studenti.json");
//         let studentsData = JSON.parse(dataString);

//         //Pravenje promena na soodvetniot clen
//         const updatedArr = studentsData.map (student => {
//             if (student.ime === "Stefan") {
//                 return {...student, ime: "Aleksandar"};
//             } return student;
//         });

//         //Zacuvuvanje na objektot vo nizata
//         await modul.fileWrite ("studenti.json", JSON.stringify(studentsData));

//         console.log("Array was updated successfully.")
//     }
//     catch(err) {
//         console.log(err);
//     }
// } 
// changeName();


// //? Chitanje na site studenti od fajlot
// const allStudent = async () => {
//     try{
//         //Vcituvanje na celata niza
//         const result = await modul.fileRead("studenti.json");
//         let jsonData = JSON.parse(result);
//         console.log(jsonData);
//     }
//     catch(err){
//         console.log(err);
//     }
// };
// allStudent();



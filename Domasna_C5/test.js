const addStudent = async (student) => {
    try {
      // Reading the entire array
      const dataString = await modul.fileRead("studenti.json");
      let studentsData = JSON.parse(dataString);
   
      studentsData.push(student);
   
      await modul.fileWrite("studenti.json", JSON.stringify(studentsData));
   
      console.log("New student was added successfully!");
    } catch (err) {
      console.log("Error adding student: ", err);
    }
  };
   
  addStudent({ ime: "Jasmina", grad: "Kicevo", prosek: 9.7 });
  addStudent({ ime: "Jasmina", grad: "Kicevo", prosek: 9.7 });
  addStudent({ ime: "Jasmina", grad: "Kicevo", prosek: 9.7 });
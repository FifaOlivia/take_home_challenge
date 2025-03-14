const getDataFromExcel = require("./getDataFromExcel");
let fs = require("fs");
const path = require("path");

function checkFile(filePath) {
  //Vérifie si le fichier existe
  if (fs.existsSync(filePath)) {
    //Vérifie l'extension du fichier
    const extname = path.extname(filePath);
    if (extname === ".xlsx") {
      console.log("Le fichier existe et à l'extension .xlsx");
    } else {
      console.log("Le fichier existe mais n'a pas l'extension .xlsx");
    }
  } else {
    console.log("Le fichier n'existe pas");
  }
}

process.stdin.on("data", (data) => {
  const filePath = data.toString().trim();
  checkFile(filePath);
  if (filePath) {
    try {
      const result = getDataFromExcel(filePath);

      
    } catch (error) {
      console.error(`Erreur lors de la lecture du fichier : ${error.message}`);
    }
  } else {
    console.error("Aucun chemin de fichier fourni.");
  }
});

console.log("Veuillez entrer le chemin du fichier Excel");

// Écouter les événements de fin de stdin
process.stdin.on("end", () => {
  console.log("Fin de l'entrée standard.");
});

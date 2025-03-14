const getDataFromExcel = require("./getDataFromExcel");

process.stdin.on("data", (data) => {
  const filePath = data.toString().trim();

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

// Écouter les événements de fin de stdin
process.stdin.on("end", () => {
  console.log("Fin de l'entrée standard.");
});

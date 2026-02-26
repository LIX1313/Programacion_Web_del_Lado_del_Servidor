//Hecho por: Luis Mario Ireta Xiu

const fs = require("fs");

fs.writeFile("archivo.txt", "Hola desde NodeJS", (err) => {
  if (err) throw err;
  console.log("El archivo ha sido creado con éxito.");
});

const { readFile } = require("node:fs/promises");
const { resolve } = require("node:path");

async function logFile() {
  try {
    const filePath = resolve("archivo.txt");
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();

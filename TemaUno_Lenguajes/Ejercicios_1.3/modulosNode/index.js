/* const fs = require("fs"); //Importa la herramienta de sistema de archivos

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');
});
*/

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

//Leer línea por línea
/*
const { open } = require("node:fs/promises");

(async () => {
  const file = await open("archivo.txt");

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();
*/

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var nombreEquipo = "";

function registrador (req, res, next){
    console.log(req.body);
    nombreEquipo = req.body("nombre") + req.body("mascota");
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/public/index.html");
});

app.use(registrador);

app.post("/submit", (req, res) => {
    res.send("El nombre del equipo es: " +nombreEquipo);
});

app.listen(port, () => {
    console.log("El servidor se ejecuta en: " + port);
});
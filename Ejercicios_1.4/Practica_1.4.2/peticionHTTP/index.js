//AA 1.4.2 
//Por Luis Mario Ireta Xiu.
import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1> Hola Mundo </h1>");
    res.sendStatus(200);
});

app.get('/registro', (req,res) =>{
    res.sendStatus(201);
});

app.get('/usuario/actualizar', (req,res) => {
    res.sendStatus(200);
});

app.get('/usuario/modificar', (req,res) => {
    res.sendStatus(200);
});

app.get('/usuario/eliminar', (req,res) => {
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log("Serverejecutandose en puerto 3000");
});
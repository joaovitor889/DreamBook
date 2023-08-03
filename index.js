const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const bookModel = require("./database/Book");

//Database
connection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((msgErro) => {
    console.log(msgErro);
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(45678, () => {
    console.log("API RODANDO!");
})
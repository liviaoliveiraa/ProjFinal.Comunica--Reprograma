const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require('dotenv-safe').config();
const db = require("../src/data/database")
const index = require("./routers/index");
const inicio = require("./routers/materias.router");
const professoresRouter = require("../src/routers/professores.router");
const infoMaterias = require("./routers/infoMaterias.router");
const usuariasRouter = require("./routers/usuariasRouter")

db.connect();

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use("/inicio", inicio); 
app.use("/professores", professoresRouter);
app.use("/informacoes", infoMaterias)
app.use('/usuarias', usuariasRouter)


module.exports = app;
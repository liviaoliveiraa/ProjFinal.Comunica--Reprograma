const express = require("express");
const mongoose = require("mongoose");
const app = express();
const index = require("./routers/index");
const inicio = require("./routers/materias.router");
const db = require("../src/data/database")
const professoresRouter = require("../src/routers/professores.router");
const cors = require("cors");

db.connect();

app.use(express.json());
app.use(cors());

app.use("/", index);
app.use("/inicio", inicio);
app.use("/professores", professoresRouter);

module.exports = app;
const mongoose = require("mongoose");
require("dotenv").config()

const MONGO_URL = process.env.MONDODB_URI || "mongodb://localhost:27017/malhacao"

const connect = () => {mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Conectadas bb no MongoDb Atlas")
})
.catch((error)=>{
    console.log("Algo deu errado")
    console.error(error)
})
}

module.exports = { connect }
//exportando função {}
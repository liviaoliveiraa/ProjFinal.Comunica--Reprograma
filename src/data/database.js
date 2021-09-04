const mongoose = require("mongoose");

const connect = () => {mongoose.connect("mongodb://localhost:27017/malhacao", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Database conectado com sucessso."))
    .catch(err => console.err)
}

module.exports = {connect} //exportando função {}
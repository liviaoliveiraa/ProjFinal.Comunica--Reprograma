const app = require("./src/app");
port = 8080

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


module.exports = app;



const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000
const mongoose = require("mongoose")

app.listen (port, () => {
    console.log("Puerto Activo:", port);
})

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
.then(() => console.log('Conectado con la base de datos'))
.catch((err) => console.error(err));


    
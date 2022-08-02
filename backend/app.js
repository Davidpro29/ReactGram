require("dotenv").config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT;;
const app = express();

// configuração JSON e data para resposta;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// SOLVE CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000"}))

//uploads directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// db connection
require("./config/db.js")

// routes
const router = require("./routes/Router.js")
app.use(router);

app.listen(port, () => {
    console.log('App rodando');
})
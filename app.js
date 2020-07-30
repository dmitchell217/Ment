const express = require('express');
const app = express();
<<<<<<< .merge_file_a9FhVP
const es6Renderer = require('express-es6-template-engine');
const connect = require('./config.js')

=======
const secretInfo = require('./config.js')
>>>>>>> .merge_file_uoFRbn
const pgp = require('pg-promise')()
const eS = require('express-session')
const expressSession = eS(secretInfo().secret)

const formidable = require("formidable");
const es6Renderer = require('express-es6-template-engine');


app.use(express.urlencoded({extended: true}))
app.use(expressSession)
app.engine("html", es6Renderer)
app.set("views", "templates")
app.set("view engine", "html")
<<<<<<< .merge_file_a9FhVP


=======
>>>>>>> .merge_file_uoFRbn


app.use(express.static("public"));


<<<<<<< .merge_file_a9FhVP

const db = pgp(connect)
=======
const db = pgp(secretInfo().connect)
>>>>>>> .merge_file_uoFRbn
require("./api-routes")(app, db);//sets the api

const port = 5434;

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})

// module.exports = db

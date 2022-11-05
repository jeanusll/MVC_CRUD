const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
require("./database");

//config
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index.routes"));

app.listen(3000);
console.log("Server on port", 3000);

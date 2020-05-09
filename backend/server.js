const express = require("express");
const cors = require("cors");
const favicon = require('serve-favicon')
const path = require('path')
const app = express();


app.use(cors());
app.use(express.json())

//middleware to route activities 
const contactRouter = require("./routes/contact");
app.use("/send", contactRouter);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log("Listening on Port "+port))
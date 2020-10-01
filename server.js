const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const multer = require("multer");
var upload = multer({ dest: "/uploads/" })

const files = require("./files");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send({ message: "server working!" })
});

app.post('/add-data', (req, res) => {
    res.json(req.body);
})

app.post('/file-upload', upload.single("file"), files.upload)

app.listen(port, () => {
    console.log("Server is listening on port 3000");
});

const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const app = express();
const path = require("path");
require("dotenv").config(); 

const { PORT, MONGO_URL } = process.env;

app.use(express.json())
app.use(fileUpload())
app.use(cors());

app.use('/uploads', express.static(__dirname + '/uploads')); 
app.use(require("./routes/auction.route"))
app.use(require("./routes/category.route"))
app.use(require("./routes/item.route"))
app.use(require("./routes/user.route"))           

async function start() {
    try {
        await mongoose.connect(MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server started: http://localhost:${PORT}/`);
        });
    } catch (err) {
        console.log(`Error: ${err}`);   
    }
}

start();
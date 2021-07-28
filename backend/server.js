const express = require('express');
const cors = require('cors');
//add nodemailer here

const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`);
});
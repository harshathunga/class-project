import express from 'express'; //this is require
import cors from 'cors';

// const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import express from 'express';
// import cors from 'cors';
import cookieParser from 'cookie-parser';


import bodyParser from 'body-parser';
import postRoutes from './routes/post.js' // this is for login
import loginRoutes from './routes/login.js'// this is for posts


app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
    origin: "http://localhost:3000",
    // methods:["POST","GET"],

    credentials:true
}
));

app.listen(3001, () => {

    console.log("server is running in 3001") 
})

app.use('/users', postRoutes);
app.use('/posts', loginRoutes);




// app.get('/', (req, res) => {
//     console.log('[test]')
//     res.send("hello")
// })


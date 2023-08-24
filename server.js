

// server initialize
const express = require("express");
const app = express();

// Use to parse request body in express -> put or post
const bodyparser= require('body-parser');


// specially parse json date& add it to the request body object
app.use(bodyparser.json());


// Active the server on 3000 port
app.listen(3000, ()=>{
    console.log("hello ji")
})

// Routes
app.get('/', (request,response)=>{
    response.send('hello jee');
})
   
app.post('/api/cars', (request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted succesfully")

})

// use to parse request.body in express ->put or post

const bodyParser= require('body-parser');

// Specially Parse json data & add it to the request. body object

app.use(bodyParser.json());


const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mydatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

.then(()=> {console.log("Connection succesfully")})
.catch((error) => {console.log("Received an error")});
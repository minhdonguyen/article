const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbconfig = require('./db/database');
const createError = require('http-errors');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
    useNewUrlParser: true
}).then(()=>{
    console.log('Connected Database')
},
error =>{
    console.log("Database could not be connected +"+error);
}
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const userRoute = require('./routes/blog.routes');

app.use('/blog',userRoute);

const port = process.env.PORT || 3000;

const server =  app.listen(port, ()=>{
    console.log('Port connected to ; '+ 3000);
});

app.use((req,res,next)=>{
    next(createError(404));
});

app.get('/',(req,res)=>{
    res.send('invaild endpoint');
});

app.use(function(err,req,res,next){
    if(!err.statusCode)
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})
'use strict';

const express = require('express');
const {logger} = require('./middlewares/logger');
const app = express ();

app.use(express.json());
//app.use(cors());

app.get('/',(req,res)=>{
    res.send ('hello lolo');
})

app.get('/data',logger,(req,res)=>{
    res.status(200).send ({name:'wlla', age:26});
})

function start(port){
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}
module.exports={
    app:app,
    start:start
}
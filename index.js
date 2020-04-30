const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err)
        console.log(`Error in running server:${err}`);
    console.log(`Server is running on port:${port}`);    

});
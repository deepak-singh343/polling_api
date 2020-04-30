//include mongoose
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/polling_api_db');
const db=mongoose.connection;

//if error
db.on('error',console.error.bind(console,"error in connecting to the mongodb"));

//successfully connected to database
db.once('open',function(){
    console.log('Connected to the database');
})
module.exports=db;
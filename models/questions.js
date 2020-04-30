//include mongoose
const mongoose=require('mongoose');

//create Schema for Questions
const QuestionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }]
},{
    timestamps:true
});

//create Question model
const Question=mongoose.model('Question',QuestionSchema);

//export Question model
module.exports=Question;
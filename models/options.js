//include mongoose
const mongoose=require('mongoose');

//create Schema for Options
const OptionSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    votes:{
        type:Number,
        required:true
    },
    link_to_vote:{
        type:String
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
},{
    timestamps:true
});

//create Options model
const Option=mongoose.model('Option',OptionSchema);

//export Option model
module.exports=Option;
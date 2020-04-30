//include mongoose and the required models
const mongoose = require('mongoose');
const Question = require('../../../models/questions');
const Option = require('../../../models/options');

//add a vote in the option
module.exports.addVote = async function(req, res){
    try{
      //find option by id and increment its votes by 1
      let newoption=await Option.findByIdAndUpdate(req.params.id, { $inc: {votes:1}});
  
      //return success response
      return res.status(200).json({
        message: "Vote added successfully",
        newoption
      });
    }catch(err){
      //if error
      return res.status(500).json({
        message: "Internal Severe Error"
      });
    }
}

//delete specific option
module.exports.deleteOption=async function(req,res){
    try{
        //find the option by id
        let options=await Option.findById(req.params.id);

        //get votes of the to be deleted option
        let votes=options.votes;

        //if option's votes is greater than 0 than that option cant be deleted
        if(votes>0)
        {
            //return failure response
            return res.status(404).json({
                message: "This Option can't be deleted since it has votes"
              });
        }

        //option has zero votes so it can be deleted,find the question by id and delete that question
        let newoption=await Option.findByIdAndDelete(req.params.id);
    
        //return success response
        return res.status(200).json({
          message: "Vote deleted successfully"
        });
      }catch(err){
        //if error
        return res.status(500).json({
          message: "Internal Severe Error"
        });
      }
}
  
//include required models
const Question=require('../../../models/questions');
const Option=require('../../../models/options');

//create a question
module.exports.addQuestion=async function(req,res)
{
    try{
        //add new question
        const question=new Question({
            title:req.body.title
        });

        //save the new question
        const newQuestion=await question.save();

        //return success response
        res.status(201).json({
             message:"Options Added Successfully",
             newQuestion
        });
    }catch(err){
        //if error return failure message
        res.status(400).json({
            message:err.message
        })
    }
}

//create new option
module.exports.addOption=async function(req,res)
{
    try{
        //url to be used for dynamic link_to_vote
        let url="http://localhost:8000/options/";

        //find question by id
        let question=await Question.findById(req.params.id);

        //if question not found
        if(!question)
        {
            throw new Error('Question not Found');
        }

        //create new option
        const newOption=await Option.create({
            text:req.body.text,
            votes:0,
            question
        });

        //fetch option's id
        let optionId=newOption._id;

        //create link for link_to-'vote
        let link = url+optionId+'/add_vote';

        //find option by id and update its link_to_vote
        await Option.findByIdAndUpdate(optionId,{link_to_vote:link});

        //save the created option 
        question.options.push(newOption);
        question.save();

        //return success response
        return res.status(201).json({
            message:"Options Added Successfully"}
        );

    }catch(err){
        //if error return failure message
        res.status(400).json({
            message:err.message
        })
    }
}  

//view the specific question
module.exports.viewQuestion=async function(req,res)
{
    try{
        //find question by id
        let question=await Question.findById(req.params.id)
        .select('title')
        .populate({path:'options',select:'text votes link_to_vote'});

        //if question not found
        if(!question)
        {
            throw new Error('Question not Found');
        }

        //return success response
        return res.status(200).json({question});

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}  

//delete specific question
module.exports.deleteQuestion=async function(req,res)
{
    try{
        //find the question by id
        let question=await Question.findById(req.params.id)
        .populate({path: 'options'});

        //Get all the options of the specified question
        let options=question.options;

        for(let i=0;i<options.length;i++)
        {
            //check if any of the options of the question has even 1 vote if it will have then the question cant be deleted
            if(options[i].votes>0)
            {
                //return not found response
                return res.status(404).json({
                    message: "This Question can't be deleted since it's options have votes"
                  });
            }
        }

        //question doesnt have any option with even a single vote,find the question by id and delete that question
        await Question.findByIdAndDelete(req.params.id);

        //return success response
        return res.status(200).json({
            message:"Question deleted successfully"
        })

    }catch(err){
        //if error
        res.status(400).json({
            message:err.message
        })
    }
}  


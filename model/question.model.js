const mongoose=require('mongoose');
const questionSchema=mongoose.Schema({
    title:{type: String, required:true},
    body:{type: String, required:true},
    userID:String,
    username:String,
    tags:{type: String,enum:["maths","science","history"] ,required:true},
    createdAt: { type: Date, default: Date.now }
},{
    versionKey:false
});


const QuestionModel=mongoose.model('question',questionSchema);

module.exports={
    QuestionModel
};
const express=require('express');
const app=express();
const {connection}=require('./db');
const {questionRouter}=require('./route/question.route')
const {answerRouter}= require("./route/answer.route")
const cors=require('cors');
 const {userRouter}=require('./route/user.route');

app.use(express.json());
app.use(cors());
app.use('/answers',answerRouter);
 app.use('/users',userRouter);
 app.use('/questions',questionRouter);

app.get('/',(req,res)=>{
    res.send('home page')
})


app.listen(8080,async ()=>{
    try{
        await connection;
        console.log('database is connected');
    }
    catch(err)
    {
        console.log(err);
    }
    console.log('server is running at port 8080');
})
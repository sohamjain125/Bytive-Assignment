const mongoose=require('mongoose');
//defining statuses
const statusarr=['pending','in-progress','completed']

//designing schema for tasks
const schemaForTask=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,default:'pending',enum:statusarr}
});

//making model
const Task=mongoose.model('Task',schemaForTask);

module.exports=Task;
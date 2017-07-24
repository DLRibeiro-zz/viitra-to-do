import * as mongoose from "mongoose";
export function taskSchema(){
    var schema = new mongoose.Schema({
        Task_text : String,
        codigo : Number
    });
    return schema;
}

export function startModel(connection){
    var schema = taskSchema();
    var Task = connection.model('Task', schema);
    return Task;
}
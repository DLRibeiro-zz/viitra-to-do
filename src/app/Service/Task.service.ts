
import {Http, Headers} from "@angular/http";
import { Injectable } from "@angular/core";
import { server } from "app/consts";

Injectable()
export class TaskService{

    private allTasks: any[];
    constructor(private http : Http){
        this.allTasks = [];
    }

    getAllTasks(){
        return this.allTasks;
    }
    
    addTask(task){
        const body = {"task-body" : task};
        const headers = new Headers({"Content-Type" : "app/json"});
        this.http.put(server+"/append/", body, {headers :headers}).subscribe(
            data => console.log("Task adicionada"),
            err => console.log("Task não adicionada")
        )
    }

    fetchTasks(page){
        const headers = new Headers({"Content-Type": "app/json"});
        this.http.get(server+"/" + page, {headers : headers}).subscribe(
            data =>{
                let tasks = data.json();
                tasks.forEach(element => {
                    this.allTasks.push(element);
                });
            },
            err => {
                console.log(err);
            }
        )
    }

}

import * as express from "express";
import {Request, Response ,NextFunction, Router} from "express";
export function startRoutes(connection, TaskModel){
    const router: Router = express.Router();

    router.put("/append/", function(req : Request, res: Response, next : NextFunction){
        var newTask = {
            Task_Text : req.body.task_text,
            Codigo : req.body.codigo,
        };
        TaskModel.create(newTask, function(err, data){
            if(err) {
                res.status(406).send("Não foi possivel criar");
            }else{
                res.status(200).send(data);
            }
        })
    });
    router.get("/:page", function(req : Request, res: Response, next : NextFunction){
        var page = req.params.page;
        // TaskModel.find({codigo : {$gte: page*10, $lt: page*10 + 10 },);
    });
    
    return router;

}


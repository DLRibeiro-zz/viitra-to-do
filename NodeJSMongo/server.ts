import * as express from "express";
import * as bodyparser from "body-parser";
import {Request, Response,NextFunction} from "express";
import { startRoutes } from "./router";
import * as mongoose from "mongoose";
import { startModel } from "./schema";

const connection = mongoose.connect('mongodb://localhost/test');

const app = express();
app.use(bodyparser.json());

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
var Task = startModel(connection);
const port = 8080;

app.use(startRoutes(connection,Task));

app.listen(port, ()=> console.log("Server is listening to " + port));


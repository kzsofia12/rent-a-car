import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import { getRouter } from "./routes";
import * as cors from "cors";


const app = express();

//Api kérések engedélyezése
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    res.setHeader(
      'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
    )
    next();
});
app.use(express.json());
 

createConnection().then(async connection => {
 
    app.listen('3000', ()=>{
        console.log("Server listen to port 3000");
    })
      //routes.ts return
    app.use('/api', getRouter());

}).catch(error => console.log(error));

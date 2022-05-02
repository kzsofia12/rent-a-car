import { Router } from "express";
import { CarController } from "./controllers/car.controller";
import { ClientController } from "./controllers/client.controller";
import { RentController } from "./controllers/rent.controller";

export function getRouter(){
    const router = Router();

    //controller példányosítása
    const carController = new CarController();
    const clientController = new ClientController();
    const rentController = new RentController();
    
    //request
    router.post("/cars/create", carController.create);
    router.put('/cars/:id/update', carController.update);
    router.get("/cars", carController.getAll);
    router.get("/cars/:id", carController.getOne);
    
    router.post("/clients/create", clientController.create);
    router.put('/clients/:id/update', clientController.update);
    router.get("/clients", clientController.getAll);
    router.get("/clients/:id", clientController.getOne);
    
    router.post("/rents/create", rentController.create);
    router.put('/rents/:id/update', rentController.update);
    router.get("/rents", rentController.getAll);
    router.get("/rents/:id", rentController.getOne);
    

    return router;
}
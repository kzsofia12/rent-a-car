import { getRepository, Repository } from "typeorm";
import { Controller } from "./controller";
import { Vehicle } from "../entity/Vehicle"

export class CarController extends Controller {
    repository=getRepository(Vehicle);
}
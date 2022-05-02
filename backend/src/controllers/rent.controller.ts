import { getRepository, Repository } from "typeorm";
import { Controller } from "./controller";
import { Rent } from "../entity/Rent";

export class RentController extends Controller {

    repository = getRepository(Rent);

}
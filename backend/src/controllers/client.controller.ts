import { getRepository} from "typeorm";
import { Controller } from "./controller";
import { Client } from "../entity/Client";

export class ClientController extends Controller {
    repository=getRepository(Client);
}
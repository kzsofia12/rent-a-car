import { Repository } from "typeorm";

export abstract class Controller {
    repository: Repository<any>;

    create = async (req, res) => {
        const entity = this.repository.create(req.body);

        try {
            const entityAdd = await this.repository.save(entity);
            res.json(entityAdd);
        } catch (error) {
            console.log(error);
            this.handleError(res, 500, "Create error");
        }
    }

    update =async (req,res) => {
        try {
            const enityUpdate = this.repository.update(req.params.id, req.body);    
            res.json({
                enityUpdate,
                message: "update successful!"
            });

            console.log(req.body);
            console.log(req.params.id);
            
        } catch (error) {
            console.log(error);
            this.handleError(res, 500, "Create error");
        }
    }

    getAll = async (req, res)=>{
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (error) {
            console.error(error);
            this.handleError(res, 500, "get all error");
        }
    }

    getOne = async (req, res) => {
        try {
            const entity = await this.repository.findOne(req.params.id)

            if (!entity) {
                this.handleError(res, 404, "No entity");
                return
            }

            res.json(entity);
        } catch (error) {
            console.error(error);
            this.handleError(res, 500, "get one error");
        }
    }

    handleError = (res, status=500, message="Server error")=>{
        res.status(status).json({message});
    }
}
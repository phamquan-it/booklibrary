import express,{Router} from "express"
import CategoryController from "../controllers/CategoryController";
var categoryRouter:Router = express.Router();

/* GET users listing. */
categoryRouter.get('/all', CategoryController.index);

export  default categoryRouter;

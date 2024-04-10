import express,{Router} from "express"
import HomeController from "../controllers/HomeController";
var indexRouter:Router = express.Router();

/* GET home page. */
indexRouter.get('/',HomeController.index);
indexRouter.get('/about',HomeController.about);

export  default  indexRouter;

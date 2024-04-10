import express,{Router} from "express"
import HomeController from "../controllers/HomeController";
import AdminController from "../controllers/Admin/AdminController";
var adminRouter:Router = express.Router();

/* GET home page. */
adminRouter.get('/',AdminController.index);
adminRouter.get('/about',HomeController.about);

export  default  adminRouter;
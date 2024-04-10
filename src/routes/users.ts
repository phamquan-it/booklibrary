import express,{Router, Request, Response} from "express"
var router:Router = express.Router();

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:any) {
  res.send('respond with a resource');
});

module.exports = router;

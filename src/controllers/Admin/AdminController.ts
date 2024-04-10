import {Request, Response} from "express"
export = {
    index:(req:Request,res:Response)=>{
        return res.render('admin/dashboard', { title: 'Dash board' });
    }
}
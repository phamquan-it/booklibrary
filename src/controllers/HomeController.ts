import {Request, Response} from "express"
export = {
    index:(req:Request,res:Response)=>{
        return res.render('index', { title: 'Home page' });
    },
    about:(req:Request,res:Response)=>{
        return res.render('about', { title: 'About page' });
    }
}
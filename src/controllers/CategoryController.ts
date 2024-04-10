import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { Category } from "../database/entity/Category";

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")

})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})
export = {
    index:async (req:Request, res:Response) => {
        const categories  = await AppDataSource.getRepository(Category).find();
        return res.render("category/index",{"categories":categories});
    },
    create: (req:Request, res:Response)=>{
        res.render("category/create", {"title":"Create"})
    },
    store: async (req:Request, res:Response)=>{
        await AppDataSource.getRepository(Category).insert(new Category(0,req.body.name,req.body.avatar))
        res.redirect("/all")
    }
}
import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Author } from "./entity/Author"
import { Book } from "./entity/Book"
import { PublishCompary } from "./entity/PublishCompany"
import { BookImages } from "./entity/BookImage"
import { Order } from "./entity/Order"
import { Country } from "./entity/Country"
import { BorrowBook } from "./entity/BorrowBook"
import { Chapter } from "./entity/Chapter"
import { BorrowDetail } from "./entity/BorrowDetail"
import { OrderDetail } from "./entity/OrderDetail"
const dbPort:number = parseInt(process.env.DBPORT || '3306',10);
const dbType:string = process.env.DATABASE || "mysql";
console.log(dbPort);

export const AppDataSource = new DataSource({
    type: (dbType == "mysql")?"mysql":"oracle",
    host: process.env.DBHOST,
    port: dbPort,
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    synchronize: true,
    logging: false,
    entities: [
        Country,
        PublishCompary,
        Author,
        User,
        Category, 
        Book, 
        Chapter, 
        BookImages,  
        Order,
        BorrowBook, 
        BorrowDetail, 
        OrderDetail],
    migrations: [],
    subscribers: [],
})

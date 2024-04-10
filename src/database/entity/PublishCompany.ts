import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("publish_company")
export class PublishCompary{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    name!:string
    @OneToMany(()=>Book, (book)=>book.publish_company)
    books!:Book[]
}
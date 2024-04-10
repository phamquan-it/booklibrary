import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("countries")
export class Country{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    name!:string

    @OneToMany(()=>Book, (book)=>book.country)
    books!:  Book[]
}
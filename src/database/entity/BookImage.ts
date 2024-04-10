import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("book_images")
export class BookImages{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    image_link!:string
    
    @ManyToOne(()=>Book,(book=>book.book_images))
    book!:Book
}
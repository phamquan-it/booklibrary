import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("authors")
export class Author{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    name!:string
    @Column()
    avatar!:string
    @Column()
    description!:string

    @OneToMany(() => Book, (book) => book.author)
    books!: Book[]
}
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity("categories")
export class Category{
    constructor(id:number,name:string, avatar:string){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    name!:string
    @Column()
    avatar!:string

    @ManyToMany(() => Book, (book) => book.categories)
    @JoinTable({name:"book_category"})
    books!: Book[]
}
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Book } from "./Book";
import { BorrowDetail } from "./BorrowDetail";

@Entity("borrowbook")
export class  BorrowBook{
    @PrimaryGeneratedColumn()
    id!:number
    @Column()
    start_date!:Date
    @Column()
    end_date!:Date

    @ManyToOne(()=>User, (user)=>user.borrow_books)
    user!:User

    @ManyToMany(()=>Book,(book)=>book.borrow_books)
    @JoinTable({name:"book_borrow"})
    books!:Book[]
    @OneToMany(()=>BorrowDetail,(borrow_detail)=> borrow_detail.borrow_book)
    borrow_details!: BorrowDetail[]
}
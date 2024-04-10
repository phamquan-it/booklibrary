import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { BorrowDetail } from "./BorrowDetail";
import { OrderDetail } from "./OrderDetail";

@Entity("chapters")
export class Chapter{
    @PrimaryGeneratedColumn()
    id!: number 
    @ManyToOne(()=>Book,(book)=>book.chapters)
    book!: Book

    @OneToMany(()=>BorrowDetail,(borrow_detail)=>borrow_detail.chapter)
    borrow_details!: BorrowDetail[]

    @OneToMany(()=>OrderDetail,(order_detail)=>order_detail.chapter)
    order_details!: OrderDetail[]
}
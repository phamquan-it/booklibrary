import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BorrowBook } from "./BorrowBook";
import { Chapter } from "./Chapter";

@Entity("borrow_detail")
export class BorrowDetail{
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(()=>BorrowBook,(borrow)=>borrow.borrow_details)
    borrow_book!: BorrowBook

    @ManyToOne(()=>Chapter,(chapter)=>chapter.borrow_details)
    chapter!: Chapter
}
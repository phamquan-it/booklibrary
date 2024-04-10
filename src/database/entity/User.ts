import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Category } from "./Category"
import { Order } from "./Order"
import { BorrowBook } from "./BorrowBook"

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    age!: number
    @Column({unique:true})
    username!:string
    @Column({length:120})
    password!:string

    @OneToMany(()=>Order,(order)=>order.user)
    orders!:Order[]

    @OneToMany(()=>BorrowBook,(borrow_book)=>borrow_book.user)
    borrow_books!:BorrowBook[]
}

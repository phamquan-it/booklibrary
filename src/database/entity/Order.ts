import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Book } from "./Book";
import { OrderDetail } from "./OrderDetail";

@Entity("orders")
export class Order{
    @PrimaryGeneratedColumn()
    id!:number
    @Column("decimal", { precision: 15, scale: 2 })
    total!:number
    @Column()
    name!:string
    @Column()
    receiveAddress!:string
    @Column()
    receivePhone!:string

    @ManyToOne(()=>User, (user)=>user.orders)
    user!:User

    @ManyToMany(()=>Book,(book)=>book.orders)
    @JoinTable({name:"order_book"})
    books!:Book[]

    @OneToMany(()=>OrderDetail,(order_detail)=> order_detail.order)
    order_details!: OrderDetail[]
}
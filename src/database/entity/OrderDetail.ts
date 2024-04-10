import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chapter } from "./Chapter";
import { Order } from "./Order";

@Entity("order_detail")
export class OrderDetail{
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(()=>Order,(order)=>order.order_details)
    order!: Order

    @ManyToOne(()=>Chapter,(chapter)=>chapter.order_details)
    chapter!: Chapter

    
}
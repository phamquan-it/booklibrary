import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rate")
export  class rate{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    comment!: string
    @Column()
    star!: number
}
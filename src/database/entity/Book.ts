import { Column, Decimal128, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { RelationIdAttribute } from "typeorm/query-builder/relation-id/RelationIdAttribute";
import { Author } from "./Author";
import { PublishCompary } from "./PublishCompany";
import { BookImages } from "./BookImage";
import { Order } from "./Order";
import { Country } from "./Country";
import { BorrowBook } from "./BorrowBook";
import { Chapter } from "./Chapter";

@Entity("books")
export class Book{
    @PrimaryGeneratedColumn()
    id!:number
    @Column({length:120})
    name!:string
    @Column()
    amount!:number
    @Column("decimal", { precision: 15, scale: 2 })
    price!: number;
    @ManyToMany(() => Category, (categories) => categories.books)
    @JoinTable({name:"book_category"})
    categories!: Category[]

    @ManyToOne(() => Author, (author) => author.books)
    author!: Author

    @ManyToOne(() => PublishCompary, (publish_company) => publish_company.books)
    publish_company!: PublishCompary

    @OneToMany(()=>BookImages,(book_images)=> book_images.book)
    book_images!: BookImages[]

    @ManyToMany(()=>Order,(order)=>order.books)
    @JoinTable({name:"order_book"})
    orders!:Order[]

    @ManyToOne(()=>Country,(country)=>country.books)
    country!: Country

    @ManyToMany(()=>BorrowBook, (borrow)=>borrow.books)
    @JoinTable({name:"book_borrow"})    
    borrow_books!: BorrowBook[]

    @OneToMany(()=>Chapter,(chapter)=> chapter.book)
    chapters!: BookImages[]
}
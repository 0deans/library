import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "./Genre";
import { Author } from "./Author";

@Entity({
    name: 'books'
})
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({
        name: 'page_count'
    })
    pageCount: number

    @Column()
    year: number

    @ManyToMany(() => Author)
    @JoinTable({
        name: 'book_authors',
        joinColumn: {
            name: 'book_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'author_id',
            referencedColumnName: 'id'
        }
    })
    authors: Author[]

    @ManyToMany(() => Genre)
    @JoinTable({
        name: 'book_genres',
        joinColumn: {
            name: 'book_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'genre_id',
            referencedColumnName: 'id'
        }
    })
    genres: Genre[]
}
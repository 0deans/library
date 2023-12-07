import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Book } from "./Book";

@Entity({
    name: 'rentals'
})
export class Rental {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @OneToOne(() => Book)
    @JoinColumn({
        name: 'book_id'
    })
    book: Book
    
    @CreateDateColumn({
        name: 'rental_date'
    })
    rentalDate: Date

    @Column({
        name: 'return_date',
        type: 'timestamp'
    })
    returnDate: Date
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm"
import { Rental } from "./Rental"

@Entity({
    name: 'users'
})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: 'first_name'
    })
    firstName: string

    @Column({
        name: 'last_name'
    })
    lastName: string

    @Column()
    email: string

    @Column()
    phone: string

    @OneToMany(() => Rental, (rental) => rental.user)
    rentals: Rental[]

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date
}

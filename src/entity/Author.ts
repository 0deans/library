import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'authors'
})
export class Author {
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
}
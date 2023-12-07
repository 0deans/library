import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Book } from "./entity/Book"
import { Rental } from "./entity/Rental"
import { Author } from "./entity/Author"
import { Genre } from "./entity/Genre"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "112134",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [User, Book, Rental, Author, Genre], // add your Entity here
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})
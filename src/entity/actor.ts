import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne } from "typeorm";
import { Movie } from "./movie";

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @ManyToOne(type=>Movie,movie=>movie.id)
    movieId:Movie;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
    @Column()
    Createdby:number;
    @Column()
    Updatedby: number;

}
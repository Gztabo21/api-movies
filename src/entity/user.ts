import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, BaseEntity } from "typeorm";
import { Movie }from'./movie';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    email:string;
    @Column()
    password:string;

    @OneToMany(type=>Movie,movie => movie.id)
    movieIds:Movie[]
    
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
    @Column()
    Createdby:number;
    @Column()
    Updatedby: number;
}
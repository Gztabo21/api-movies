import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, BaseEntity } from "typeorm";
import { Movie } from "./movie";
@ObjectType()
@Entity()
export class Actor extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number;
    @Field()
    @Column()
    name: string;
    @Field()
    @Column()
    lastname: string;
    @Field(()=>Movie)
    @ManyToOne(type=>Movie,movie=>movie.id)
    movieId:Movie;
    @Field()
    @Column()
    createdAt:Date;
    @Field()
    @Column()
    updatedAt:Date;
    @Field()
    @Column()
    Createdby:number;
    @Field()
    @Column()
    Updatedby: number;

}
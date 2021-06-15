import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, BaseEntity, JoinColumn } from "typeorm";
import { Movie }from'./movie';

@ObjectType()

@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number;
    @Field()
    @Column()
    name: string;
    @Field()
    @Column()
    lastname: string;
    @Field()
    @Column()
    email:string;
    @Field()
    @Column()
    password:string;

    @Field(()=>[Movie])
    @OneToMany(type=>Movie, movie => movie.userId,{eager:true})
    @JoinColumn()
    movieIds:Movie[]

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
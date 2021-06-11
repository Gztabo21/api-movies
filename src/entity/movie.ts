import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, ManyToMany, JoinTable, BaseEntity, Any } from "typeorm";
import {User} from './user';
import {Actor} from'./actor';
import { Category } from './category';
import { Field, ObjectType } from "type-graphql";
@ObjectType()
@Entity()
export class Movie extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id:number;
    @Field()
    @Column()
    name: string;
    @Field()
    @Column()
    start:number;
    @Field(()=>Category)
    @ManyToOne(type=>Category,category => category.id)
    categoryId:Category
    @Field(()=>User)
    @ManyToOne(type=>User,user=>user.id)
    userId:User;

    /* @Field(()=>[Actor]) */
    @ManyToMany(()=>Actor)
    @JoinTable()
    Actorids:Actor[]

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
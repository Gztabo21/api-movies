import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, ManyToMany, JoinTable, BaseEntity, Any, JoinColumn } from "typeorm";
import {User} from './user';
import {Actor} from'./actor';
import { Category } from './category';
import { Field, ObjectType } from "type-graphql";
import { ActorModel } from "../moduls/actor";
import { join } from "path";
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
    @ManyToOne(type=>Category,category => category.id,{cascade:true})
    categoryId:Category

    @Field(()=>User)
    @ManyToOne(type=>User,user=>user.id,{cascade:true})
    @JoinColumn({ name: 'userId' })
    userId:User;

   
    @ManyToMany(()=> Actor)
    @JoinTable()
    Actor:Promise<Actor[]>

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

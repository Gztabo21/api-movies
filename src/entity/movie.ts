import { Entity, PrimaryGeneratedColumn, Column ,OneToOne,OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import {User} from './user';
import {Actor} from'./actor';
import { Category } from './category';
@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;
    
    @Column()
    start:number;
    
    @ManyToOne(type=>Category,category => category.id)
    categoryId:Category

    @ManyToOne(type=>User,user=>user.id)
    userId:User;
    
    @ManyToMany(()=>Actor)
    @JoinTable()
    Actorids:Actor[]

    @Column()
    createdAt:Date;
    
    @Column()
    updatedAt:Date;
    
    @Column()
    Createdby:number;
    
    @Column()
    Updatedby: number;
}
import {Column,PrimaryGeneratedColumn,Entity, BaseEntity, OneToMany} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Movie } from './movie';

@ObjectType()
@Entity()
export class Category extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    name:string;
 
    @Field(()=>[Movie])
    @OneToMany(type=>Movie,movie =>movie.categoryId)
    movieIds:Movie[]
    
    @Field()
    @Column({default: () => 'CURRENT_TIMESTAMP'})
    createdAt:Date;
 
    @Field()
    @Column({default:() => 'CURRENT_TIMESTAMP'})
    updatedAt:Date;
 
    @Field()
    @Column({default:0,nullable:true})
    Createdby:number;
 
    @Field()
    @Column({default:0,nullable:true})
    Updatedby: number;
}
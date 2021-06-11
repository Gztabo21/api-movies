import { Field, InputType, Int } from "type-graphql";
import { MovieModel } from "./movie"

@InputType()
export class UserModel {
    @Field({nullable:true})
    id:number;
    @Field({nullable:true})
    name: string;
    @Field({nullable:true})
    lastname: string;
    @Field({nullable:true})
    email:string;
    @Field({nullable:true})
    password:string;
    
    @Field(type=>[MovieModel],{nullable:true})
    movieIds:MovieModel[];

    @Field({nullable:true})
    createdAt:Date;
    @Field({nullable:true})
    updatedAt:Date;
    @Field({nullable:true})
    Createdby:number;
    @Field({nullable:true})
    Updatedby: number;
}
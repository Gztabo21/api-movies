import { Field, InputType, Int, ObjectType } from "type-graphql";
import { User } from "../entity/user";

@InputType()
export class MovieModel {
    @Field({nullable:true})
    id:number;
    @Field({nullable:true})
    name: string;
    @Field({nullable:true})
    start:number;
    @Field(()=>Int)
    userId:User;
    @Field({nullable:true})
    createdAt:Date;
    @Field({nullable:true})
    updatedAt:Date;
    @Field({nullable:true})
    Createdby:number;
    @Field({nullable:true})
    Updatedby: number;
}
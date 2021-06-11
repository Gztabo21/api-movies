import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class MovieModel {
    @Field({nullable:true})
    id:number;
    @Field({nullable:true})
    name: string;
    @Field({nullable:true})
    start:number;
    @Field({nullable:true})
    createdAt:Date;
    @Field({nullable:true})
    updatedAt:Date;
    @Field({nullable:true})
    Createdby:number;
    @Field({nullable:true})
    Updatedby: number;
}
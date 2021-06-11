import { Field, InputType,Int } from "type-graphql";

@InputType()
export class CategoryModel {
@Field(()=>Int,{nullable:true})    
id:number;
@Field({nullable:true})
name:string;
@Field({nullable:true})
createdAt:Date;
@Field({nullable:true})
updatedAt:Date;
@Field(()=>Int,{nullable:true})
createdby:number;
@Field(()=>Int,{nullable:true})
updatedby:number;
}
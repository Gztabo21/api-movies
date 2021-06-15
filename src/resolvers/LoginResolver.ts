import { Arg, Args, Ctx, Mutation, Resolver } from "type-graphql";
import { ContextParamMetadata } from "type-graphql/dist/metadata/definitions";
import { User } from '../entity/user';
@Resolver()
export class LoginResolver{
    @Mutation(()=>Boolean)
    async login(@Arg("email")email:string,@Arg("password")pasword:string,@Ctx() ctx: ContextParamMetadata){
        const users = await User.find()
        let user = users.find(r=>r.email)
    
        return true
    }
}
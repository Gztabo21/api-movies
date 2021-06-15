import { Arg, Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { ContextParamMetadata } from "type-graphql/dist/metadata/definitions";
import { User } from '../entity/user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { throwError } from "rxjs";
@Resolver()
export class LoginResolver{
    @Mutation(()=>String)
    @Authorized()
    async login(@Arg("email")email:string,@Arg("password")pasword:string,@Ctx() ctx: ContextParamMetadata){
        const messageError = 'User o password incorrect'
        const users = await User.find({email})
        let token:string =""
        if(!users) throw new Error(messageError)
        const isEqual = await bcrypt.compare(pasword,users[0].password)

        if(!isEqual){
            throw new Error(messageError)
        } else{
            token = jwt.sign({auth:true},'lamercanciadelatienda',{expiresIn:'1h'})
        }
        return token
    }
}
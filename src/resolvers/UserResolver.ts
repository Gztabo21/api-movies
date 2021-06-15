 
import { query } from 'express';
import {Query, Resolver, Mutation,Arg, Int, Ctx, Authorized} from 'type-graphql'
import { ContextParamMetadata } from 'type-graphql/dist/metadata/definitions';
import { User } from '../entity/user';
import { UserModel } from '../moduls/users';
import * as bcrypt from 'bcrypt'

@Resolver()
export class UserResolver {
  // add
  @Mutation(()=> Boolean)
  async createUser(@Arg("user")user:UserModel){
    user.password = await bcrypt.hash(user.password,12)
    console.log(user)
    User.create(user)
    
    return true
  }
  // getAll
  @Authorized()
  @Query(() => [User])
  users(@Arg("offset",()=> Int)offset?:number, @Arg("limit",()=> Int)limit?:number) {
    return User.find()
  }
  
  @Query(()=>User)
  user(@Arg("id",()=> Int)id:number){
      return User.findOne(id) 
  }
  // delete
  @Mutation(()=>Boolean)
  async deleteUser(@Arg("id")id:number){
      await User.delete(id)
      return true
  }
  // update
  @Mutation(()=>Boolean)
  async updateUser(@Arg("id")id:number,@Arg("user")user:UserModel){
    await User.update({id},user)
    return true
  }
}
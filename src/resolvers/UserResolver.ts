 
import { query } from 'express';
import {Query, Resolver, Mutation,Arg, Int} from 'type-graphql'
import { User } from '../entity/user';
import { UserModel } from '../moduls/users';

@Resolver()
export class UserResolver {
  // add
  @Mutation(()=> Boolean)
  async createUser(@Arg("user")user:UserModel){
    User.create(user)
    return true
  }
  // getAll
  @Query(() => [User])
  users() {
    return User.find({relations:['movieIds']})
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
 
import {Query, Resolver, Mutation,Arg} from 'type-graphql'
import { Actor } from '../entity/Actor';
import { ActorModel } from '../moduls/actor';

@Resolver()
export class ActorResolver {
  // add
  @Mutation(()=> Boolean)
  async createActor(@Arg("actor")actor:ActorModel){
    await Actor.insert(actor)
    return true
  }

  // getAll
  @Query(() => [Actor])
  async actors() {
    return await Actor.find()
  }
  @Mutation(()=>Actor)
  async actor(@Arg("id")id:number){
      return await Actor.findOne(id) 
  }
  // delete
  @Mutation(()=>Boolean)
  async deleteActor(@Arg("id")id:number){
      await Actor.delete(id)
      return true
  }
  // update
  @Mutation(()=>Boolean)
  async updateActor(@Arg("id")id:number,@Arg("actor")actor:ActorModel){
    await Actor.update({id},actor)
    return true

  }
}
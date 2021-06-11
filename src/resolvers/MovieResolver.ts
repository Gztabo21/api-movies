 
import {Query, Resolver, Mutation,Arg} from 'type-graphql'
import { Movie } from '../entity/movie';
import { MovieModel } from '../moduls/movie';

@Resolver()
export class MovieResolver {
  // add
  @Mutation(()=> Boolean)
  async createMovies(@Arg("movie")movie:MovieModel){
    await Movie.insert(movie)
    return true
  }

  // getAll
  @Query(() => [Movie])
  async movies() {
    return await Movie.find()
  }
  @Mutation(()=>Movie)
  async movie(@Arg("id")id:number){
      return await Movie.findOne(id) 
  }
  // delete
  @Mutation(()=>Boolean)
  async deleteMovie(@Arg("id")id:number){
      await Movie.delete(id)
      return true
  }
  // update
  @Mutation(()=>Boolean)
  async updateMovie(@Arg("id")id:number,@Arg("movie")movie:MovieModel){
    await Movie.update({id},movie)
    return true

  }
}
 
import {Query, Resolver, Mutation,Arg} from 'type-graphql'
import { Category } from '../entity/category';
import { CategoryModel } from '../moduls/category';

@Resolver()
export class CategoryResolver {
  // add
  @Mutation(()=> Boolean)
  async createCategory(@Arg("category")category:CategoryModel){
    await Category.insert(category)
    return true
  }

  // getAll
  @Query(() => [Category])
  categories() {
    return Category.find()
  }
  @Mutation(()=>Category)
  category(@Arg("id")id:number){
      return Category.findOne(id) 
  }
  // delete
  @Mutation(()=>Boolean)
  async deleteCategory(@Arg("id")id:number){
      await Category.delete(id)
      return true
  }
  // update
  @Mutation(()=>Boolean)
  async updateCategory(@Arg("id")id:number,@Arg("category")category:CategoryModel){
    await Category.update({id},category)
    return true

  }
}
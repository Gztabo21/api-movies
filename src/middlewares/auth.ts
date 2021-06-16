import { AuthChecker, MiddlewareFn } from "type-graphql";
import * as jwt from "jsonwebtoken"


export const customAuthChecker: AuthChecker<any> = (
    { root, args, context, info },
    roles,
  ) => {
    const {authorization}= context
    let res = authorization !== undefined ?  true: false
    if(res){
      jwt.verify(authorization,'lamercanciadelatienda',(error,decoded)=>{
        console.log(decoded)
      /*   if(!decoded){
          console.log()
         }
      else{
          return action(req,res).then(()=>next).catch(err=>next(err))
      } */
      })
    }
      // verificar el toquen 
    console.log(context)
    return res; // or false if access denied
  };
  export const CompetitorInterceptor: MiddlewareFn<any> = async ({context,info}, next) => {
    const {req}= context
    console.log(req)
   
    return next();
  };
  // handler error 
  export const ErrorInterceptor: MiddlewareFn<any> = async ({ context, info }, next) => {
    try {
      console.log(context)
      return await next();
    } catch (err) {
      // write error to file log
      console.log(err, context, info);
  
      /* // hide errors from db like printing sql query
      if (someCondition(err)) {
        throw new Error("Unknown error occurred!");
      }
   */
      // rethrow the error
      throw err;
    }
  };
  export const LogAccess: MiddlewareFn<any> = ({ context, info }, next) => {
    const username: string = context.email || "guest";
    console.log(`Logging access: ${username} -> ${info.parentType.name}.${info.fieldName}`);
    return next();
  };
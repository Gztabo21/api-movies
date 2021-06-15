import * as express from "express";
import * as jwt from "jsonwebtoken"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from './resolvers/CatergoryResolver';
import { UserResolver } from './resolvers/UserResolver';
import { MovieResolver } from './resolvers/movieResolver';
import { ActorResolver } from './resolvers/ActorResolver';
import { customAuthChecker } from './auth/auth';
import { LoginResolver } from "./resolvers/LoginResolver";

const path:string = "/api/v1/"
 async function startServer():Promise<any> {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        CategoryResolver,
        UserResolver, 
        MovieResolver,
        ActorResolver,
        LoginResolver
      ],
      validate: false,
      authChecker: customAuthChecker
    }),
    context : ({req})=>{
      const context = {
        req,
        user: req.user
      }
      return context
    }
    
  });
 /*  app.use(path,jwt({secret: "TypeGraphQL",
  credentialsRequired: false})) */

  server.applyMiddleware({ app, path});

  return app;
}
export { startServer }
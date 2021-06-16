import * as express from "express";
import * as jwt from "jsonwebtoken"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from './resolvers/CatergoryResolver';
import { UserResolver } from './resolvers/UserResolver';
import { MovieResolver } from './resolvers/movieResolver';
import { ActorResolver } from './resolvers/ActorResolver';
import { customAuthChecker,CompetitorInterceptor, ErrorInterceptor } from './middlewares/auth';
import { LoginResolver } from "./resolvers/LoginResolver";
import * as dotenv from 'dotenv';

dotenv.config({path:'../.env'});

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
      globalMiddlewares:[ErrorInterceptor],
      validate: false,
      authChecker: customAuthChecker
    }),

    context: ({req}) => ({'authorization':req.headers.authorization})
     
    
  });
 /*  app.use(path,jwt({secret: "TypeGraphQL",
  credentialsRequired: false})) */

  server.applyMiddleware({ app, path});

  return app;
}
export { startServer }
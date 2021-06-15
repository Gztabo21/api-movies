import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from './resolvers/CatergoryResolver';
import { UserResolver } from './resolvers/UserResolver';
import { MovieResolver } from './resolvers/movieResolver';
import { ActorResolver } from './resolvers/ActorResolver';
import { customAuthChecker } from './auth/auth';
 async function startServer():Promise<any> {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CategoryResolver,UserResolver, MovieResolver,ActorResolver],
      validate: false,
      authChecker: customAuthChecker
    }),
    
  });

  server.applyMiddleware({ app, path: "/api/v1/"});

  return app;
}
export { startServer }
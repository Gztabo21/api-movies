import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from './resolvers/CatergoryResolver';


 async function startServer():Promise<any> {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CategoryResolver],
      validate: false
    }),
  });

  server.applyMiddleware({ app, path: "/api/v1/" });

  return app;
}
export { startServer }
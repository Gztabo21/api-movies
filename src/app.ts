import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/Ping";
// import { ProductResolver } from "./resolvers/ProductResolver";

 async function startServer():Promise<any> {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver],
      validate: false
    }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
export { startServer }
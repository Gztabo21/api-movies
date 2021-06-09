import "reflect-metadata";
import { connect }  from "./config/typeorm";
import { startServer } from "./app";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App

const main = async () =>{
  connect();
  const app = await startServer();
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}


main();




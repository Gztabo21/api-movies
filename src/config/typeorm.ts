import {createConnection} from 'typeorm'
import * as path from 'path';


 async function connect() {
  await createConnection({
    type:"mongodb",
    host: "mongodb+srv:%2F%2FGz_202104:%3C124578%2F%3E@cluster0.cc2rf.mongodb.net%2FmyFirstDatabase?retryWrites=true&w=majority",
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
  });
  console.log('Database is Connected')
}
export  {connect}

import {createConnection} from 'typeorm'
import * as path from 'path';


 async function connect() {
  await createConnection({
    type:"mongodb",
    host: "mongodb+srv://Gz_202104:124578@cluster0.cc2rf.mongodb.net/movies?retryWrites=true&w=majority",
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

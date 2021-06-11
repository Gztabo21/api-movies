import {createConnection} from 'typeorm'
import * as path from 'path';


 async function connect() {
  await createConnection({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "movies",
    "synchronize": true,
    "logging": false,
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],

  });
  console.log('Database is Connected')
}
export  {connect}

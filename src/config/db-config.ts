const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Gz_202104:<password>@cluster0.cc2rf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
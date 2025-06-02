import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
const port = 5000

let server;


const uri = "mongodb+srv://mongodb:nrmXqzUhIs0qRMdq@cluster0.47f5u.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



const bootstrap = async () =>{
  await client.connect();
  console.log("connected to Mongodb")
  


    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

bootstrap()
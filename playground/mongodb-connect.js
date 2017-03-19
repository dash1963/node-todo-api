//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server!");
        // db.collection("Todos").insertOne({
        //   text: "something to do",
        //   completed: false
        // }, (error, result) => {
        //   if (error) {
        //     return console.log("Unable to insert todo", error);
        //   }
        //   console.log(JSON.stringify(result.ops, undefined,2));
        // })

        // db.collection("Users").insertOne({
        //   name: "Sergio Rueda-Montes",
        //   age: 54,
        //   location: "Edgebrook in chicago, illinois"
        // }, (error, result) => {
        //   if (error) {
        //     return console.log("Unable to insert user", error);
        //   }
        //   //console.log(JSON.stringify(result.ops[0].id, undefined,2));
        //   console.log(result.ops[0]._id);
        //   console.log(result.ops[0]._id.getTimestamp());
        //
        // })

  db.close();
});

//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server!");
  db.collection("Todos").find().toArray().then((docs) => {
    console.log("Todos: Query all ");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch todos", error);
  });

  console.log("Connected to MongoDB server!");
  db.collection("Todos").find({completed: false}).toArray().then((docs) => {
    console.log("Todos: Query all pending!! ");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch todos", error);
  });

// Query completed Todos

  db.collection("Todos").find({completed: true}).toArray().then((docs) => {
    console.log("Todos: Query all completed Todos! ");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch todos", error);
  });



  db.collection("Todos").find({_id: new ObjectID("58cd909e2a1e4c3e4214c84b")}).toArray().then((docs) => {
    console.log("Todos: Query by _id!");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch todos", error);
  });

  db.collection("Todos").find().count().then((count) => {
    console.log("Todos: do a count!");
    console.log(`Todos count: ${count}`)
  }, (error) => {
    console.log("Unable to fetch todos", error);
  });


  db.collection("Users").find({name : "Sergio Rueda-Montes"}).toArray().then((docs) => {
    console.log("Users: Query by name!");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch users", error);
  });

db.collection("Users").find({name : "Sergio Rueda-Montes"}).count().then((count) => {
  console.log("Users: do a count for all Sergios!");
  console.log(`Users count: ${count}`)
}, (error) => {
  console.log("Unable to fetch users", error);
});


  db.close();
});

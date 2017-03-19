//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongoDB server");
}
        // // Delete many
        // db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
        //   console.log(result);
        // })
        //
        // // Delete one
        // db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => {
        //   console.log(result);
        // })
        // // findOneAndDelete (this returns the record deleted)
        // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
        //   console.log(result);
        // })

//"58cd95cdb4316e4036392eb7"
db.collection("Users")
  .findOneAndDelete({_id: new ObjectID("58cd95cdb4316e4036392eb7")})
  .then((result) => {
        console.log(result);
})

db.collection("Users")
.deleteMany({name: "Sergio Rueda-Montes"})
.then((result) => {
  console.log(result);
})


  db.close();
});

//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) {
    return console.log("Unable to connect to MongoDB server");
  }

console.log("Connected tp MongoDB Server");

      // db.collection("Todos").findOneAndUpdate({
      //   _id: new ObjectID("58cdd7a0f08c621792b10b9d")
      // }, {
      //      $set: { completed: true}
      //    },
      //     { returnOriginal: false}
      // ).then((result) => {
      //      console.log(result);
      //    });
      //
      //   db.close();
      // });



db.collection("Users")
  .findOneAndUpdate({
                    _id : new ObjectID("58cd9205e2bfa73ee5d97606")
                   },
                   { 
                     $set: { name: "Ana Topete"},
                     $inc: { age: 10 }
                   } ,
                   { returnOriginal: false})
  .then((result) => {
     console.log(result);
});

db.close();
});

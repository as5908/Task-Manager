// CRUD
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id, id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    //#region Comment
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Vikram",
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Andrew",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     error ? console.log("Unable to insert users") : console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Task1",
    //       completed: true,
    //     },
    //     {
    //       description: "Task2",
    //       completed: false,
    //     },
    //     {
    //       description: "Task3",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     error ? console.log("Unable to insert users") : console.log(result.ops);
    //   }
    // );
    //#endregion

    // Query
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f3809517202e52eb87f49bd") },
    //   (error, user) => {
    //     error ? console.log("Unable to fetch") : console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({
    //     name: "Abhinav",
    //   })
    //   .count((error, users) =>
    //     error ? console.log("Unable to fetch") : console.log(users)
    //   );

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5f38068188218a32741c46db") },
    //   (error, task) => {
    //     error ? console.log("Unable to fetch") : console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, task) => {
    //     error ? console.log("Unable to fetch") : console.log(task);
    //   });

    //   db.collection("users")
    //     .updateOne(
    //       {
    //         _id: new ObjectID("5f380473a4b03b03dcbf191c"),
    //       },
    //       {
    //         $inc: {
    //           age: 1,
    //         },
    //       }
    //     )
    //     .then((result) => {
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       console.log(Error);
    //     });
    // }
    // db.collection("tasks")
    //   .updateMany(
    //     {},
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteOne({ age: 27 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("tasks")
      .deleteOne({ description: "Task1" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

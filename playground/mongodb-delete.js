'use strict';

//const MongoClient = require('mongodb').MongoClient;
// this is the same as in the line above with ES6 object de-structuring notation
// const {MongoClient} = require('mongodb');
// pulling mor than on property aut of the Object
const {MongoClient, ObjectID} = require('mongodb');

const mongodbConfig = {
  url: 'mongodb://localhost',
  port: '27017',
  database: 'TodoApp'
};

MongoClient.connect(`${mongodbConfig.url}:${mongodbConfig.port}/${mongodbConfig.database}`, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many documents
  // db.collection('Todos').deleteMany({text: 'Eat something'}).then((result) => {
  //   console.log(result);
  // });

  // delete one document
  // db.collection('Todos').deleteOne({text: 'Eat something'}).then((result) => {
  //   console.log(result);
  // });

  // find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // Exercise for collection Users
  //
  // deleteMany with name: 'Alex'
  // db.collection('Users').deleteMany({name: 'Alex'}).then((result) => {
  //   console.log(result);
  // });

  // delete one user by _id
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58d0d07959f50815b392d636')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.close();
});

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

  // console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do...',
  //   completed: false
  //
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   // result.ops: all documents that are inserted
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // db.collection('Users').insertOne({
  //   name: 'Alex',
  //   age: 53,
  //   location: 'Berlin'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   // result.ops: all documents that are inserted
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //   // Show document creation timestamp from the _id ObjectId
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});

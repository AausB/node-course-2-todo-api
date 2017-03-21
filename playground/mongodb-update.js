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

  // find one and update
  // works only with update operators
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58d0f3e89cebd27fceb4f954')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false // rreturn value is the updated document
  // }).then((result) => {
  //   console.log(result);
  // });

  // Update a user name in Users and increment age by 1
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d0f8699cebd27fceb4fcbb')
  }, {
    $set: {
      name: 'Alex'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false // rreturn value is the updated document
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});

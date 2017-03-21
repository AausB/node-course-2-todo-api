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

  // // get all documents from db 'Todos': .find()
  // // create an array out of the query result: toArray()
  // // this returns a Promis: .then() with (err) => etc...
  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // // get all documents from db 'Todos' where: .find({completed: false})
  // // create an array out of the query result: toArray()
  // // this returns a Promis: .then() with (err) => etc...
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // // get all documents from db 'Todos' with a specific ObjectID:
  // // .find({_id: new ObjectID('58d0c024b802310ef1f92b85')
  // // create an array out of the query result: toArray()
  // // this returns a Promis: .then() with (err) => etc...
  // db.collection('Todos').find({_id: new ObjectID('58d0d4559cebd27fceb4eb3f')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // // get all documents from db 'Todos': .find()
  // // count all results: count()
  // // this returns a Promis: .then() with (err) => etc...
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count todos', err);
  // });

  // get all documents from db 'Users' where: .find({name: 'Alex'})
  // create an array out of the query result: toArray()
  // this returns a Promis: .then() with (err) => etc...
  db.collection('Users').find({name: 'Alex'}).toArray().then((users) => {
    console.log('Users:');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to count Users', err);
  });
  // get all documents from db 'Users' where: .find({name: 'Alex'})
  // create an array out of the query result: toArray()
  // this returns a Promis: .then() with (err) => etc...
  db.collection('Users').find({name: 'Jan'}).toArray().then((users) => {
    console.log('Users:');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to count Users', err);
  });


  //db.close();
});

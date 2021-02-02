const mongoose = require('mongoose')

const connectionStr = 'mongodb://127.0.0.1:27017/slamazon';
const faker = require("faker")

mongoose.connect( connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then( () => console.log('connected to db '))
  .catch( (err) => console.log( 'failed to connect to db', err ) );
  
  mongoose.connection.on( 'disconnected', (err) => console.log(err) );
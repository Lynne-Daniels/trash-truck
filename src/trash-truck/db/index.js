var mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb connected');
});

let insertUser = (firstName, lastName, address) => {
  let newUser = {
    firstName: firstName,
    lastName: lastName,
    streetAddress: address,
  }
  User.create(newUser, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {

        }
    });
}

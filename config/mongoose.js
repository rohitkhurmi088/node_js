//_______ Mongoose Config :: STEP1 :: _____
/*STEPS:
1)require mongoose library
2)connect to db
3)acquire connection
4)if error -db.on()
5)if running -db.once()
->import db in index.js
*/

//require library
const mongoose = require('mongoose');

//connect to database:social_database in Robo3T
mongoose.connect('mongodb://localhost/node_database', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
//mongoose.set('useCreateIndex', true);

//acquire connection
const db = mongoose.connection;

//If error -db.on()
db.on('error', console.error.bind(console, 'error message'));

//if running -db.once()
db.once('open', function () {
	console.log('Sucessfully Connected to database');
});

//export database(db)
module.exports = db;
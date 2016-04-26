var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var footModel = new Schema({
	nom: { type: String },
	photo: { type: String },
	club: { type: String },
	age: {type: String }

});

module.exports = mongoose.model('Foot', footModel);

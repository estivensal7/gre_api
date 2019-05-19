// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const quizSchema = new Schema({
	name: { type: String, required: true }
});

//Setting schema to variable
const Quiz = mongoose.model("Quiz", quizSchema);

//Exporting
module.exports = Quiz;

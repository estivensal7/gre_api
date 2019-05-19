// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const wordSchema = new Schema({
	word: { type: String, required: true },
	definition: { type: String, required: true },
	quizId: { type: String, required: true },
	questionNumber: { type: String, required: true },
	randomDefOne: { type: String, required: true },
	randomDefTwo: { type: String, required: true },
	randomDefThree: { type: String, required: true }
});

//Setting schema to variable
const Word = mongoose.model("Word", wordSchema);

//Exporting
module.exports = Word;

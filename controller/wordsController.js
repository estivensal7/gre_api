//Importing models
const db = require("../models");

// Defining methods for the WordsController
module.exports = {
	findAll: function(req, res) {
		db.Word.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findById: function(req, res) {
		db.Word.find({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findByQuiz: function(req, res) {
		db.Word.find({ quizId: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	create: function(req, res) {
		db.Word.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		db.Word.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	remove: function(req, res) {
		db.Word.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	}
};

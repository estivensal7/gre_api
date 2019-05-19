//Importing models
const db = require("../models");

// Defining methods for the itemsController
module.exports = {
	findAll: function(req, res) {
		db.Quiz.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findById: function(req, res) {
		db.Quiz.find({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	create: function(req, res) {
		db.Quiz.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		db.Quiz.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	remove: function(req, res) {
		db.Quiz.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	}
};

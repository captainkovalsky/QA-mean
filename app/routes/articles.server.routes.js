'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	questions = require('../../app/controllers/questions.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/questions')
		.get(questions.list)
		.post(users.requiresLogin, questions.create);

	app.route('/questions/:questionId')
		.get(questions.read)
		.put(users.requiresLogin, questions.update)
		.delete(users.requiresLogin, questions.delete);

	// Finish by binding the article middleware
	app.param('questionId', questions.questionByID);
};
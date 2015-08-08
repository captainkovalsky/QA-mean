'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.json({
		user: req.user || null 
	});
};
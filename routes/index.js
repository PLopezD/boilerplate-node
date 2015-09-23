var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var vm = {
		test: 'lol',
	};
	res.render('index', vm);
});



module.exports = router;
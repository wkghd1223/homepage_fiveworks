var express = require('express');
var router = express.Router();

// item
const data = require('../config/obj');

/* GET home page. */
router.get('/', function (req, res, next) {
	var category = req.query.category;
	var obj = [];
	// category로 데이터 베이스에서 데이터 가져오기
	if (category == "style") {
		data.forEach(function (item, i) {
			if (item.style)
				obj.push(item);
		});
	}
	if (category == "best") {
		data.forEach(function (item, i) {
			if (item.best)
				obj.push(item);
		});
	}
	if (category == "brand") {
		data.forEach(function (item, i) {
			if (item.brand)
				obj.push(item);
		});
	}
	res.render('category', {
		title: category,
		data: obj
	});
});


module.exports = router;
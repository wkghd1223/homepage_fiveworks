var express = require('express');
var router = express.Router();

const data = require('../config/obj');

/* GET search page. */

router.get('/', function (req, res, next) {

    var search = req.query.query;
    var searched = new RegExp(search, "ig");
    var obj = [];

    data.forEach(function (item, i) {
        if (item.name.match(searched) || item.brand.match(searched))
            obj.push(item);
    });
    if (obj.length == 0)
        search += "에 대한 검색결과가 없습니다.";
    else
        search += " 검색 결과";
    res.render('search', {
        title: search,
        data: obj
    });
});


module.exports = router;
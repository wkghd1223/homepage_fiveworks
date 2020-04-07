var express = require('express');
var fs = require('fs');
var conn = require('../config/db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var contents = [];
  var workpieces = [];
  var testimonials = [];
  var people = [];
  var services = [];
  var ip = require('../config/ip')();

  console.log(ip);
  var sql = 'select * from contents order by orders asc';
  conn.query(sql, (err, conte) => {
    if (err) console.log(err);
    conte = JSON.parse(JSON.stringify(conte))
    contents = conte;

    sql = `select * from workpieces`;
    conn.query(sql, (err, work) => {
      if (err) console.log(err);
      work = JSON.parse(JSON.stringify(work))
      workpieces = work;

      sql = `select * from testimonials`;
      conn.query(sql, (err, test) => {
        if (err) console.log(err);
        test = JSON.parse(JSON.stringify(test))
        testimonials = test;

        sql = `select * from people`;
        conn.query(sql, (err, peop) => {
          if (err) console.log(err);
          peop = JSON.parse(JSON.stringify(peop))
          people = peop;

          sql = `select * from services`;
          conn.query(sql, (err, serv) => {
            if (err) console.log(err);
            serv = JSON.parse(JSON.stringify(serv))
            services = serv;
            // 아이콘 정보
            // https://www.materialiconfinder.com/

            fiveworksDesc = `FiveWorks specializes in providing <u><b>'artificial intelligence'</b></u> and <u><b>'big data solutions'</b></u> and <u><b>'system integration'</b></u> businesses based on five visions called <b><strong>'LABSS'</strong></b>.
            <br>
            <b><strong>'LABSS'</strong></b> refers to the application of <b>'Artificial Intelligence'</b>, <b>'Big Data'</b> and <b>'System Integration'</b> businesses to provide an efficient life to customers.
            <br>
            We are applying <b><u>'LPA Service'</u></b> and <u><b>'EL Service'</u></b> to meet the needs of our customers, and we want to become a company that delivers the best value added to our customers and provides the best service.;`;

            res.render('index', {
              ip: '5works.co.kr',
              title: '5works',
              tel: '02 3661 0813',
              fax: '02 3664 0813',
              email: 'kst@5works.co.kr',
              address: "413~414ho, 76, Magokjungang-ro, Gangseo-gu, Seoul, Republic of Korea  76",
              backgroundImg: '5works.jpg',
              aboutImg: '5worksSitemap.png',
              history: 'history.png',
              aboutFiveworks: fiveworksDesc,
              contents: contents,
              workpieces: workpieces,
              services: services,
              testimonials: testimonials,
              people: people,
            });
          });
        });
      });
    });
  });
});

router.get('/ping', (req, res) => {
  res.send('s');
});

module.exports = router;
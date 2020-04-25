var express = require('express');
var fs = require('fs');
var conn = require('../config/db');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var workpieces = [];
  var testimonials = [];
  var people = [];
  var services = [];

  var sql = `select * from contents`;
  // var sql =`update workpieces set img='TUF.png' where name='Construct Big Data System'`;

  conn.query(sql, (err, contents) => {
    if (err) console.log(err);
    contents = JSON.parse(JSON.stringify(contents));


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
            
            res.render('edit', {
              contents: contents,
              workpieces: workpieces,
              services: services,
              testimonials: testimonials,
              people: people,
              title: '5works',
              tel: '02 3661 0813',
              fax: '02 3664 0813',
              email: 'kst@5works.co.kr',
              address: "413~414ho, 76, Magokjungang-ro, Gangseo-gu, Seoul, Republic of Korea  76",

            });

          });
        });
      });
    });
  });
});
// router.get('/contents', function (req, res, next) {
//   var sql =`insert into contents values (
//     '${res.query.content}',
//     '${res.query.content_desc}',
//     '${res.query.sideeffect1}',
//     '${res.query.sideeffect2}',
//     '${res.query.sideeffect3}'
//   )`;
//   console.log(sql);
//   conn.query(sql,(err, rows)=>{
//     res.redirect('http://5works.co.kr/users')
//   });
// });
router.post('/contents', function (req, res, next) {
  var sql =`update contents set content_desc= "${req.body.content_desc}",sideeffect1= '${req.body.sideeffect1}',sideeffect2= '${req.body.sideeffect2}',sideeffect3= '${req.body.sideeffect3}' where content='${req.query.content}'`;
  console.log(sql);
  conn.query(sql,(err, rows)=>{
    res.redirect('http://5works.co.kr/users')
  });

});
router.post('/workpieces', function (req, res, next) {
  var sql =`update workpieces set name_desc="${req.body.name_desc}" where name='${req.query.name}'`;
  console.log(sql);
  conn.query(sql,(err, rows)=>{
    res.redirect('http://5works.co.kr/users')
  });
});
router.post('/testimonials', function (req, res, next) {
  var sql =`update testimonials set whatHeSays="${req.body.whatHeSays}", person='${req.body.person}' where name='${req.query.name}'`;
  console.log(sql);
  conn.query(sql,(err, rows)=>{
    res.redirect('http://5works.co.kr/users')
  }); 
});

router.post('/people', function (req, res, next) {
  var sql =`update people set 
  position='${req.body.position}'  
  people_desc='${req.body.people_desc}' 
  facebook='${req.body.facebook}' 
  instagram='${req.body.instagram}' 
  where name='${req.query.name}'`;
  console.log(sql);
  conn.query(sql,(err, rows)=>{
    res.redirect('http://5works.co.kr/users')
  });
});
router.post('/services', function (req, res, next) {
  var sql =`update services set service_desc="${req.body.service_desc}" where title='${req.query.title}'`;
  console.log(sql);
  conn.query(sql,(err, rows)=>{
    res.redirect('http://5works.co.kr/users')
  });
});
module.exports = router;
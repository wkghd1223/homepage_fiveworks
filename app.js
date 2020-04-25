var createError = require('http-errors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var searchRouter = require('./routes/search');
var bodyParser = require('body-parser');
var app = require('./config/express')();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/search', searchRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.render('404error',{
    title: '5works',
    tel: '02 3661 0813',
    fax: '02 3664 0813',
    email: 'kst@5works.co.kr',
    address: "413~414ho, 76, Magokjungang-ro, Gangseo-gu, Seoul, Republic of Korea  76",

  })
  // next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// listen
app.listen(80, function () {
  console.log('connect 80 port');
});
//module.exports = app;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extende: false
// }));
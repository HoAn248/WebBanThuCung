// "node ./bin/www"
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users.routes');
var homeRouter = require('./routes/home.routes')
var adminRouter = require('./routes/admin.routes')
var cartRouter = require('./routes/cart.routes')
var accountsRouter = require('./routes/accounts.routes')
var commentsRouter = require('./routes/comments.routes')
var aboutRouter = require('./routes/about.routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/',homeRouter);
app.use('/',adminRouter)
app.use('/cart',cartRouter)
app.use('/account',accountsRouter)
app.use('/comment',commentsRouter)
app.use('/about',aboutRouter)

app.use('/logout',function (req, res){
    res.clearCookie('userId')
    res.redirect('/users/login')
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
// module.exports = app;

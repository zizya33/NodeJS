var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'data'
});

connection.connect();

  function getData(res)
  {
    result = " ";
    var queryString = 'SELECT * FROM user ORDER BY name DESC';
    connection.query(queryString, function(err, rows, fields) {
      if (err) throw err;
      for (var i in rows) {
        result+=rows[i].login + rows[i].password;
      }
           console.log(result);
      res.write(result);
      res.end();
    });
    return result;
}


//app.use('/', index);
//app.use('/users', users);
app.get('/index1.html', function(req, res) {
  res.sendfile(path.join('views/html/index1.html'));
});
app.get('/index2.html', function(req, res) {
  res.sendfile(path.join('views/html/index2.html'));
});
app.get('/index3.html', function(req, res) {
  res.sendfile(path.join('views/html/index3.html'));
});
app.get('/index4.html', function(req, res) {
  res.sendfile(path.join('views/html/index4.html'));
});
app.get('/index.html', function(req, res) {
  res.sendfile(path.join('views/html/index.html'));
});
app.get('/js/template.js', function(req, res) {
  res.sendfile(path.join('views/js/template.js'));
});
app.get('/js/mustache.min.js', function(req, res) {
  res.sendfile(path.join('views/js/mustache.min.js'));
});
app.get('/js/require.js', function(req, res) {
  res.sendfile(path.join('views/js/require.js'));
});
app.get('/js/validity.js', function(req, res) {
  res.sendfile(path.join('views/js/validity.js'));
});
app.get('/js/ajax.js', function(req, res) {
  res.sendfile(path.join('views/js/ajax.js'));
});
app.get('/js/jquery.js', function(req, res) {
  res.sendfile(path.join('views/js/jquery.js'));
});
app.get('/js/config.js', function(req, res) {
  res.sendfile(path.join('views/js/config.js'));
});
app.get('/js/main.js', function(req, res) {
  res.sendfile(path.join('views/js/main.js'));
});
app.get('/js/list.js', function(req, res) {
  res.sendfile(path.join('views/js/list.js'));
});
app.get('/json/works.json', function(req, res) {
  res.sendfile(path.join('views/json/works.json'));
});
app.get('/css/style.css', function(req, res) {
  res.sendfile(path.join('views/css/style.css'));
});
app.get('/css/style1.css', function(req, res) {
  res.sendfile(path.join('views/css/style1.css'));
});
app.get('/css/style2.css', function(req, res) {
  res.sendfile(path.join('views/css/style2.css'));
});
app.get('/css/style3.css', function(req, res) {
  res.sendfile(path.join('views/css/style3.css'));
});
app.get('/IMG/background.png', function(req, res) {
  res.sendfile(path.join('views/IMG/background.png'));
});
app.get('/FONTS/aalbionicexp_bold.ttf', function(req, res) {
  res.sendfile(path.join('views/FONTS/aalbionicexp_bold.ttf'));
});
app.get('/IMG/1.jpg', function(req, res) {
  res.sendfile(path.join('views/IMG/1.jpg'));
});
app.get('/IMG/2.png', function(req, res) {
  res.sendfile(path.join('views/IMG/2.png'));
});
app.get('/IMG/3.jpg', function(req, res) {
  res.sendfile(path.join('views/IMG/3.jpg'));
});
app.get('/IMG/4.jpg', function(req, res) {
  res.sendfile(path.join('views/IMG/4.jpg'));
});
app.get('/IMG/5.jpg', function(req, res) {
  res.sendfile(path.join('views/IMG/5.jpg'));
});
app.get('/IMG/6.jpg', function(req, res) {
  res.sendfile(path.join('views/IMG/6.jpg'));
});
app.get('/IMG/stars-png-23.png', function(req, res) {
  res.sendfile(path.join('views/IMG/stars-png-23.png'));
});
app.get('/data', function(req, res) {
  res.writeHead(200);
  getData(res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;

app.listen(8080);






















































































































































































































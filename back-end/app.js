var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//Khai báo thư viện mới
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const fileUpload = require('express-fileupload');
app.use(fileUpload());

//--------------------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Khai báo ứng dụng mới-----------------------------------------------------

//Đơn hàng
var donhangRouter = require('./routes/donhang');
app.use('/donhang', donhangRouter);

//Loại sản phẩm
var loaisanphamRouter = require('./routes/loaisanpham');
app.use('/loaisanpham', loaisanphamRouter);

//Người dùng
var nguoidungRouter = require('./routes/nguoidung');
app.use('/nguoidung', nguoidungRouter);

//Quyền
var quyenRouter = require('./routes/quyen');
app.use('/quyen', quyenRouter);

//Sản phẩm
var sanphamRouter = require('./routes/sanpham');
app.use('/sanpham', sanphamRouter);

//Slide
var slideRouter = require('./routes/slide');
app.use('/slide', slideRouter);

//Tin tức
var tintucRouter = require('./routes/tintuc');
app.use('/tintuc', tintucRouter);

//Kết thúc khai báo ứng dụng------------------------------------------------

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

module.exports = app;

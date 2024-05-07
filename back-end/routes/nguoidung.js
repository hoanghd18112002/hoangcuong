var express = require('express');
var route = express();
var db = require('./dbconnect');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const ensureToken = require('./auth');

var router = express.Router();

const path = require('path');
const duongdan = path.join(__dirname, '../../front-end/src/assets/client/img');

//Đăng nhập với tài khoản và mật khẩu---------------------------------
route.post('/login', function(req, res) {
    var taikhoan = req.body.taiKhoan;
    var matkhau = req.body.matKhau;

    var hashedPassword = crypto.createHash('md5').update(matkhau).digest('hex');

    var sql = "CALL sp_nguoidung_login(?, ?)";

    db.query(sql, [taikhoan, hashedPassword], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        
        if (rows[0].length > 0) {
            const user = rows[0][0];

            // Tạo token JWT
            const token = jwt.sign({ taiKhoan: user.taiKhoan }, 'my_secret_key', { expiresIn: '1h' });

            user.token = token;

            res.json({ success: true, message: "Đăng nhập thành công", data: user });
        } else {
            res.status(401).json({ success: false, message: "Tài khoản hoặc mật khẩu không đúng" });
        }
    });
});

//Kiểm tra tài khoản đã tồn tại chưa---------------------------------
route.post('/kiemtra', function(req, res) {
    var taikhoan = req.body.taiKhoan;
    var email = req.body.email;

    var sql = "CALL sp_nguoidung_kiemtra(?, ?)";

    db.query(sql, [taikhoan, email], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy tài khoản thành công", data: rows[0] });
    });
});

//Lấy về danh sách người dùng sắp xếp theo ID-------------------------
route.get('/getall', ensureToken, function(req, res){
    var sql = "CALL sp_nguoidung_getall_asc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách người dùng theo quyền------------------------------
route.post('/getbyquyen', ensureToken, function(req, res){
    var idquyen = req.body.idQuyen;
    
    var sql = "CALL sp_nguoidung_getbyquyen(?)";

    db.query(sql, [idquyen], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_nguoidung_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm--------------------------------------------------------------
route.post('/create', function(req, res) {
    var taikhoan = req.body.taiKhoan;
    var matkhau = req.body.matKhau;
    var email = req.body.email;
    var ten = req.body.ten;
    var ngaysinh = req.body.ngaySinh;
    var diachi = req.body.diaChi;
    var sdt = req.body.sdt;
    var gioitinh = req.body.gioiTinh;
    var anh = req.body.anh;
    var trangthai = req.body.trangThai;
    var idquyen = req.body.idQuyen;

    var hashedPassword = crypto.createHash('md5').update(matkhau).digest('hex');

    var sql = "CALL sp_nguoidung_create(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [taikhoan, hashedPassword, email, ten, ngaysinh, diachi, sdt, gioitinh, anh, trangthai, idquyen], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Đăng ký thành công", data: rows[0] });
    });
});

//Sửa kiểm tra có upfile không--------------------------------------
route.post('/update/:id', ensureToken, function(req, res) {
    var fileupload;
    var pathupload;

    if (req.files) {
        fileupload = req.files.fileanh;
        pathupload = path.join(duongdan, 'nguoidung', fileupload.name);

        fileupload.mv(pathupload, (error) => {
            if (error) return res.status(500).send('Lỗi upload file');
            update(req, res, fileupload.name);
        });
    } else {
        update(req, res, req.body.anh);
    }
});

//Sửa--------------------------------------------------------------
function update(req, res, img) {
    var id = req.params.id;
    var matkhau = req.body.matKhau;
    var email = req.body.email;
    var ten = req.body.ten;
    var ngaysinh = req.body.ngaySinh;
    var diachi = req.body.diaChi;
    var sdt = req.body.sdt;
    var gioitinh = req.body.gioiTinh;
    var anh = img;
    var trangthai = req.body.trangThai;
    var idquyen = req.body.idQuyen;

    var hashedPassword = matkhau ? crypto.createHash('md5').update(matkhau).digest('hex') : null;

    var sql = "CALL sp_nguoidung_update(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [id, hashedPassword, email, ten, ngaysinh, diachi, sdt, gioitinh, anh, trangthai, idquyen], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Sửa thành công", data: rows[0] });
    });
}

//Xoá---------------------------------------------------------------
route.delete('/delete/:id', ensureToken, function(req,res){
    var id = req.params.id;
    
    var sql = "CALL sp_nguoidung_delete(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xoá thành công", data: rows[0] });
    });
});

module.exports = route;
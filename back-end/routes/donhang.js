var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

//Lấy về danh sách đơn hàng sắp xếp theo ID---------------------------
route.get('/getall', ensureToken, function(req, res){
    var sql = "CALL sp_donhang_getall_desc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách đơn hàng theo người dùng----------------------------
route.get('/getbynguoidung/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_donhang_getbynguoidung(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Lấy về đơn hàng mới nhất--------------------------------------------
route.get('/getnew', ensureToken, function(req, res){
    var sql = "CALL sp_donhang_getnew()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy đơn hàng mới nhất thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_donhang_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm---------------------------------------------------------------
route.post('/create', ensureToken, function(req, res) {
    var ten = req.body.ten;
    var diachi = req.body.diaChi;
    var sdt = req.body.sdt;
    var kieugiaohang = req.body.kieuGiaoHang;
    var ghichu = req.body.ghiChu;
    var trangthai = req.body.trangThai;
    var idphuongthuc = req.body.idPhuongThuc;
    var idnguoidung = req.body.idNguoiDung;

    var sql = "CALL sp_donhang_create( ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [ten, diachi, sdt, kieugiaohang, ghichu, trangthai, idphuongthuc, idnguoidung], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Thêm thành công", data: rows[0] });
    });
});

//Sửa---------------------------------------------------------------
route.post('/update/:id', ensureToken, function(req, res){
    var id = req.params.id;
    var trangthai = req.body.trangThai;

    var sql = "CALL sp_donhang_update(?, ?)";

    db.query(sql, [id, trangthai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xử lý thành công", data: rows[0] });
    });
});

module.exports = route;
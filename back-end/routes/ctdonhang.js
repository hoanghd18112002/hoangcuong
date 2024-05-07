var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

//Lấy về danh sách chi tiết đơn hàng sắp xếp theo ID------------------
route.get('/getall', ensureToken, function(req, res){
    var sql = "CALL sp_ctdonhang_getall_desc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách chi tiết đơn hàng theo đơn hàng--------------------
route.get('/getbydonhang/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_ctdonhang_getbydonhang(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_ctdonhang_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm---------------------------------------------------------------
route.post('/create', ensureToken, function(req, res) {
    var soluong = req.body.soLuong;
    var gia = req.body.gia;
    var idsanpham = req.body.idSanPham;
    var iddonhang = req.body.idDonHang;

    var sql = "CALL sp_ctdonhang_create(?, ?, ?, ?)";

    db.query(sql, [soluong, gia, idsanpham, iddonhang], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Thêm thành công", data: rows[0] });
    });
});

//Sửa---------------------------------------------------------------
route.post('/update/:id', ensureToken, function(req, res){
    var id = req.params.id;
    var soluong = req.body.soLuong;
    var gia = req.body.gia;
    var idsanpham = req.body.idSanPham;
    var iddonhang = req.body.idDonHang;

    var sql = "CALL sp_ctdonhang_update(?, ?, ?, ?, ?)";

    db.query(sql, [id, soluong, gia, idsanpham, iddonhang], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Sửa thành công", data: rows[0] });
    });
});

//Xoá---------------------------------------------------------------
route.delete('/delete/:id', ensureToken, function(req,res){
    var id = req.params.id;
    
    var sql = "CALL sp_ctdonhang_delete(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xoá thành công", data: rows[0] });
    });
});

module.exports = route;
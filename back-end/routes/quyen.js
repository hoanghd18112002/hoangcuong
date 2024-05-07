var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

//Lấy về danh sách quyền sắp xếp theo ID------------------------------
route.get('/getall', ensureToken, function(req, res){
    var sql = "CALL sp_quyen_getall_asc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_quyen_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm---------------------------------------------------------------
route.post('/create', ensureToken, function(req, res) {
    var ten = req.body.ten;
    var mota = req.body.moTa;
    var trangthai = req.body.trangThai;

    var sql = "CALL sp_quyen_create(?, ?, ?)";

    db.query(sql, [ten, mota, trangthai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Thêm thành công", data: rows[0] });
    });
});

//Sửa---------------------------------------------------------------
route.post('/update/:id', ensureToken, function(req, res){
    var id = req.params.id;
    var ten = req.body.ten;
    var mota = req.body.moTa;
    var trangthai = req.body.trangThai;

    var sql = "CALL sp_quyen_update(?, ?, ?, ?)";

    db.query(sql, [id, ten, mota, trangthai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Sửa thành công", data: rows[0] });
    });
});

//Xoá---------------------------------------------------------------
route.delete('/delete/:id', ensureToken, function(req,res){
    var id = req.params.id;
    
    var sql = "CALL sp_quyen_delete(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xoá thành công", data: rows[0] });
    });
});

module.exports = route;
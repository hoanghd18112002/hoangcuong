var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

var router = express.Router();

const path = require('path');
const duongdan = path.join(__dirname, '../../front-end/src/assets/client/img');

//Lấy về danh sách sản phẩm sắp xếp theo ngày tạo--------------------
route.get('/getall', ensureToken, function(req, res){  
    var sql = "CALL sp_sanpham_getall_desc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách sản phẩm mới sắp xếp theo ngày tạo----------------
route.get('/getsanphammoi/:sl',function(req, res){
    var sl = req.params.sl;
    
    var sql = "CALL sp_sanpham_moi_desc(?)";

    db.query(sql, [sl], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách sản phẩm bán chạy--------------------------------
route.get('/getsanphambanchay/:sl',function(req, res){
    var sl = req.params.sl;
    
    var sql = "CALL sp_sanpham_banchay_desc(?)";

    db.query(sql, [sl], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách sản phẩm giảm giá--------------------------------
route.get('/getsanphamgiamgia/:sl',function(req, res){
    var sl = req.params.sl;
    
    var sql = "CALL sp_sanpham_giamgia_desc(?)";

    db.query(sql, [sl], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về danh sách sản phẩm ngẫu nhiên------------------------------
route.get('/getsanphamngaunhien/:sl',function(req, res){
    var sl = req.params.sl;
    
    var sql = "CALL sp_sanpham_ngaunhien(?)";

    db.query(sql, [sl], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về sản phẩm mới nhất--------------------------------------------
route.get('/getnew', ensureToken, function(req, res){
    var sql = "CALL sp_sanpham_getnew()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy sản phẩm mới nhất thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id',function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_sanpham_getbyid(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy theo ID thành công", data: rows[0] });
    });
});

//Thêm kiểm tra có upfile không-------------------------------------
route.post('/create', ensureToken, function(req, res) {
    var fileupload;
    var pathupload;

    if (req.files) {
        fileupload = req.files.fileanh;
        pathupload = path.join(duongdan, 'sanpham', fileupload.name);

        fileupload.mv(pathupload, (error) => {
            if (error) return res.status(500).send('Lỗi upload file');
            create(req, res, fileupload.name);
        });
    } else {
        create(req, res, req.body.anh);
    }
});

//Thêm-------------------------------------------------------------
function create(req, res, img) {
    var ten = req.body.ten;
    var mota = req.body.moTa;
    var anh = img
    var trangthai = req.body.trangThai;
    var idnhasanxuat = req.body.idNhaSanXuat;
    var idloai = req.body.idLoai;

    var sql = "CALL sp_sanpham_create(?, ?, ?, ?, ?, ?)";

    db.query(sql, [ten, mota, anh, trangthai, idnhasanxuat, idloai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Thêm thành công", data: rows[0] });
    });
}

//Sửa kiểm tra có upfile không--------------------------------------
route.post('/update/:id', ensureToken, function(req, res) {
    var fileupload;
    var pathupload;

    if (req.files) {
        fileupload = req.files.fileanh;
        pathupload = path.join(duongdan, 'sanpham', fileupload.name);

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
    var ten = req.body.ten;
    var mota = req.body.moTa;
    var anh = img
    var trangthai = req.body.trangThai;
    var idnhasanxuat = req.body.idNhaSanXuat;
    var idloai = req.body.idLoai;

    var sql = "CALL sp_sanpham_update(?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [id, ten, mota, anh, trangthai, idnhasanxuat, idloai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Sửa thành công", data: rows[0] });
    });
}

//Xoá---------------------------------------------------------------
route.delete('/delete/:id', ensureToken, function(req,res){
    var id = req.params.id;
    
    var sql = "CALL sp_sanpham_delete(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xoá thành công", data: rows[0] });
    });
});

//Tìm kiếm-----------------------------------------------------------
route.post('/search',function(req, res){
    var id = req.params.id;
    var ten = req.body.ten;
    var tennhasanxuat = req.body.tenNhaSanXuat;
    var tenloai = req.body.tenLoai;
    var mingia = req.body.minGia;
    var maxgia = req.body.maxGia;
    var idnhasanxuat = req.body.idNhaSanXuat;
    var idloai = req.body.idLoai;

    var sql = "CALL sp_sanpham_search(?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [id, ten, tennhasanxuat, tenloai, mingia, maxgia, idnhasanxuat, idloai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Tìm kiếm thành công", data: rows[0] });
    });
});

module.exports = route;
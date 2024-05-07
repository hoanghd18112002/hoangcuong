var express = require('express');
var route = express();
var db = require('./dbconnect');

const ensureToken = require('./auth');

var router = express.Router();

const path = require('path');
const duongdan = path.join(__dirname, '../../front-end/src/assets/client/img');

//Lấy về danh sách loại sản phẩm sắp xếp theo ID----------------------
route.get('/getall', function(req, res){
    var sql = "CALL sp_loaisanpham_getall_asc()";

    db.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Lấy danh sách thành công", data: rows[0] });
    });
});

//Lấy về 1------------------------------------------------------------
route.get('/getbyid/:id', ensureToken, function(req, res){
    var id = req.params.id;
    
    var sql = "CALL sp_loaisanpham_getbyid(?)";

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
        pathupload = path.join(duongdan, 'icon', fileupload.name);

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
    var bieutuong = img
    var trangthai = req.body.trangThai;

    var sql = "CALL sp_loaisanpham_create(?, ?, ?)";

    db.query(sql, [ten, bieutuong, trangthai], (err, rows) => {
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
        pathupload = path.join(duongdan, 'icon', fileupload.name);

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
    var bieutuong = img;
    var trangthai = req.body.trangThai;

    var sql = "CALL sp_loaisanpham_update(?, ?, ?, ?)";

    db.query(sql, [id, ten, bieutuong, trangthai], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Sửa thành công", data: rows[0] });
    });
}

//Xoá---------------------------------------------------------------
route.delete('/delete/:id', ensureToken, function(req,res){
    var id = req.params.id;
    
    var sql = "CALL sp_loaisanpham_delete(?)";

    db.query(sql, [id], (err, rows) => {
        if (err) return res.status(500).json({ error: "Có lỗi xảy ra" });
        res.json({ success: true, message: "Xoá thành công", data: rows[0] });
    });
});

module.exports = route;
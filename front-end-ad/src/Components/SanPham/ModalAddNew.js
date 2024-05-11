import React, { useState } from "react";
import { CreateSanPham } from "../../services/sanphamService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalAddNew = (props) => {
    const { show, setShow, getAllSanPham } = props;
    const [ten, setTen] = useState("");
    const [anh, setAnh] = useState("");
    const [gia, setGia] = useState("");
    const [soLuong, setSoLuong] = useState("");
    const [thuongHieu, setThuongHieu] = useState("");
    const [dieuKienBaoQuan, setDieuKienBaoQuan] = useState("");
    const [congDung, setCongDung] = useState("");
    const [xuatXu, setXuatXu] = useState("");
    const [dungTich, setDungTich] = useState("");
    const [moTa, setMoTa] = useState("");
    const [loai_ID, setLoai_ID] = useState("");
    const handleClose = () => {
        setShow(false);
        setTen("");
        setAnh("");
        setGia("");
        setSoLuong("");
        setThuongHieu("");
        setDieuKienBaoQuan("");
        setCongDung("");
        setXuatXu("");
        setDungTich("");
        setMoTa("");
        setLoai_ID("");
    }
    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setAnh(event.target.files[0])
        }
    }
    const hanleCreate = async () => {
        const data = new FormData();
        data.append("Ten", ten);
        data.append("fileanh", anh);
        data.append("Gia", gia)
        data.append("SoLuong", soLuong)
        data.append("ThuongHieu", thuongHieu);
        data.append("DieuKienBaoQuan", dieuKienBaoQuan)
        data.append("CongDung", congDung);
        data.append("XuatXu", xuatXu);
        data.append("DungTich", dungTich)
        data.append("MoTa", moTa)
        data.append("Loai_ID", loai_ID);
        let res = await CreateSanPham(data);
        console.log(res);
        alert("Tạo mới thành công !")
        handleClose();
        await getAllSanPham();
    }

    return (
        <>

            <Modal show={show}
                size="xl"
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Tên</label>
                            <input type="text" value={ten} onChange={(event) => setTen(event.target.value)} class="form-control" id="inputEmail4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Ảnh</label>
                            <input type="file" onChange={(event) => handleUploadImage(event)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Giá</label>
                            <input type="text" value={gia} onChange={(event) => setGia(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Số lượng</label>
                            <input type="text" value={soLuong} onChange={(event) => setSoLuong(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Thương hiệu</label>
                            <input type="text" value={thuongHieu} onChange={(event) => setThuongHieu(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Điều kiện bảo quản</label>
                            <input type="text" value={dieuKienBaoQuan} onChange={(event) => setDieuKienBaoQuan(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Công dụng</label>
                            <input type="text" value={congDung} onChange={(event) => setCongDung(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Xuất xứ</label>
                            <input type="text" value={xuatXu} onChange={(event) => setXuatXu(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Dung tích</label>
                            <input type="text" value={dungTich} onChange={(event) => setDungTich(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Mô tả</label>
                            <input type="text" value={moTa} onChange={(event) => setMoTa(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>

                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Mã loại</label>
                            <input type="text" value={loai_ID} onChange={(event) => setLoai_ID(event.target.value)} class="form-control" id="inputPassword4" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanleCreate}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;

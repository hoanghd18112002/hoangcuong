import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import _ from "lodash";
import { UpdateSanPham } from "../../services/sanphamService";
const ModalUpdate = (props) => {
    const { show, setShow, dataEdit, setDataEdit, getAllSanPham } = props;
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
    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            setTen(dataEdit.Ten)
            setAnh(dataEdit.Anh)
            setGia(dataEdit.Gia)
            setSoLuong(dataEdit.SoLuong)
            setThuongHieu(dataEdit.ThuongHieu)
            setDieuKienBaoQuan(dataEdit.DieuKienBaoQuan)
            setCongDung(dataEdit.CongDung);
            setXuatXu(dataEdit.XuatXu)
            setDungTich(dataEdit.DungTich)
            setMoTa(dataEdit.MoTa)
            setLoai_ID(dataEdit.Loai_ID)
        }
    }, [dataEdit])
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
        setDataEdit({});
    }

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setAnh(event.target.files[0])
        }
    }
    const hanleUpdate = async () => {

        const data = new FormData();
        data.append("ID", dataEdit.ID)
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
        const res = await UpdateSanPham(data);
        console.log(res)
        Swal.fire("Thành công!", "Cập nhật thành công!", "success");
        await getAllSanPham();
        handleClose();
    }
    return (
        <>

            <Modal show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật </Modal.Title>
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
                    <Button variant="primary" onClick={hanleUpdate}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate;

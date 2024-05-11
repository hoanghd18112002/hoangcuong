import React, { useState } from "react";
import { CreateQuyen } from "../../services/quyenService";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalAddNew = (props) => {
    const { show, setShow, getAllQuyen } = props;
    const [ten, setTen] = useState("");

    const handleClose = () => {
        setShow(false);
        setTen("");
    }

    const hanleCreateQuyen = async () => {
        const obj = {
            Ten: ten,
        };
        console.log(obj)
        await CreateQuyen(obj);
        alert("Tạo mới thành công !")
        handleClose();
        await getAllQuyen();
    }

    return (
        <>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">Tên Quyền :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="ten"
                                value={ten}
                                onChange={(event) => setTen(event.target.value)}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hanleCreateQuyen}>
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddNew;

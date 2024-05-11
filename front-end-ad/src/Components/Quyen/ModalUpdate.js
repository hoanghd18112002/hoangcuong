import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import _ from "lodash";
import { UpdateQuyen } from "../../services/quyenService";
const ModalUpdate = (props) => {
    const { show, setShow, dataEdit, setDataEdit, getAllQuyen } = props;
    const [ten, setTen] = useState("");
    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            setTen(dataEdit.Ten)
        }
    }, [dataEdit])
    const handleClose = () => {
        setShow(false);
        setTen("");
        setDataEdit({});
    }

    const hanleUpdateQuyen = async () => {
        const obj = {
            ID: dataEdit.ID,
            Ten: ten
        };
        console.log(obj);
        const res = await UpdateQuyen(obj);
        Swal.fire("Thành công!", "Cập nhật thành công!", "success");
        await getAllQuyen();
        handleClose();
    }
    return (
        <>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhật </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group row">
                        <label className="col-md-12 control-label">Tên Quyền :</label>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12">
                            <input type="text" id="idTenLoaiSanPham"
                                className="form-control" name="TenLoaiSanPham"
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
                    <Button variant="primary" onClick={hanleUpdateQuyen}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdate;

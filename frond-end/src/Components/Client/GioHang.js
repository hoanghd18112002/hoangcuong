import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { xoa1sp, tangSoLuong, giamSoLuong } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
const GioHang = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.account);
    console.log(user)
    const handleThanhToan = () => {
        if (!user?.account?.HoTen) {
            navigate("/login")
        } else {
            navigate("/thanhtoan")
        }
    }
    const deleteGioHang = (MaSanPham) => {
        dispatch(xoa1sp(MaSanPham))
    }
    const TangGioHang = (id) => {
        //console.log(id)
        dispatch(tangSoLuong(id))
    }
    const giamGioHang = (id) => {
        dispatch(giamSoLuong(id))
    }
    const items = useSelector((state) => state.cart.items);
    let totalQuantity = useSelector((state) => state.cart.totalQuantity);
    console.log(totalQuantity)
    let totalPrice = useSelector((state) => state.cart.totalPrice);
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {items.map(gh => (
                                    <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img src={`data:image/jpg;base64,${gh.AnhDaiDien}`} className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
                                            </div>
                                        </th>
                                        <td>
                                            <p className="mb-0 mt-4">{gh.TenSP}</p>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">{gh.DonGia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                        </td>
                                        <td>
                                            <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => giamGioHang(gh.MaSanPham)}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control form-control-sm text-center border-0" value={gh.SoLuong} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => TangGioHang(gh.MaSanPham)}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 mt-4">
                                                {(gh.DonGia * gh.SoLuong).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                            </p>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteGioHang(gh.MaSanPham)} className="btn btn-md rounded-circle bg-light border mt-4">
                                                <i className="fa fa-times text-danger"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row g-4 justify-content-end">
                        <div className="col-12 col-lg-8"></div>
                        <div className="col-12 col-lg-4">
                            <div className="bg-light rounded p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                {/* Rest of the content */}
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between align-items-center">
                                    <Container>
                                        <Row className="align-items-center">
                                            <Col xs={6}>
                                                <h5 className="mb-0">Total:{totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Button onClick={handleThanhToan} className="btn btn-secondary rounded-pill px-4 py-3 text-primary text-uppercase ms-4">Proceed to Checkout</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GioHang;

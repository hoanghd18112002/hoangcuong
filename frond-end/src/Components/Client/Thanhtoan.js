import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CreateHoaDon } from '../../services/hoadonService';
import { xoaAll } from '../../redux/slices/cartSlice';
import { useNavigate } from "react-router-dom";
const ThanhToan = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    //const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const user = useSelector((state) => state.user.account);
    const [customerInfo, setCustomerInfo] = useState({
        TenKhachHang: '',
        DiaChi: '',
        SoDienThoai: '',
    });


    const handleChange = (e) => {
        const { id, value } = e.target;
        setCustomerInfo({ ...customerInfo, [id]: value });
    };
    const handlePayment = async () => {
        const { TenKhachHang, DiaChi, SoDienThoai } = customerInfo;
        const obj = {
            Ten: TenKhachHang,
            DiaChi: DiaChi,
            SoDienThoai: SoDienThoai,
            NguoiDung_ID: user.account.ID,
            TrangThai: 0,
            ListChiTiet: []
        };
        cart.forEach(sanpham => {
            obj.ListChiTiet.push({
                SanPham_ID: sanpham.MaSanPham,
                SoLuong: sanpham.SoLuong,
                Gia: sanpham.DonGia
            });
        });
        console.log(obj)
        try {
            const response = await CreateHoaDon(obj);
            console.log(response)
            if (response) {
                alert('Thanh toán thành công! Cảm ơn quý khách đã tin tưởng sản phẩm của shop.');
                dispatch(xoaAll())
                setCustomerInfo({
                    TenKhachHang: '',
                    DiaChi: '',
                    SoDienThoai: '',
                })
                navigate("/");
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Lỗi khi thanh toán:', error);
            // Xử lý lỗi nếu cần thiết
        }
    };
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Billing details</h1>
                    <form action="#">
                        <div className="row g-5">
                            <div className="col-md-12 col-lg-6 col-xl-7">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="TenKhachHang" className="form-label">Tên:</label>
                                            <input type="text" id="TenKhachHang" className="form-control" value={customerInfo.TenKhachHang} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="DiaChi" className="form-label">Địa Chỉ:</label>
                                            <input type="text" id="DiaChi" className="form-control" value={customerInfo.DiaChi} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="SoDienThoai" className="form-label">Số Điện thoại:</label>
                                            <input type="text" id="SoDienThoai" className="form-control" value={customerInfo.SoDienThoai} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-5">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Products</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(gh => (
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center mt-2">
                                                            <img src={`data:image/jpg;base64,${gh.AnhDaiDien}`} className="img-fluid rounded-circle" style={{ width: '90px', height: '90px' }} alt="" />
                                                        </div>
                                                    </th>
                                                    <td className="py-5">{gh.TenSP}</td>
                                                    <td className="py-5">{gh.DonGia} VNĐ</td>
                                                    <td className="py-5">{gh.SoLuong}</td>
                                                    <td className="py-5">{gh.DonGia * gh.SoLuong}</td>
                                                </tr>
                                            ))}

                                            <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                                                </td>
                                                <td className="py-5"></td>
                                                <td className="py-5"></td>
                                                <td className="py-5">
                                                    <div className="py-3 border-bottom border-top">
                                                        <p className="mb-0 text-dark">{totalPrice}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                    <button onClick={handlePayment} type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Thanh toán đơn hàng </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ThanhToan;

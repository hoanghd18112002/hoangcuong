import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateNguoiDung } from '../../services/userService';
import Swal from 'sweetalert2';
const Dangky = () => {

    const formWidth = '500px';
    const [taiKhoan, setTaiKhoan] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [email, setEmail] = useState("");
    const [ten, setTen] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            TaiKhoan: taiKhoan,
            MatKhau: matKhau,
            Email: email,
            Ten: ten,
            DiaChi: diaChi,
            SoDienThoai: soDienThoai,
            Quyen_ID: 2
        };
        console.log(obj)
        let res = await CreateNguoiDung(obj)

        console.log(res)
        if (res) {
            Swal.fire({
                icon: 'success',
                title: 'dăng ký thành công!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="sign-in" style={{ backgroundColor: '#f0f0f0', padding: '40px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', width: formWidth }}>
                    <h4 className="mb-4" style={{ color: '#333' }}>Đăng ký</h4>
                    <p className="mb-4" style={{ color: '#666' }}>Hello, Welcome to your account.</p>

                    <form className="register-form outer-top-xs" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>Tài khoản <span className="text-danger">*</span></label>
                            <input type="text" value={taiKhoan} onChange={(e) => setTaiKhoan(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter username" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>Password <span className="text-danger">*</span></label>
                            <input type="password" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>Email<span className="text-danger">*</span></label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Email" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>Họ tên <span className="text-danger">*</span></label>
                            <input type="text" value={ten} onChange={(e) => setTen(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Họ tên" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>Địa chỉ <span className="text-danger">*</span></label>
                            <input type="text" value={diaChi} onChange={(e) => setDiaChi(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter Địa chỉ" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#333' }}>SDT <span className="text-danger">*</span></label>
                            <input type="text" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter SĐT" style={{ width: '100%', padding: '15px', borderRadius: '5px', border: '1px solid #ccc' }} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '15px', fontSize: '16px' }}>Đăng ký</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dangky;
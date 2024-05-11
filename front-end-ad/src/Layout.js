import React from 'react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoaiSanPham from './Components/LoaiSanPham/loaisanpham';
import Quyen from './Components/Quyen/quyen';
import DonHangAd from './Components/DonHang/donhang';
import SanPham from './Components/SanPham/sanpham';
import DangNhap from './Components/Auth/Login';

const Layout = () => {
    return (
        <>

            <Router>
                <Routes>
                    <Route path="/" element={<App />} >
                        <Route path='ad-sanpham' element={<SanPham />} />
                        <Route path='ad-loaisp' element={<LoaiSanPham />} />
                        <Route path='ad-quyen' element={<Quyen />} />
                        <Route path='ad-donhang' element={<DonHangAd />} />
                    </Route>
                    <Route path='/login' element={<DangNhap />} />
                </Routes>
            </Router >

        </>
    )
}

export default Layout;

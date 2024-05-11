import React from 'react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Client/Home';
import XemChiTiet from './Components/Client/XemChiTiet';
import DangNhap from './Components/Auth/Login';
import GioHang from './Components/Client/GioHang';
import ThanhToan from './Components/Client/Thanhtoan';
import TinTuc from './Components/Client/TinTuc';
import LienHe from './Components/Client/LienHe';
import ChiTietTinTuc from './Components/Client/ChiTietTinTuc';
import DanhMuc from './Components/Client/DanhMuc';
import SanPham from './Components/Client/SanPham';
import Dangky from './Components/Auth/Dangky';
import Timkiem from './Components/Client/TimKiem';
const Layout = () => {
    return (
        <>

            <Router>
                <div className="app">
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<App />} >
                                <Route index element={<Home />} />
                                <Route path='XemChiTiet/:id' element={<XemChiTiet />} />
                                <Route path='tintuc' element={<TinTuc />} />
                                <Route path='sanpham' element={<SanPham />} />
                                <Route path='cttintuc/:id' element={<ChiTietTinTuc />} />
                                <Route path='danhmuc/:id' element={<DanhMuc />} />
                                <Route path='lienhe' element={<LienHe />} />
                                <Route path='timkiem' element={<Timkiem />} />
                                <Route path='giohang' element={<GioHang />} />
                                <Route path='thanhtoan' element={<ThanhToan />} />
                            </Route>
                            <Route path='/login' element={<DangNhap />} />
                            <Route path='/dangky' element={<Dangky />} />
                        </Routes>
                    </div>

                </div>
            </Router >

        </>
    )
}

export default Layout;
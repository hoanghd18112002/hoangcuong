import React from 'react';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Client/Home';
import XemChiTiet from './Components/Client/XemChiTiet';
import DangNhap from './Components/Auth/Login';
import GioHang from './Components/Client/GioHang';
import ThanhToan from './Components/Client/Thanhtoan';
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
                                <Route path='giohang' element={<GioHang />} />
                                <Route path='thanhtoan' element={<ThanhToan />} />
                            </Route>
                            <Route path='/login' element={<DangNhap />} />
                        </Routes>
                    </div>

                </div>
            </Router >

        </>
    )
}

export default Layout;
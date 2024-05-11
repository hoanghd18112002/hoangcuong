import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { GetByID } from '../../services/tintucService';
const ChiTietTinTuc = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loaisp, setLoaisp] = useState([]);
    useEffect(() => {
        getLoaiSP();
        getTheoMa();
    }, []);

    const getLoaiSP = async () => {
        try {
            const res = await GetLoaiSanPhamALL();
            const data = res && res.data ? res.data : res
            console.log(data)
            setLoaisp(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getTheoMa = async () => {
        console.log(id)
        if (id) {
            let res = await GetByID(Number(id));
            console.log(res)
            setData(res && res.data ? res.data : res);
        } else {
            console.error('ID is undefined');
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">

                            {/* TOP NAVIGATION */}
                            <div className="side-menu animate-dropdown outer-bottom-xs">
                                <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
                                <nav className="yamm megamenu-horizontal">
                                    <ul className="nav">
                                        {loaisp.map((item, index) => (
                                            <li className="dropdown menu-item"> <Link to={`/danhmuc/${item.ID}`} className="dropdown-toggle" data-toggle="dropdown">{item.Ten}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* /.nav */}
                                </nav>
                                {/* /.megamenu-horizontal */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {/* Phần danh sách tin tức */}
                        <div className="blog-page">
                            <div className="blog-post ">
                                <img className="img-responsive" src={`data:image/jpg;base64,${data[0]?.Anh}`} style={{ height: '300px', width: '100%', objectFit: 'cover' }} alt="" />
                                <h1>{data[0]?.Ten}</h1>
                                <p>
                                    {data[0]?.NoiDung}
                                </p>
                                <div className="social-media">
                                    <span>share post:</span>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-rss"></i></a>
                                    <a href="#" className="hidden-xs"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChiTietTinTuc;
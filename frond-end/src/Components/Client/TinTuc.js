import React, { useEffect, useState } from 'react';
import { GetTinTuc_asc } from '../../services/tintucService';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
const TinTuc = () => {
    const [data, setData] = useState([]);
    const [loaisp, setLoaisp] = useState([]);
    useEffect(() => {
        getTinTuc();
        getLoaiSP();
    }, []);

    const getTinTuc = async () => {
        try {
            const res = await GetTinTuc_asc();
            const data = res && res.data ? res.data : res;
            console.log(data)
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
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
    return (
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
                        {data.map((item, index) => (
                            <>
                                <div className="blog-post-container row" key={index}>
                                    <div className="col-md-6">
                                        <div className="blog-post-image">
                                            <Image className="img-responsive" src={`data:image/jpg;base64,${item.Anh}`} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog-post-content">
                                            <h1><a href="blog-details.html">
                                                {item.Ten.length > 30 ? `${item.Ten.substring(0, 30)}...` : item.Ten}
                                            </a></h1>
                                            <span className="review" style={{ fontSize: '18px' }}>
                                                {item.NoiDung.length > 100 ? `${item.NoiDung.substring(0, 100)}...` : item.NoiDung}
                                            </span>
                                            <p></p>
                                            <Link to={`/cttintuc/${item.ID}`} className="btn btn-upper btn-primary read-more">Xem chi tiết</Link>
                                        </div>
                                    </div>

                                </div>
                                <br />
                            </>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TinTuc;

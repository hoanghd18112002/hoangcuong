import React, { useEffect, useState } from 'react';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { Image, Row } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import { getDanhMuc } from '../../services/sanphamService';
const DanhMuc = () => {
    const [loaisp, setLoaisp] = useState([]);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getLoaiSP();
        GetTheoDanhMuc();
    }, [id]);

    const getLoaiSP = async () => {
        try {
            const res = await GetLoaiSanPhamALL();
            const data = res && res.data ? res.data : res;
            console.log(data);
            setLoaisp(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const GetTheoDanhMuc = async () => {
        if (id) {
            let res = await getDanhMuc(Number(id)); // Convert id to number
            console.log(res)
            setProduct(res && res.data ? res.data : res);
        } else {
            console.error('ID is undefined');
        }
    }
    return (
        <>
            <Row>
                <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
                    <div className="side-menu animate-dropdown outer-bottom-xs">
                        <div className="head">
                            <i className="icon fa fa-align-justify fa-fw"></i> Categories
                        </div>
                        <nav className="yamm megamenu-horizontal">
                            <ul className="nav">
                                {loaisp.map((item, index) => (
                                    <li className="dropdown menu-item" key={index + 1}>
                                        <NavLink to={`/danhmuc/${item.ID}`}>
                                            <i className="fas fa-apple-alt me-2"></i>
                                            {item.Ten}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="search-result-container">
                    <div id="myTabContent" className="tab-content category-list">
                        <div className="tab-pane active" id="grid-container">
                            <div className="category-product">
                                <div className="row">
                                    {product.map((item, index) => (
                                        <div className="col-sm-6 col-md-4 col-lg-3">
                                            <div className="item">
                                                <div className="products">
                                                    <div className="product">
                                                        <div className="product-image">
                                                            <a href="detail.html">
                                                                <Image src={`data:image/jpg;base64,${item.Anh}`} alt={product.name} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                                                            </a>
                                                            {product.isNew && <div className="tag new"><span>New</span></div>}
                                                        </div>
                                                        <div className="product-info text-left">
                                                            <h3 className="name">
                                                                <a href="detail.html">{item.Ten}</a>
                                                            </h3>
                                                            <div className="rating rateit-small"></div>
                                                            <div className="description"></div>
                                                            <div className="product-price">
                                                                <span>{item.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                            </div>
                                                        </div>
                                                        <div className="cart clearfix animate-effect">
                                                            <div className="action">
                                                                <ul className="list-unstyled">
                                                                    <li className="add-cart-button btn-group">
                                                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                                            <i className="fa fa-shopping-cart"></i>
                                                                        </button>
                                                                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                                                    </li>
                                                                    <li className="lnk wishlist">
                                                                        <a className="add-to-cart" href="detail.html" title="Wishlist">
                                                                            <i className="icon fa fa-heart"></i>
                                                                        </a>
                                                                    </li>
                                                                    <li className="lnk">
                                                                        <a className="add-to-cart" href="detail.html" title="Compare">
                                                                            <i className="fa fa-signal"></i>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        </>
    );
};

export default DanhMuc;

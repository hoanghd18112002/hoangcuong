import React, { useEffect, useState } from 'react';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { Image, Row, Col, Button } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import { GetByID, getDanhMuc } from '../../services/sanphamService';
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const DanhMuc = () => {
    const [loaisp, setLoaisp] = useState([]);
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getLoaiSP();
        GetTheoDanhMuc();
    }, [id]);
    const dispatch = useDispatch();
    const Themvaogio = (MaSanPham, soluong) => {
        GetByID(MaSanPham).then(res => {
            console.log(res)
            const sanpham = {
                MaSanPham: res.data[0]?.ID,
                TenSP: res.data[0]?.Ten,
                AnhDaiDien: res.data[0]?.Anh,
                SoLuong: soluong,
                DonGia: res.data[0]?.Gia,
            };
            dispatch(addToCart(sanpham));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        });
    };
    const getLoaiSP = async () => {
        try {
            const res = await GetLoaiSanPhamALL();
            const data = res && res.data ? res.data : res;
            setLoaisp(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const GetTheoDanhMuc = async () => {
        if (id) {
            let res = await getDanhMuc(Number(id)); // Convert id to number
            setProduct(res && res.data ? res.data : res);
        } else {
            console.error('ID is undefined');
        }
    }

    return (
        <Row>
            <Col xs={12} md={3} className="sidebar">
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
            </Col>
            <Col xs={12} md={9} className="search-result-container">
                <div id="myTabContent" className="tab-content category-list">
                    <div className="tab-pane active" id="grid-container">
                        <div className="category-product">
                            <div className="row">
                                {product.map((item, index) => (
                                    <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                        <div className="item">
                                            <div className="products">
                                                <div className="product">
                                                    <div className="product-image">
                                                        <Image
                                                            src={`data:image/jpg;base64,${item.Anh}`}
                                                            alt={item.name}
                                                            fluid
                                                            style={{ height: '300px' }}
                                                        />
                                                        {item.isNew && <div className="tag new"><span>New</span></div>}
                                                    </div>
                                                    <div className="product-info text-left">
                                                        <h3 className="name">
                                                            <Link to={`/XemChiTiet/${item.ID}`}>
                                                                {item.Ten.length > 15 ? item.Ten.substring(0, 15) + "..." : item.Ten}
                                                            </Link>
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
                                                                    <li className="add-cart-button btn-group">
                                                                        <Button data-toggle="tooltip" onClick={() => { Themvaogio(item.ID, 1) }} className="btn btn-primary icon" type="button" title="Add Cart">
                                                                            <i className="fa fa-shopping-cart"></i>
                                                                        </Button>
                                                                        <Button onClick={() => { Themvaogio(item.ID, 1) }} className="btn btn-primary cart-btn" type="button">Add to Cart</Button>
                                                                    </li>
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
            </Col>
        </Row>
    );
};

export default DanhMuc;

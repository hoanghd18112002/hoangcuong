import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { GetSlide_Asc } from '../../services/slideServices';
import { GetSanPham_asc, GetSanPhamNgauNhien } from '../../services/sanphamService';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { GetByID } from '../../services/sanphamService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
const Home = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [loaisp, setLoaisp] = useState([]);
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
    useEffect(() => {
        getSlide();
        getSanPham_asc();
        getNgauNhien();
        getLoaiSP();
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [data]);


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
    const getNgauNhien = async () => {
        try {
            const res = await GetSanPhamNgauNhien();
            const data = res && res.data ? res.data : res
            setData2(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getSanPham_asc = async () => {
        try {
            const res = await GetSanPham_asc();
            const data = res && res.data ? res.data : res
            //console.log(data)
            setData1(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getSlide = async () => {
        try {
            const res = await GetSlide_Asc();
            const data = res && res.data ? res.data : res
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <Row>
                <div className="col-xs-12 col-sm-12 col-md-3 sidebar">

                    {/* TOP NAVIGATION */}
                    <div className="side-menu animate-dropdown outer-bottom-xs">
                        <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
                        <nav className="yamm megamenu-horizontal">
                            <ul className="nav">
                                {loaisp.map((item, index) => (
                                    <li className="dropdown menu-item"> <Link className="dropdown-toggle" to={`/danhmuc/${item.ID}`} data-toggle="dropdown">{item.Ten}</Link>
                                    </li>
                                ))}
                            </ul>
                            {/* /.nav */}
                        </nav>
                        {/* /.megamenu-horizontal */}
                    </div>
                </div>


                <Col xs={12} sm={12} md={9} className="homebanner-holder">

                    <div id="hero" className="carousel slide">

                        <div className="carousel-inner" >
                            {data.map((item, index) => (
                                <li key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                    <img src={`data:image/jpg;base64,${item.Anh}`} alt="" style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                                        className="d-block" />
                                </li>
                            ))}
                        </div>

                    </div>


                </Col>
            </Row>
            <Row className="scroll-tabs outer-top-vs">
                <div className="more-info-tab clearfix">
                    <h3 className="new-product-title">New Products</h3>
                </div>
                <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                        <div className="product-slider">
                            <Row className="product-row">
                                {data1.map((product, index) => (
                                    <Col key={product.ID} xs={6} sm={6} md={4} lg={3} xl={3} className="product-col">
                                        <div className="product">
                                            <div className="product-image">
                                                <Image
                                                    src={`data:image/jpg;base64,${product.Anh}`}
                                                    alt={product.name}
                                                    fluid
                                                    style={{ height: '300px' }}
                                                />
                                                {product.isNew && <div className="tag new"><span>New</span></div>}
                                            </div>
                                            <div className="product-info text-center">
                                                <h3 className="name">
                                                    <Link href={`/XemChiTiet/${product.ID}`}>
                                                        {product.Ten.length > 15 ? product.Ten.substring(0, 15) + "..." : product.Ten}
                                                    </Link>
                                                </h3>
                                                <div className="product-price">
                                                    <span>{product.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                </div>
                                            </div>
                                            <div className="cart clearfix text-center animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                            <Button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart">
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </Button>
                                                            <Button onClick={() => { Themvaogio(product.ID, 1) }} className="btn btn-primary cart-btn" type="button">Add to Cart</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="scroll-tabs outer-top-vs">
                <div className="more-info-tab clearfix">
                    <h3 className="new-product-title">Sản phẩm ngẫu nhiên</h3>
                </div>
                <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                        <div className="product-slider">
                            <Row className="product-row">
                                {data2.map((product, index) => (
                                    <Col key={product.ID} xs={6} sm={6} md={4} lg={3} xl={3} className="product-col">
                                        <div className="product">
                                            <div className="product-image">
                                                <Image
                                                    src={`data:image/jpg;base64,${product.Anh}`}
                                                    alt={product.name}
                                                    fluid
                                                    style={{ height: '300px' }}
                                                />
                                                {product.isNew && <div className="tag new"><span>New</span></div>}
                                            </div>
                                            <div className="product-info text-center">
                                                <h3 className="name">
                                                    <Link href={`/XemChiTiet/${product.ID}`}>
                                                        {product.Ten.length > 15 ? product.Ten.substring(0, 15) + "..." : product.Ten}
                                                    </Link>
                                                </h3>
                                                <div className="product-price">
                                                    <span>{product.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                </div>
                                            </div>
                                            <div className="cart clearfix text-center animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                            <Button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart">
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </Button>
                                                            <Button onClick={() => { Themvaogio(product.ID, 1) }} className="btn btn-primary cart-btn" type="button">Add to Cart</Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Row>
        </>
    );
}

export default Home;

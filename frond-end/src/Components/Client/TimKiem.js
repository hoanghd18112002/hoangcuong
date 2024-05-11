import React, { useEffect, useState } from 'react';
import { timKiem } from '../../services/sanphamService';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { GetByID } from '../../services/sanphamService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
const Timkiem = () => {
    const dispatch = useDispatch();
    const [data1, setData1] = useState([]);
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get('query');
    useEffect(() => {
        if (search) {
            handleSearch();
        }
    }, [search]);
    const handleSearch = async () => {
        const obj = {
            Ten: search,
        };
        console.log(obj)
        const res = await timKiem(obj);
        setData1(res.data)

    }
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
    return (
        <>
            <Row className="scroll-tabs outer-top-vs">
                <div className="more-info-tab clearfix">
                    <h3 className="new-product-title">Sản phẩm tìm thấy</h3>
                </div>
                <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                        <div className="product-slider">
                            <Row className="product-row">
                                {data1.map((product, index) => (
                                    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="product-col">
                                        <div className="product">
                                            <div className="product-image">
                                                <a href="detail.html">
                                                    <Image src={`data:image/jpg;base64,${product.Anh}`} alt={product.name} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                                                </a>
                                                {product.isNew && <div className="tag new"><span>New</span></div>}
                                            </div>
                                            <div className="product-info text-center">
                                                <h3 className="name"><Link to={`/XemChiTiet/${product.ID}`}>{product.Ten}</Link></h3>
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
                                                            <Button onClick={() => { Themvaogio(product.ID, 1) }} className="btn btn-primary cart-btn" type="button">Add to cart</Button>
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
    )
}

export default Timkiem;
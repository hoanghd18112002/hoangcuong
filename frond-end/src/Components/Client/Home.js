import React, { useEffect, useState } from 'react';
import { Row, Col, Nav, Image, Button } from 'react-bootstrap';
import { GetSlide_Asc } from '../../services/slideServices';
import { GetSanPham_asc } from '../../services/sanphamService';
const Home = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        getSlide();
        getSanPham_asc();
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [data]);

    const getSanPham_asc = async () => {
        try {
            const res = await GetSanPham_asc();
            const data = res && res.data ? res.data : res
            console.log(data)
            setData1(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getSlide = async () => {
        try {
            const res = await GetSlide_Asc();
            const data = res && res.data ? res.data : res
            console.log(data)
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={3} className="sidebar">
                    <div className="side-menu">
                        <div className="head"><i className="fas fa-bars fa-fw"></i> Categories</div>
                        <Nav className="yamm megamenu-horizontal">
                            <Nav.Item >
                                <Nav.Link >
                                    jbjk
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>


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
                                    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="product-col">
                                        <div className="product">
                                            <div className="product-image">
                                                <a href="detail.html">
                                                    <Image src={`data:image/jpg;base64,${product.Anh}`} alt={product.name} />
                                                </a>
                                                {product.isNew && <div className="tag new"><span>New</span></div>}
                                            </div>
                                            <div className="product-info text-center">
                                                <h3 className="name"><a href="detail.html">{product.Ten}</a></h3>
                                                <div className="product-price">
                                                    <span className="price-before-discount">{product.Gia}</span>
                                                </div>
                                            </div>
                                            <div className="cart clearfix text-center animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                            <Button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart">
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </Button>
                                                            <Button className="btn btn-primary cart-btn" type="button">Add to cart</Button>
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

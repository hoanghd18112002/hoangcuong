import React, { useEffect, useState } from 'react';
import { GetByID } from '../../services/sanphamService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetLoaiSanPhamALL } from '../../services/loaisanphamService';
import { addToCart } from '../../redux/slices/cartSlice';
const XemChiTiet = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaisp, setLoaisp] = useState([]);
    const navige = useNavigate();
    useEffect(() => {
        getTheoMa();
        getLoaiSP();
    }, []);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const Themvaogio = () => {
        if (product) {
            const sanpham = {
                MaSanPham: product[0]?.ID,
                TenSP: product[0]?.Ten,
                AnhDaiDien: product[0]?.Anh,
                SoLuong: quantity,
                DonGia: product[0]?.Gia,
            };
            dispatch(addToCart(sanpham));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
        } else {
            console.error('Product is undefined');
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
    const getTheoMa = async () => {
        if (id) {
            let res = await GetByID(Number(id)); // Convert id to number
            console.log(res)
            setProduct(res && res.data ? res.data : res);
        } else {
            console.error('ID is undefined');
        }
    }

    console.log(product)

    return (
        <div className='container-fluid single-product'>
            <div className='row'>
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
                        </nav>
                        {/* /.megamenu-horizontal */}
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-9 rht-col'>
                    <div className="detail-block">
                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
                                <div className="product-item-holder size-big single-product-gallery small-gallery">

                                    <div id="owl-single-product">
                                        <div className="single-product-gallery-item" key="slide1">
                                            <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p1.jpg">
                                                <img className="img-responsive" alt="" src={`data:image/jpg;base64,${product[0]?.Anh}`}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-8 col-lg-8 product-info-block'>
                                <div className="product-info">
                                    <h1 className="name">{product[0]?.Ten}</h1>

                                    <div className="rating-reviews m-t-20">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="pull-left">
                                                    <div className="rating rateit-small"></div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="reviews">
                                                        <Link className="lnk">(13 Reviews)</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="stock-container info-container m-t-10">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="pull-left">
                                                    <div className="stock-box">
                                                        <span className="label">Thương hiệu :</span>
                                                    </div>
                                                </div>
                                                <div className="pull-left">
                                                    <div className="stock-box">
                                                        <span className="value">{product[0]?.ThuongHieu}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="description-container m-t-20">
                                        <p>{product[0]?.MoTa} </p>

                                    </div>

                                    <div className="price-container info-container m-t-30">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-6">
                                                <div className="price-box">
                                                    <span className="price">{product[0]?.Gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-xs-6">
                                                <div className="favorite-button m-t-5">
                                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Wishlist"
                                                    >
                                                        <i className="fa fa-heart"></i>
                                                    </Link>
                                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare"
                                                    >
                                                        <i className="fa fa-signal"></i>
                                                    </Link>
                                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="E-mail"
                                                    >
                                                        <i className="fa fa-envelope"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="quantity-container info-container">
                                        <div className="row">
                                            <div className="qty">
                                                <span className="label">Qty :</span>
                                            </div>
                                            <div className="qty-count">
                                                <div className="cart-quantity">
                                                    <div className="quant-input">
                                                        <div className="arrows">
                                                            <div className="arrow plus gradient"><span className="ir"><i
                                                                className="icon fa fa-sort-asc"></i></span></div>
                                                            <div className="arrow minus gradient"><span className="ir"><i
                                                                className="icon fa fa-sort-desc"></i></span></div>
                                                        </div>
                                                        <input type="number"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                                            min="1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="add-btn">
                                                <Link className="btn btn-primary" onClick={Themvaogio}><i className="fa fa-shopping-cart inner-right-vs"></i> ADD TO
                                                    CART</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs inner-bottom-xs">
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
                                    <li className="active"><a data-toggle="tab" href="#description">DESCRIPTION</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <div className="tab-content">
                                    <div id="description" className="tab-pane in active">
                                        <div className="product-tab">
                                            <p className="text">{product[0]?.MoTa}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default XemChiTiet;

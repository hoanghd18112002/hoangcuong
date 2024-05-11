import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
const Header = () => {
    const history = useNavigate()
    const dispatch = useDispatch();
    const navige = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    let totalQuantity = useSelector((state) => state.cart.totalQuantity);
    let totalPrice = useSelector((state) => state.cart.totalPrice);
    const user = useSelector((state) => state.user.account);

    const onLogout = () => {
        dispatch(logout());
        console.log(dispatch(logout()))
        navige('/');
    };
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const onSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            // Push to the search results page with the search term as a query parameter
            history(`/timkiem?query=${encodeURIComponent(searchTerm)}`);
        } else {
            console.error("Search term is undefined or empty.");
            // You may handle this case based on your requirements, such as showing an error message to the user.
        }
        console.log(searchTerm)
    };

    return (
        <header className="header-style-1">
            {/* TOP MENU */}
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                {user?.account?.HoTen ? (
                                    <>
                                        <li className="myaccount">
                                            <Link >
                                                <span>{user.account.HoTen}</span>
                                            </Link>
                                        </li>
                                        <li className="login"><Link onClick={onLogout}><span>Logout</span></Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li className="myaccount"><a href="/login"><span>Đăng nhập</span></a></li>
                                        <li className="login"><a href='/dangky'><span>Đăng ký</span></a></li>
                                    </>
                                )}
                            </ul>

                        </div>
                        <div className="cnt-block">

                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                            <div className="logo"> <Link> <img src="assets/images/logo.png" alt="logo" /> </Link> </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                            <div className="search-area">
                                <form onSubmit={onSearch}>
                                    <div className="control-group">
                                        <input className="search-field"
                                            value={searchTerm}
                                            onChange={handleChange}
                                            placeholder="Search here..." />
                                        <button type="submit" className="search-button"></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                            <div className="dropdown dropdown-cart">
                                <a href="/" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                                    <div className="items-cart-inner">
                                        <div className="basket">
                                            <div className="basket-item-count"  ><span className="count" onClick={() => navige(`giohang`)}>{totalQuantity}</span></div>
                                            <div className="total-price-basket"> <span className="lbl">Shopping Cart</span>{totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <span className="value">{ }</span> </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav animate-dropdown">
                <div className="container">
                    <div className="yamm navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed"
                                type="button">
                                <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span
                                    className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        </div>
                        <div className="nav-bg-class">
                            <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                <div className="nav-outer">
                                    <ul className="nav navbar-nav">
                                        <li className="active dropdown"> <Link to="/">Home</Link> </li>
                                        <li className="dropdown hidden-sm"> <Link to="/sanpham">Sản phẩm</Link> </li>
                                        <li className="dropdown"> <Link to="/tintuc">Tin tức</Link> </li>
                                        <li className="dropdown"> <Link to="/lienhe">Liên hệ</Link> </li>

                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

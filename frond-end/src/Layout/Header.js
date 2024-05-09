import React from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
    let totalQuantity = useSelector((state) => state.cart.totalQuantity);
    let totalPrice = useSelector((state) => state.cart.totalPrice);
    console.log(totalQuantity)
    const user = useSelector((state) => state.user.account);
    console.log(user)
    return (
        <header className="header-style-1">
            {/* TOP MENU */}
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                <li className="myaccount"><a href="#"><span>My Account</span></a></li>
                                <li className="wishlist"><a href="#"><span>Wishlist</span></a></li>
                                <li className="header_cart hidden-xs"><a href="#"><span>My Cart</span></a></li>
                                <li className="check"><a href="#"><span>Checkout</span></a></li>
                                <li className="login"><a href="#"><span>Login</span></a></li>
                            </ul>
                        </div>
                        <div className="cnt-block">
                            <ul className="list-unstyled list-inline">
                                <li className="dropdown dropdown-small">
                                    <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                        <span className="value">USD </span><b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">INR</a></li>
                                        <li><a href="#">GBP</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-small lang">
                                    <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                        <span className="value">English </span><b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">German</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            {/* MAIN HEADER */}
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                            <div className="logo"> <a href="home.html"> <img src="assets/images/logo.png" alt="logo" /> </a> </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
                            <div className="search-area">
                                <form>
                                    <div className="control-group">
                                        <input className="search-field" placeholder="Search here..." />
                                        <a className="search-button" href="#"></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                            <div className="dropdown dropdown-cart">
                                <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                                    <div className="items-cart-inner">
                                        <div className="basket">
                                            <div className="basket-item-count"><span className="count">{totalQuantity}</span></div>
                                            <div className="total-price-basket"> <span className="lbl">Shopping Cart</span>{totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} <span className="value">{ }</span> </div>
                                        </div>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="cart-item product-summary">
                                            <div className="row">
                                                <div className="col-xs-4">
                                                    <div className="image"> <a href="detail.html"><img src="assets/images/products/p4.jpg" alt="" /></a> </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <h3 className="name"><a href="index8a95.html?page-detail">Simple Product</a></h3>
                                                    <div className="price">$600.00</div>
                                                </div>
                                                <div className="col-xs-1 action"> <a href="#"><i className="fa fa-trash"></i></a> </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <hr />
                                        <div className="clearfix cart-total">
                                            <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                                            <div className="clearfix"></div>
                                            <a href="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a>
                                        </div>
                                    </li>
                                </ul>
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
                                        <li className="active dropdown"> <a href="home.html">Home</a> </li>
                                        <li className="dropdown hidden-sm"> <a href="category.html">Watches</a> </li>
                                        <li className="dropdown"> <a href="contact.html">Jewellery</a> </li>
                                        <li className="dropdown"> <a href="contact.html">Shoes</a> </li>
                                        <li className="dropdown"> <a href="contact.html">Kids & Girls</a> </li>
                                    </ul>
                                    {/* /.navbar-nav */}
                                    <div className="clearfix"></div>
                                </div>
                                {/* /.nav-outer */}
                            </div>
                            {/* /.navbar-collapse */}
                        </div>
                        {/* /.nav-bg-class */}
                    </div>
                    {/* /.navbar-default */}
                </div>
                {/* /.container-class */}
            </div>
        </header>
    );
}

export default Header;

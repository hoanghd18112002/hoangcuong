import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer id="footer" className="footer color-bg">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="address-block">
                                <div className="module-body">
                                    <ul className="toggle-footer" style={{}}>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <p> + (888) 123-4567 / + (888) 456-7890</p>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="pull-left">
                                                <span className="icon fa-stack fa-lg">
                                                    <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <span><Link>marazzo@themesground.com</Link></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Customer Service</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="Contact us">My Account</Link></li>
                                    <li><Link title="About us">Order History</Link></li>
                                    <li><Link title="faq">FAQ</Link></li>
                                    <li><Link title="Popular Searches">Specials</Link></li>
                                    <li className="last"><Link title="Where is my order?">Help Center</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Corporation</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="Your Account">About us</Link></li>
                                    <li><Link title="Information">Customer Service</Link></li>
                                    <li><Link title="Addresses">Company</Link></li>
                                    <li><Link title="Addresses">Investor Relations</Link></li>
                                    <li className="last"><Link title="Orders History">Advanced Search</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="module-heading">
                                <h4 className="module-title">Why Choose Us</h4>
                            </div>
                            <div className="module-body">
                                <ul className='list-unstyled'>
                                    <li className="first"><Link title="About us">Shopping Guide</Link></li>
                                    <li><Link title="Blog">Blog</Link></li>
                                    <li><Link title="Company">Company</Link></li>
                                    <li><Link title="Investor Relations">Investor Relations</Link></li>
                                    <li className=" last"><Link title="Suppliers">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-bar">
                <div className="container">
                    <div className="col-xs-12 col-sm-4 no-padding social">
                        <ul className="link">
                            <li className="fb pull-left"><Link target="_blank" rel="nofollow" title="Facebook"></Link></li>
                            <li className="tw pull-left"><Link target="_blank" rel="nofollow" title="Twitter"></Link></li>
                            <li className="googleplus pull-left"><Link target="_blank" rel="nofollow" title="GooglePlus"></Link></li>
                            <li className="rss pull-left"><Link target="_blank" rel="nofollow" title="RSS"></Link></li>
                            <li className="pintrest pull-left"><Link target="_blank" rel="nofollow" title="PInterest"></Link></li>
                            <li className="linkedin pull-left"><Link target="_blank" rel="nofollow" title="Linkedin"></Link></li>
                            <li className="youtube pull-left"><Link target="_blank" rel="nofollow" title="Youtube"></Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 no-padding copyright"><Link target="_blank"
                        href="https://www.templateshub.net">Templates Hub</Link> </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;

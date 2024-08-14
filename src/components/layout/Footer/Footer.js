import { Link } from "react-router-dom";
import Subscribe from "./FooterNewsletter";
import AppLogo from "assets/images/eazyWay-logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className=" bottom-0 w-100 ">
            <Subscribe />
            <footer className="footer">
                <div className="container py-5 ">
                    <div className="row  justify-content-between align-items-center">
                        <div className="col-lg-3 me-auto  pe-md-5">
                            <div className="d-flex align-items-center  d-lg-block">
                                <img
                                    src={AppLogo}
                                    alt="EazyWay MarketPlace"
                                    className="app-logo"
                                />
                                <p className="text-secondary">
                                    Morbi cursus porttitor enim lobortis
                                    molestie.
                                    <br /> Duis gravida turpis dui, eget
                                    bibendum magna congue nec.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8 ">
                            <div className="row  gap-4 gap-md-0">
                                <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                    <p className="text-white nav-link">
                                        My Account
                                    </p>
                                    <Link to="" className="nav-link">
                                        My Account
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Order History
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Shopping Cart
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Wishlist
                                    </Link>
                                </nav>
                                <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                    <p className="text-white nav-link">Helps</p>
                                    <Link to="" className="nav-link">
                                        Contact
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Faqs
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Terms & Condition
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Privacy Policy
                                    </Link>
                                </nav>
                                <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                    <p className="text-white nav-link">Proxy</p>
                                    <Link to="" className="nav-link">
                                        About
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Shop
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Product
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Track Order
                                    </Link>
                                </nav>
                                <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                    <p className="text-white nav-link">
                                        Categories
                                    </p>
                                    <Link to="" className="nav-link">
                                        Fruits & Vegetables
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Frozen Food
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Diary & Breakfast
                                    </Link>
                                    <Link to="" className="nav-link">
                                        Beauty & Body
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

import { Link, Outlet } from "react-router-dom";
import Subscribe from "./FooterNewsletter";
import AppLogo from "assets/images/eazyWay-logo.png";
import "./Footer.css";
import ApplePay from "assets/images/ApplePay.svg";
import Discover from "assets/images/Discover.svg";
import Mastercard from "assets/images/Mastercard.svg";
import SecurePayment from "assets/images/SecurePayment.svg";
import Visa from "assets/images/Visa.svg";
import { useAuth } from "shared/context/AuthContext";
import { useContext } from "react";
import ProductCategoryContext from "shared/context/ProductCategoryContext";

const Footer = () => {
    const { user } = useAuth();
    const { categories } = useContext(ProductCategoryContext);
    return (
        <>
            <Outlet />
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
                                    {/* <p className="text-secondary">
                                        Morbi cursus porttitor enim lobortis
                                        molestie.
                                        <br /> Duis gravida turpis dui, eget
                                        bibendum magna congue nec.
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-8 ">
                                <div className="row  gap-4 gap-md-0">
                                    <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                        <p className="text-white nav-link">
                                            My Account
                                        </p>
                                        <Link
                                            to={
                                                user
                                                    ? user.privilege === "buyer"
                                                        ? "/customer"
                                                        : "/merchant"
                                                    : "/login"
                                            }
                                            className="nav-link">
                                            My Account
                                        </Link>
                                        <Link
                                            to={
                                                user
                                                    ? user.privilege === "buyer"
                                                        ? "/customer/order_history"
                                                        : "merchant/order_history"
                                                    : "/login"
                                            }
                                            className="nav-link">
                                            Order History
                                        </Link>
                                        <Link
                                            to="/shopping_cart"
                                            className="nav-link">
                                            Shopping Cart
                                        </Link>
                                        <Link
                                            to="/wishlist"
                                            className="nav-link">
                                            Wishlist
                                        </Link>
                                    </nav>
                                    <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                        <p className="text-white nav-link">
                                            Helps
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="nav-link">
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
                                        <p className="text-white nav-link">
                                            Proxy
                                        </p>
                                        <Link to="" className="nav-link">
                                            About
                                        </Link>
                                        <Link
                                            to="/products"
                                            className="nav-link">
                                            Shop
                                        </Link>
                                        <Link
                                            to="/products"
                                            className="nav-link">
                                            Product
                                        </Link>
                                    </nav>
                                    <nav className="nav col-md-3 col-5 footer-nav flex-column">
                                        <p className="text-white nav-link">
                                            Categories
                                        </p>
                                        {categories &&
                                            categories
                                                .slice(0, 4)
                                                .map((category, index) => (
                                                    <Link
                                                        to={`/products?categoryId=${category._id}`}
                                                        className="nav-link">
                                                        {category.title}
                                                    </Link>
                                                ))}

                                        {/* <Link to="" className="nav-link">
                                            Frozen Food
                                        </Link>
                                        <Link to="" className="nav-link">
                                            Diary & Breakfast
                                        </Link>
                                        <Link to="" className="nav-link">
                                            Beauty & Body
                                        </Link> */}
                                    </nav>
                                </div>
                            </div>
                            <div className="mt-4 mt-lg-0 footer-contact">
                                <a
                                    className="text-white border-bottom border-primary pb-2"
                                    href="tel:+18127273010">
                                    +18127273010
                                </a>
                                <span className="px-3 text-secondary">or</span>
                                <a
                                    href="mailto:deazywaymarket@gmail.com"
                                    className="text-white border-bottom border-primary pb-2">
                                    deazywaymarket@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="pt-4">
                            <hr className="text-white" />
                        </div>
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <p className="text-secondary d-none d-lg-block">
                                D-EazyWay Marketplace &copy; 2024 All Rights
                                Reserved
                            </p>
                            <div className="footer-payment d-flex gap-2 flex-wrap gap-md-3 mt-4 mt-lg-0">
                                <div>
                                    <img
                                        src={ApplePay}
                                        alt="Apple Pay"
                                        className=""
                                    />
                                </div>
                                <div>
                                    <img src={Visa} alt="Visa" className="" />
                                </div>
                                <div>
                                    <img
                                        src={Discover}
                                        alt="Discover"
                                        className=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={Mastercard}
                                        alt="Master card"
                                        className=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={SecurePayment}
                                        alt="Secure Payment"
                                        className="secure-payment"
                                    />
                                </div>
                            </div>
                            <p className="text-secondary d-lg-none mt-3">
                                D-EazyWay Marketplace &copy; 2024 All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;

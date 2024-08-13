import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";
import { SearchIcon } from "assets/icons";

const Navbar = () => {
    return (
        <div>
            <nav
                class="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark">
                <div class="container">
                    <button
                        class="navbar-toggler btn outline-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <FaBars className="text-light" />
                    </button>
                    <div className="d-block d-md-none">
                        <form className=" d-flex align-items-center justify-content-between search-form rounded-pill p-1 px-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control search-input border-0 shadow-none"
                            />
                            <SearchIcon />
                        </form>
                    </div>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to="home" className="nav-link ">
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="shop" className="nav-link">
                                    Shop
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="blog" className="nav-link">
                                    Blog
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="about" className="nav-link">
                                    About Us
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="contact" className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="home" className="nav-link ">
                                    Login
                                </Link>
                            </li>
                            <div className="vl my-2"></div>
                            <li class="nav-item">
                                <Link to="shop" className="nav-link">
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

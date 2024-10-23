import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";
import { SearchIcon } from "assets/icons";
import { useContext } from "react";
import { AuthContext } from "shared/context/AuthContext";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated } = useContext(AuthContext);
    // const [showLogoutAlert, setShowLogoutAlert] = useState(false);
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     logout();
    //     setShowLogoutAlert(true);
    //     setTimeout(() => {
    //         setShowLogoutAlert(false);
    //         navigate("/");
    //     }, 3000);
    // };
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark">
                <div className="container">
                    <button
                        className="navbar-toggler btn outline-none"
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
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">
                                    Shop
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">
                                    Blog
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav ms-auto mb-2 mb-lg-0">
                            {!isAuthenticated && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link ">
                                            Login
                                        </Link>
                                    </li>
                                    <div className="vl my-2"></div>
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">
                                            SignUp
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* {showLogoutAlert && (
                <div
                    class="alert alert-primary text-center p-2 fw-medium  "
                    style={{ fontSize: "14px" }}
                    role="alert">
                    Logout Successful!
                </div>
            )} */}
        </div>
    );
};

export default Navbar;

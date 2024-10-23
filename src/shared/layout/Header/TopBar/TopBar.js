import "./TopBar.css";
import AppLogo from "assets/images/eazyWay-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon, WishListIcon } from "assets/icons";
import { AuthContext } from "shared/context/AuthContext";
import { useContext, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

const TopBar = () => {
    const { user } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/products?q=${searchQuery}`);
    };
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center px-lg-3">
                <div>
                    <img
                        src={AppLogo}
                        alt="EazyWay MarketPlace"
                        className="app-logo"
                    />
                </div>
                <div className="d-none d-md-block">
                    <form
                        onSubmit={handleSearch}
                        className=" d-flex align-items-center justify-content-between search-form rounded-pill p-1 px-3">
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-control search-input border-0 shadow-none opacity"
                        />
                        <SearchIcon />
                    </form>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-4">
                    {user && user.privilege === "merchant" ? (
                        <>
                            <Link to="/merchant/account_settings">
                                <CiSettings />
                            </Link>
                            <Link to="/">
                                <FaRegBell />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/wishlist">
                                <WishListIcon />
                            </Link>
                            <Link to="/shopping_cart">
                                <CartIcon />
                            </Link>
                        </>
                    )}
                    <Link
                        to={
                            user
                                ? user.privilege === "buyer"
                                    ? "/customer"
                                    : user.privilege === "merchant"
                                    ? "/merchant"
                                    : "/"
                                : "/login"
                        }>
                        {user && user.image ? (
                            <img
                                src={user.image.url}
                                alt="User"
                                className="rounded-circle"
                                height={40}
                                width={40}
                            />
                        ) : (
                            <UserIcon />
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

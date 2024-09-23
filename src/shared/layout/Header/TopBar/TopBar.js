import "./TopBar.css";
import AppLogo from "assets/images/eazyWay-logo.png";
import { Link } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon, WishListIcon } from "assets/icons";
import { AuthContext } from "shared/context/AuthContext";
import { useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

const TopBar = () => {
    const { user } = useContext(AuthContext);
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
                    <form className=" d-flex align-items-center justify-content-between search-form rounded-pill p-1 px-3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control search-input border-0 shadow-none opacity"
                        />
                        <SearchIcon />
                    </form>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-4">
                    {user ? (
                        user.privilege === "buyer" ? (
                            <>
                                <Link to="/wishlist">
                                    <WishListIcon />
                                </Link>
                                <Link to="/shopping_cart">
                                    <CartIcon />
                                </Link>
                            </>
                        ) : user.privilege === "merchant" ? (
                            <>
                                <Link to="/wishlist">
                                    <CiSettings />
                                </Link>
                                <Link to="/shopping_cart">
                                    <FaRegBell />
                                </Link>
                            </>
                        ) : (
                            ""
                        )
                    ) : (
                        ""
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

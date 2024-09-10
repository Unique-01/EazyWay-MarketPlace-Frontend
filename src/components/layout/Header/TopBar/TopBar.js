import "./TopBar.css";
import AppLogo from "assets/images/eazyWay-logo.png";
import { Link } from "react-router-dom";
import { CartIcon, SearchIcon, UserIcon, WishListIcon } from "assets/icons";
import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

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
                <div className="d-flex justify-content-between gap-4">
                    <Link to="/wishlist">
                        <WishListIcon />
                    </Link>
                    <Link to="/shopping_cart">
                        <CartIcon />
                    </Link>
                    <Link
                        to={
                            user && user.privilege === "buyer"
                                ? "/customer"
                                : "/merchant"
                        }>
                        {user && user.profilePicture ? (
                            <img src={user.profilePicture} alt="User" />
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

import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { BsFillBasket3Fill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import "./SideNav.css";

const SideNav = () => {
    return (
        <div className="card ">
            <div className="card-header bg-white pb-0 border-primary pt-3 d-none d-lg-block" >
                <h5 className="card-title">Navigation</h5>
            </div>
            <ul className="list-group list-group-flush py-2">
                <NavLink
                    to="/customer"
                    activeClassName="side-nav-active"
                    end
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <MdDashboard className="side-nav-icon" /><span className="d-none d-lg-block"> Dashboard</span>
                </NavLink>
                <NavLink
                    to="/customer/order_history"
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <LuRefreshCcw className="side-nav-icon" /> <span className="d-none d-lg-block">Order History</span>
                </NavLink>
                <NavLink
                    to="/wishlist"
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <LuHeart className="side-nav-icon" /> <span className="d-none d-lg-block">Wishlist</span>
                </NavLink>
                <NavLink
                    to="/shopping_cart"
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <BsFillBasket3Fill className="side-nav-icon" />
                    <span className="d-none d-lg-block">Shopping Cart</span>
                </NavLink>
                <NavLink
                    to="/customer/account_settings"
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <IoSettingsOutline  className="side-nav-icon" />
                    <span className="d-none d-lg-block">Settings</span>
                </NavLink>
                <NavLink
                    to="/logout"
                    className=" text-capitalize side-nav-link list-group-item border-0">
                    <TbLogout  className="side-nav-icon" /> <span className="d-none d-lg-block">Logout</span>
                </NavLink>
            </ul>
        </div>
    );
};

export default SideNav;
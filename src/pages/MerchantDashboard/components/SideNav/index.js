import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { AiOutlineNodeExpand } from "react-icons/ai";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import "./SideNav.css";

const SideNav = ({ onCollapse, isOpen }) => {
    const handleCollapse = () => {
        onCollapse();
    };
    return (
        <div className=" merchant-side-nav position-sticky top-0 p-0 ">
            <nav className="h-100 bg-white">
                <div className="d-md-none">
                    <button
                        title="Collapse Side Bar"
                        className="collapse-btn "
                        onClick={handleCollapse}>
                        {isOpen ? (
                            <AiOutlineNodeCollapse />
                        ) : (
                            <AiOutlineNodeExpand />
                        )}
                    </button>
                </div>
                <div
                    className={` d-flex flex-column h-100 bg-white shadow-sm ${
                        isOpen ? "d-block" : "d-none"
                    }`}>
                    <NavLink to="/merchant" className="nav-link w-100">
                        <MdDashboard className="nav-icon" />
                        <span className="">Dashboard</span>
                    </NavLink>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <AiFillProduct className="nav-icon" />
                                    <span className="">Products</span>
                                </button>
                            </div>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div>
                                        <NavLink
                                            to="/merchant/products"
                                            className="nav-link w-100">
                                            Product List
                                        </NavLink>
                                    </div>
                                    <div>
                                        <NavLink className="nav-link w-100">
                                            Categories
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/merchant/orders" className="nav-link w-100">
                        <GoChecklist className="nav-icon" />
                        <span className="">Orders</span>
                    </NavLink>
                    <NavLink className="nav-link w-100">
                        <FaChartLine className="nav-icon" />
                        <span className="">Sales Report</span>
                    </NavLink>
                    <NavLink className="nav-link w-100">
                        <IoMdSettings className="nav-icon" />
                        <span className="">Settings</span>
                    </NavLink>
                    <NavLink className="nav-link w-100 mt-auto mb-5">
                        <IoLogOut className="nav-icon" />
                        <span className="">Logout</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default SideNav;

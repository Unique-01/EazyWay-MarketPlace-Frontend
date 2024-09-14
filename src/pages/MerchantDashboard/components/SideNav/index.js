import { NavLink,Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const SideNav = () => {
    return (
        <div className="shadow-sm bg-white">
            <nav className="nav flex-column">
                <NavLink className="nav-link">
                    <MdDashboard />
                    Dashboard
                </NavLink>
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink className="dropdown-item" href="#">
                                Product List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="dropdown-item" href="#">
                                Categories
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </nav>
        </div>
    );
};

export default SideNav;

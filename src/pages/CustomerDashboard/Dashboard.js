import { AuthContext } from "context/AuthContext";
import { useContext } from "react";
import UserIcon from "assets/icons/user.svg";
import "./Dashboard.css";
import Loading from "components/common/Loading";
import { Link, Navigate } from "react-router-dom";
import RecentOrder from "./Components/OrderTable";
import OrderList from "./order.json";

const CustomerDashBoard = () => {
    const { user, isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card profile-card">
                        <div className="card-body d-flex align-items-center flex-column">
                            <div className=" pt-3">
                                <img
                                    src={user.image ? user.image.url : UserIcon}
                                    alt="User"
                                    className="account-settings-image"
                                />
                            </div>
                            <h5 className="card-title profileFullName pt-3">
                                {user.firstName} {user.lastName}
                            </h5>
                            <p className="userPrivilege">
                                {user.privilege === "buyer"
                                    ? "Customer"
                                    : "Merchant"}
                            </p>
                            <Link
                                to="/customer/account_settings"
                                className="btn btn-outline-primary rounded-pill profileEdit px-4 py-2">
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body profile-info-card">
                            <div>
                                <p className="profile-info-head">
                                    BILLING INFORMATION
                                </p>
                                <p className="profile-info">
                                    {user && user.billingInfo
                                        ? user.billingInfo
                                        : " 4140 Parker Rd. Allentown, New Mexico 31134"}
                                </p>
                            </div>
                            <div>
                                <p className="profile-info-head">EMAIL</p>
                                <p className="profile-info">{user.email}</p>
                            </div>
                            <div>
                                <p className="profile-info-head">
                                    PHONE NUMBER
                                </p>
                                <p className="profile-info">
                                    {user && user.telephone
                                        ? user.telephone
                                        : "(671) 555-0110"}
                                </p>
                            </div>
                            <Link
                                to=""
                                className="btn btn-outline-primary rounded-pill profileEdit px-4 py-2">
                                Edit Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <RecentOrder
                    orderList={OrderList}
                    heading="recent order"
                    limit={4}
                />
            </div>
        </div>
    );
};

export default CustomerDashBoard;

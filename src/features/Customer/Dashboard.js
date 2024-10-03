import { AuthContext } from "shared/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import UserIcon from "assets/icons/user.svg";
import "./Dashboard.css";
import Loading from "shared/components/Loading";
import { Link } from "react-router-dom";
import RecentOrder from "./Components/OrderTable";
// import OrderList from "./order.json";
import { useCustomerOrder } from "./context/OrderContext";

const CustomerDashBoard = () => {
    const { user, loading } = useContext(AuthContext);
    const [orderList, setOrderList] = useState([]);
    const { orders, loading: orderLoading } = useCustomerOrder();

    useEffect(() => {
        if (!orderLoading) {
            setOrderList(orders);
            console.log(orders);
        }
    }, [orderLoading, orders]);

    if (loading) {
        return <Loading />;
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
                                    {user.extras && user.extras.streetAddress}
                                </p>
                            </div>
                            <div>
                                <p className="profile-info-head">EMAIL</p>
                                <p className="profile-info">
                                    {user.extras && user.extras.email}
                                </p>
                            </div>
                            <div>
                                <p className="profile-info-head">
                                    PHONE NUMBER
                                </p>
                                <p className="profile-info">
                                    {user.extras && user.extras.telephone}
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
                    orderList={orderList}
                    heading="recent order"
                    limit={4}
                />
            </div>
        </div>
    );
};

export default CustomerDashBoard;

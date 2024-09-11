import { useParams } from "react-router-dom";
import Orders from "./order.json";
import { Link } from "react-router-dom";
import "./OrderDetails.css";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import Loading from "components/common/Loading";
import OrderProductTable from "./Components/OrderProductTable";

const CustomerOrderDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const { orderId } = useParams();

    const order = Orders.find((order) => order.id === orderId);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div>
                <div className="card ">
                    <div className="card-header order-details-header pb-2  py-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center poppins gap-3">
                                <p className="order-details-heading">
                                    Order Details
                                </p>
                                <p className="dot"></p>
                                <p className="order-details-date">
                                    {order.date}
                                </p>
                                <p className="dot"></p>
                                <p className="order-details-item-no">
                                    {order.total}
                                </p>
                            </div>
                            <p>
                                <Link
                                    to="/customer/order_history"
                                    className="fw-semibold">
                                    Back to List
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="card order-details-address-card rounded-end-0">
                                            <div className="card-header order-details-header py-3">
                                                Billing address
                                            </div>
                                            <div className="card-body">
                                                <p className="user-name">
                                                    {user.firstName} &nbsp;
                                                    {user.lastName}
                                                </p>
                                                <p className="order-address">
                                                    {user && user.billingInfo
                                                        ? user.billingInfo
                                                        : " 4140 Parker Rd. Allentown, New Mexico 31134"}
                                                </p>
                                                <p className="email-head">
                                                    email
                                                </p>
                                                <p className="email">
                                                    {user.email}
                                                </p>
                                                <p className="phone-head">
                                                    phone
                                                </p>
                                                <p className="phone">
                                                    {user && user.telephone
                                                        ? user.telephone
                                                        : "(671) 555-0110"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card order-details-address-card rounded-start-0">
                                            <div className="card-header order-details-header py-3">
                                                Shipping address
                                            </div>
                                            <div className="card-body">
                                                <p className="user-name">
                                                    {user.firstName} &nbsp;
                                                    {user.lastName}
                                                </p>
                                                <p className="order-address">
                                                    {user && user.billingInfo
                                                        ? user.billingInfo
                                                        : " 4140 Parker Rd. Allentown, New Mexico 31134"}
                                                </p>
                                                <p className="email-head">
                                                    email
                                                </p>
                                                <p className="email">
                                                    {user.email}
                                                </p>
                                                <p className="phone-head">
                                                    phone
                                                </p>
                                                <p className="phone">
                                                    {user && user.telephone
                                                        ? user.telephone
                                                        : "(671) 555-0110"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card order-payment-card poppins">
                                    <div className="card-header d-flex justify-content-between order-details-header  pb-1">
                                        <div>
                                            <p>
                                                <span className="order-id-head">
                                                    order id:
                                                </span>
                                                <br />
                                                <span className="order-id">
                                                    #{order.id}
                                                </span>
                                            </p>
                                        </div>
                                        <span className="vr"></span>
                                        <div>
                                            <p>
                                                <span className="order-id-head">
                                                    payment method:
                                                </span>
                                                <br />
                                                <span className="order-id">
                                                    Paypal
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between pt-2">
                                            <span className="subtotal-head">
                                                Subtotal:
                                            </span>
                                            <br />
                                            <span className="subtotal">
                                                ${order.total}
                                            </span>
                                        </div>
                                        <hr className="mt-2" />
                                        <div className="d-flex justify-content-between pt-2">
                                            <span className="subtotal-head">
                                                Discount:
                                            </span>
                                            <br />
                                            <span className="subtotal">
                                                20%
                                            </span>
                                        </div>
                                        <hr className="mt-2" />
                                        <div className="d-flex justify-content-between pt-2">
                                            <span className="subtotal-head">
                                                Shipping:
                                            </span>
                                            <br />
                                            <span className="subtotal">
                                                Free
                                            </span>
                                        </div>
                                        <hr className="mt-2" />
                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="total-head">Total</p>
                                            <p className="text-primary total"> ${order.total}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 m-0 ">
                            <OrderProductTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerOrderDetails;

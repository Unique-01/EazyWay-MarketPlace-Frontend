import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./OrderDetails.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "shared/context/AuthContext";
import Loading from "shared/components/Loading";
import OrderProductTable from "./Components/OrderProductTable";
import { useCustomerOrder } from "./context/OrderContext";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import FormattedDate from "shared/components/FormattedDate";

const CustomerOrderDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const { orderId } = useParams();
    const { orders, loading: orderLoading } = useCustomerOrder();
    const [orderList, setOrderList] = useState();
    const [order, setOrder] = useState();

    useEffect(() => {
        if (!orderLoading) {
            setOrderList(orders);
        }
    }, [orders, orderLoading]);

    useEffect(() => {
        if (!orderLoading) {
            if (orderList) {
                const matchedOrder = orderList.find(
                    (order) => order._id === orderId
                );

                setOrder(matchedOrder);
                console.log(matchedOrder);
            }
        }
    }, [orderList, orderId, orderLoading]);

    if (loading || orderLoading) {
        return <Loading />;
    }

    if (!order) {
        return <NotFoundPage />;
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
                                    <FormattedDate date={order.createdAt} />
                                </p>
                                <p className="dot"></p>
                                <p className="order-details-item-no">
                                    ${order.amount}&nbsp;(
                                    {order.carts.length} Products)
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
                        <div className="row mb-5">
                            <div className="col-md-8 ">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="card order-details-address-card rounded-end-0">
                                            <div className="card-header order-details-header py-3">
                                                Billing address
                                            </div>
                                            <div className="card-body">
                                                <p className="user-name">
                                                    {user.extras.firstName}{" "}
                                                    &nbsp;
                                                    {user.extras.lastName}
                                                </p>
                                                <p className="order-address">
                                                    {user.extras &&
                                                        user.extras
                                                            .streetAddress}
                                                </p>
                                                <p className="email-head">
                                                    email
                                                </p>
                                                <p className="email">
                                                    {user.extras.email}
                                                </p>
                                                <p className="phone-head">
                                                    phone
                                                </p>
                                                <p className="phone">
                                                    {user.extras.telephone}
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
                                                    {user.extras.firstName}{" "}
                                                    &nbsp;
                                                    {user.extras.lastName}
                                                </p>
                                                <p className="order-address">
                                                    {user.extras &&
                                                        user.extras
                                                            .streetAddress}
                                                </p>
                                                <p className="email-head">
                                                    email
                                                </p>
                                                <p className="email">
                                                    {user.extras.email}
                                                </p>
                                                <p className="phone-head">
                                                    phone
                                                </p>
                                                <p className="phone">
                                                    {user.extras.telephone}
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
                                                    order id: {"\t"}
                                                </span>
                                                {/* <br /> */}
                                                <span className="order-id">
                                                    {order.itemId}
                                                </span>
                                            </p>
                                        </div>
                                        {/* <span className="vr"></span>
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
                                        </div> */}
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between pt-2">
                                            <span className="subtotal-head">
                                                Subtotal:
                                            </span>
                                            <br />
                                            <span className="subtotal">
                                                ${order.amount}
                                            </span>
                                        </div>
                                        {/* <hr className="mt-2" />
                                        <div className="d-flex justify-content-between pt-2">
                                            <span className="subtotal-head">
                                                Discount:
                                            </span>
                                            <br />
                                            <span className="subtotal">
                                                20%
                                            </span>
                                        </div> */}
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
                                            <p className="text-primary total">
                                                {" "}
                                                ${order.amount}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 m-0 ">
                            <OrderProductTable orderProduct={order.carts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerOrderDetails;

import { useParams } from "react-router-dom";
import Orders from "./order.json";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import "./OrderDetails.css"

const CustomerOrderDetails = () => {
    const { orderId } = useParams();

    const order = Orders.find((order) => order.id === orderId);

    return (
        <div>
            <div>
                <div className="card ">
                    <div className="card-header order-details-header pb-0 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center poppins">
                                <p className="order-details-heading"> Order Details</p> <p><GoDotFill /></p>
                                <p className="order-details-date">{order.date}</p>
                                <p><GoDotFill /></p>
                                <p>{order.total}</p>
                            </div>
                            <p>
                                <Link to="/customer/order_history">
                                    Back to List
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerOrderDetails;

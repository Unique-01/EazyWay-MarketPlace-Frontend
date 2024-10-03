import { useEffect, useState } from "react";
import OrderTable from "./Components/OrderTable";
import { useCustomerOrder } from "./context/OrderContext";
import Loading from "shared/components/Loading";
// import orderList from "./order.json"

const CustomerOrderHistory = () => {
    const { orders, loading } = useCustomerOrder();
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        if (!loading) {
            setOrderList(orders);
        }
    }, [loading, orders]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <OrderTable
                orderList={orderList}
                full
                heading="order history"
                itemsPerPage={10}
            />
        </div>
    );
};

export default CustomerOrderHistory;

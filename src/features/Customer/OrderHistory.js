import OrderTable from "./Components/OrderTable";
import orderList from "./order.json"

const CustomerOrderHistory = () => {
    return (
        <div>
            <OrderTable orderList={orderList} full heading="order history" itemsPerPage={10}/>
        </div>
    );
};

export default CustomerOrderHistory;
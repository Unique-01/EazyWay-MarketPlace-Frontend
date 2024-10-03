import { PiExport } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "./Orders.css";
import MerchantOrderTable from "../../components/MerchantOrderTable";
import { useMerchantOrder } from "features/Merchant/context/MerchantOrderContext";
import { useEffect, useState } from "react";

const MerchantOrderList = () => {
    const { orders, loading: orderLoading } = useMerchantOrder();
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        if (!orderLoading) {
            setOrderList(orders);
        }
    }, [orderLoading, orders]);
    return (
        <div className="merchant-orders py-4">
            <div>
                <div className="d-flex justify-content-between">
                    <h5>Orders</h5>
                    <div className="d-inline-flex gap-3">
                        <button className="btn export-btn">
                            <PiExport /> Export
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-4">
                    <button className="btn btn-white bg-white border filter-btn ">
                        <HiOutlineAdjustmentsHorizontal />
                        Filters
                    </button>
                </div>
                <div className="mt-4">
                    <MerchantOrderTable
                        orderList={orderList}
                        itemsPerPage={10}
                    />
                </div>
            </div>
        </div>
    );
};

export default MerchantOrderList;

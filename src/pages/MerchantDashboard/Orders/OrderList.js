import { PiExport } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "./Orders.css";
import MerchantOrderTable from "../components/MerchantOrderTable";
import Orders from "pages/CustomerDashboard/order.json";

const MerchantOrderList = () => {
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
                    <MerchantOrderTable orderList={Orders} itemsPerPage={10} />
                </div>
            </div>
        </div>
    );
};

export default MerchantOrderList;

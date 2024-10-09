import TopCustomers from "../components/TopCustomers";
import TopSellingProduct from "../components/TopSellingProduct";
import Totals from "../components/Totals";
import MerchantOrderTable from "../components/MerchantOrderTable";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useDashboardStat } from "../context/DashboardStatContext";
import { useMerchantOrder } from "../context/MerchantOrderContext";

const MerchantDashboard = () => {
    const [totals, setTotals] = useState({});
    const [customers, setCustomers] = useState([]);
    const [topSellingProducts, setTopSellingProducts] = useState([]);
    const { orders, loading: orderLoading } = useMerchantOrder();
    const [orderList, setOrderList] = useState([]);
    const {
        card,
        topSelling,
        salesUsers,
        loading: statLoading,
    } = useDashboardStat();
    useEffect(() => {
        if (!statLoading) {
            setTotals(card);
            setCustomers(salesUsers);
            setTopSellingProducts(topSelling);
            console.log(topSelling);
        }
    }, [statLoading, card, salesUsers, topSelling]);

    useEffect(() => {
        if (!orderLoading) {
            setOrderList(orders.slice(0, 8));
        }
    }, [orderLoading, orders]);

    return (
        <div className="py-5">
            <div style={{ minHeight: "100vh" }}>
                <Totals
                    sales={totals.sales}
                    orders={totals.orders}
                    products={totals.products}
                    customers={totals.customers}
                />
                <div className="row mt-4">
                    <div className="col-lg-8">
                        <TopSellingProduct
                            productList={topSellingProducts}
                            itemsPerPage={5}
                        />
                    </div>
                    <div className="col-lg-4">
                        <TopCustomers customers={customers} />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="d-flex bg-white justify-content-between align-items-center p-3">
                        <h5 className=" m-0 heading text-capitalize">
                            Recent Orders
                        </h5>
                        <div className="d-inline-flex gap-3">
                            <button className="btn btn-white border filter-btn">
                                <VscSettings
                                    className="me-1"
                                    style={{ fontSize: "16px" }}
                                />
                                Filters
                            </button>
                            <button className="btn btn-primary text-white filter-btn fw-semibold">
                                See More
                            </button>
                        </div>
                    </div>
                    <MerchantOrderTable
                        orderList={orderList}
                        itemsPerPage={4}
                        full={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default MerchantDashboard;

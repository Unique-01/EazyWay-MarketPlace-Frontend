import TopSellingProduct from "./components/TopSellingProduct";
import Totals from "./components/Totals";
import products from "pages/Products/products.json";

const MerchantDashboard = () => {
    return (
        <div className="py-5">
            <div style={{ minHeight: "100vh" }}>
                <Totals
                    sales={"10,550"}
                    orders={"1,200"}
                    products={700}
                    customers={500}
                />
                <div className="row mt-4">
                    <div className="col-lg-8">
                        <TopSellingProduct
                            productList={products}
                            itemsPerPage={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantDashboard;

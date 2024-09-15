import Totals from "./components/Totals";

const MerchantDashboard = () => {
    return (
        <div className="py-5">
            <div style={{minHeight:"100vh"}}> 
                <Totals
                    sales={"10,550"}
                    orders={"1,200"}
                    products={700}
                    customers={500}
                />
            </div>
        </div>
    );
};

export default MerchantDashboard;

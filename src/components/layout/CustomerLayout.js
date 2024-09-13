import Loading from "components/common/Loading";
import { AuthContext } from "context/AuthContext";
import SideNav from "pages/CustomerDashboard/Components/SideNav";
import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const CustomerLayout = () => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (!isAuthenticated) {
        return <Navigate to={`/login/customer?redirect_uri=${location.pathname}`} />;
    }

    return (
        <div>
            <div className="container mb-5">
                <div className="row g-2 g-md-4 pb-5 ">
                    <div className="col-2 col-lg-3 pe-md-4 pe-md-0">
                        <div className="position-sticky top-0">
                            <SideNav />
                        </div>
                    </div>
                    <div className="col-10 col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerLayout;

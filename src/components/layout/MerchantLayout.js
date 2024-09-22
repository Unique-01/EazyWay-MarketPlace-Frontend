import Loading from "components/common/Loading";
import { AuthContext } from "context/AuthContext";
import { NotificationContext } from "context/NotificationContext";
import SideNav from "pages/MerchantDashboard/components/SideNav";
import React, { useContext, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const MerchantLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { isAuthenticated, loading, user } = useContext(AuthContext);
    const { showNotification } = useContext(NotificationContext);
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (!isAuthenticated || user.privilege !== "merchant") {
        showNotification("You are not authorized to access this page", "danger");
        return (
            <Navigate
                to={`/login/merchant?redirect_uri=${location.pathname}`}
            />
        );
    }

    const handleSideBarCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-light">
            <div className="row w-100">
                <div
                    className={`col-lg-2 col-md-3 ${
                        isOpen ? "col-5" : "col-1"
                    }`}>
                    <SideNav
                        onCollapse={handleSideBarCollapse}
                        isOpen={isOpen}
                    />
                </div>
                <div
                    className={`col-lg-10 col-md-9 ${
                        isOpen ? "col-7" : "col-11"
                    }   `}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MerchantLayout;

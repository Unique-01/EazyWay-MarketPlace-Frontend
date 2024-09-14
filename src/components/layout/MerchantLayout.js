import SideNav from "pages/MerchantDashboard/components/SideNav";
import React from "react";
import { Outlet } from "react-router-dom";

const MerchantLayout = () => {
    return (
        <div className="bg-light">
            <div className="row">
                <div className="col-lg-2 col-md-3">
                    <SideNav />
                </div>
                <div className="col-lg-10 col-md-9 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MerchantLayout;

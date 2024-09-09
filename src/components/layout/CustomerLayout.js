import SideNav from "pages/CustomerDashboard/Components/SideNav";
import React from "react";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SideNav />
                    </div>
                    <div className="col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerLayout;
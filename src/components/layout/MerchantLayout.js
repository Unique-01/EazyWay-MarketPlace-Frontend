import SideNav from "pages/MerchantDashboard/components/SideNav";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const MerchantLayout = () => {
    const [isOpen, setIsOpen] = useState(true);

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

import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./TabComponent.css";

function TabComponent({ description }) {
    const [activeKey, setActiveKey] = useState("1");

    const handleSelect = (key) => setActiveKey(key);

    return (
        <div>
            <Tabs
                activeKey={activeKey}
                onSelect={handleSelect}
                className="custom-tabs">
                <Tab
                    eventKey="1"
                    title={
                        <span
                            className={`custom-tab poppins ${
                                activeKey === "1" ? "active-tab" : ""
                            }`}>
                            Description
                        </span>
                    }>
                    <p className="tab-content">{description}</p>
                </Tab>
                <Tab
                    eventKey="2"
                    title={
                        <span
                            className={`custom-tab poppins ${
                                activeKey === "2" ? "active-tab" : ""
                            }`}>
                            Additional Information
                        </span>
                    }>
                    <p className="tab-content">{description}</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TabComponent;

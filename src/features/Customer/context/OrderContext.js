import React, { createContext, useState, useEffect, useContext } from "react";
import config from "config";
import { useAuth } from "shared/context/AuthContext";
import { apiClient } from "shared/api/apiClient";

const CustomerOrderContext = createContext();

export const CustomerOrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            if (!userLoading && user && user.privilege === "buyer") {
                try {
                    const response = await apiClient.get(
                        `${config.API_BASE_URL}/product/order`
                    );
                    const orderResponse = response.data.data.docs;
                    const sortedOrders = [...orderResponse].sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );

                    setOrders(sortedOrders);
                } catch (error) {
                    console.error("Error fetching orders:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchOrders();
    }, [userLoading, user]);

    return (
        <CustomerOrderContext.Provider value={{ orders, loading }}>
            {children}
        </CustomerOrderContext.Provider>
    );
};

export const useCustomerOrder = () => useContext(CustomerOrderContext);

export default CustomerOrderContext;

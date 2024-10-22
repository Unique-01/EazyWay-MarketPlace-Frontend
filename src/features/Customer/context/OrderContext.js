import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    useCallback,
} from "react";
import config from "config";
import { useAuth } from "shared/context/AuthContext";
import { apiClient } from "shared/api/apiClient";

const CustomerOrderContext = createContext();

export const CustomerOrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    const fetchOrders = useCallback(async () => {
        if (!userLoading && user && user.privilege === "buyer") {
            try {
                const response = await apiClient.get(
                    `${config.API_BASE_URL}/product/order`
                );
                setCurrentPage(response.data.data.page);
                setHasNextPage(response.data.data.hasNextPage);

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
    }, [userLoading, user]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await apiClient.get(
                `${config.API_BASE_URL}/product/order?page=${currentPage + 1}`
            );
            console.log(response.data);
            setHasNextPage(response.data.data.hasNextPage);
            setOrders((prevOrders) => [
                ...prevOrders,
                ...response.data.data.docs,
            ]);
        } catch (err) {
            console.log("Error fetching more orders:", err);
        } finally {
            setMoreLoading(false);
        }
    };

    return (
        <CustomerOrderContext.Provider
            value={{
                orders,
                loading,
                fetchOrders,
                loadMore,
                moreLoading,
                hasNextPage,
            }}>
            {children}
        </CustomerOrderContext.Provider>
    );
};

export const useCustomerOrder = () => useContext(CustomerOrderContext);

export default CustomerOrderContext;

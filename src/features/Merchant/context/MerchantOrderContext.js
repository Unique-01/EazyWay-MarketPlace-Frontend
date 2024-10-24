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

const MerchantOrderContext = createContext();

export const MerchantOrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    // const fetchOrders = useCallback(async () => {
    //     if (!userLoading && user && user.privilege === "merchant") {
    //         try {
    //             const response = await apiClient.get(
    //                 `${config.API_BASE_URL}/product/order/merchant`
    //             );

    //             setCurrentPage(response.data.data.page);
    //             setHasNextPage(response.data.data.hasNextPage);

    //             const orderResponse = response.data.data.docs;
    //             const sortedOrders = [...orderResponse].sort(
    //                 (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    //             );
    //             console.log(sortedOrders);
    //             setOrders(sortedOrders);
    //         } catch (error) {
    //             console.error("Error fetching orders:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    // }, [userLoading, user]);

    // useEffect(() => {
    //     fetchOrders();
    // }, [fetchOrders]);
    const fetchOrders = useCallback(async () => {
        try {
            const response = await apiClient.get(
                `${config.API_BASE_URL}/product/order/merchant`
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
    }, []);

    useEffect(() => {
        if (!userLoading && user && user.privilege === "merchant") {
            fetchOrders();
        }
    }, [fetchOrders, userLoading, user]);

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await apiClient.get(
                `${config.API_BASE_URL}/product/order/merchant?page=${
                    currentPage + 1
                }`
            );
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
        <MerchantOrderContext.Provider
            value={{
                orders,
                loading,
                fetchOrders,
                loadMore,
                moreLoading,
                hasNextPage,
            }}>
            {children}
        </MerchantOrderContext.Provider>
    );
};

export const useMerchantOrder = () => useContext(MerchantOrderContext);

export default MerchantOrderContext;

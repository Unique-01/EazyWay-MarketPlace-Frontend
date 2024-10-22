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

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [payments, setPayment] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    const fetchPayments = useCallback(async () => {
        if (!userLoading && user && user.privilege === "merchant") {
            try {
                const response = await apiClient.get(
                    `${config.API_BASE_URL}/product/payment/merchant`
                );

                setCurrentPage(response.data.data.page);
                setHasNextPage(response.data.data.hasNextPage);
                const paymentResponse = response.data.data.docs;
                const sortedPayment = [...paymentResponse].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                setPayment(sortedPayment);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        }
    }, [userLoading, user]);

    useEffect(() => {
        fetchPayments();
    }, [fetchPayments]);

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await apiClient.get(
                `${config.API_BASE_URL}/product/payment/merchant?page=${
                    currentPage + 1
                }`
            );
            console.log(response.data);
            setHasNextPage(response.data.data.hasNextPage);
            setPayment((prevPayments) => [
                ...prevPayments,
                ...response.data.data.docs,
            ]);
        } catch (err) {
            console.log("Error fetching more payments:", err);
        } finally {
            setMoreLoading(false);
        }
    };

    return (
        <PaymentContext.Provider
            value={{
                payments,
                loading,
                fetchPayments,
                loadMore,
                moreLoading,
                hasNextPage,
            }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => useContext(PaymentContext);

export default PaymentContext;

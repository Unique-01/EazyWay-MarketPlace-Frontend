import React, { createContext, useState, useEffect, useContext } from "react";
import config from "config";
import { apiClient } from "shared/api/apiClient";
import { AuthContext } from "./AuthContext";

const MerchantProductContext = createContext();

export const MerchantProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        // Fetch product products from the backend (once)
        const fetchProducts = async () => {
            if (!userLoading) {
                if (user && user.privilege === "merchant") {
                    try {
                        const response = await apiClient.get(
                            `${config.API_BASE_URL}/product/manage-product`
                        );

                        setCurrentPage(response.data.data.page);
                        setHasNextPage(response.data.data.hasNextPage);
                        const productResponse = response.data.data.docs;

                        const sortedProducts = [...productResponse].sort(
                            (a, b) =>
                                new Date(b.createdAt) - new Date(a.createdAt)
                        );
                        setProducts(sortedProducts);
                    } catch (error) {
                        console.error(
                            "Error fetching product products:",
                            error
                        );
                    } finally {
                        setLoading(false);
                    }
                }
            }
        };

        fetchProducts();
    }, [user, userLoading]);

    // Function to add or update a product in the list
    const addOrUpdateProduct = (newProduct) => {
        setProducts((prevProducts) => {
            const productExists = prevProducts.find(
                (product) => product._id === newProduct._id
            );

            if (productExists) {
                // Update existing product
                return prevProducts.map((product) =>
                    product._id === newProduct._id ? newProduct : product
                );
            } else {
                // Add new product
                return [...prevProducts, newProduct];
            }
        });
    };

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await apiClient.get(
                `${config.API_BASE_URL}/product/manage-product?page=${
                    currentPage + 1
                }`
            );
            console.log(response.data);
            setHasNextPage(response.data.data.hasNextPage);
            setProducts((prevProducts) => [
                ...prevProducts,
                ...response.data.data.docs,
            ]);
        } catch (err) {
            console.log("Error fetching more products:", err);
        } finally {
            setMoreLoading(false);
        }
    };

    return (
        <MerchantProductContext.Provider
            value={{
                products,
                loading,
                setProducts,
                addOrUpdateProduct,
                loadMore,
                moreLoading,
                hasNextPage,
            }}>
            {children}
        </MerchantProductContext.Provider>
    );
};

export default MerchantProductContext;

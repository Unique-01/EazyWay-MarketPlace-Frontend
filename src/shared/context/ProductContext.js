import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import config from "config";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${config.API_BASE_URL}/product/general`
                );
                setCurrentPage(response.data.data.page);
                setHasNextPage(response.data.data.hasNextPage);
                setProducts(response.data.data.docs);
            } catch (error) {
                console.error("Error fetching product products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await axios.get(
                `${config.API_BASE_URL}/product/general?page=${currentPage + 1}`
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
        <ProductContext.Provider
            value={{ products, loading, loadMore, moreLoading, hasNextPage }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);

export default ProductContext;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import config from "config";

const ProductCategoryContext = createContext();

export const ProductCategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [moreLoading, setMoreLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        // Fetch product categories from the backend (once)
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    `${config.API_BASE_URL}/category`
                );
                setCurrentPage(response.data.data.page);
                setHasNextPage(response.data.data.hasNextPage);
                setCategories(response.data.data.docs);
            } catch (error) {
                console.error("Error fetching product categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const loadMore = async () => {
        setMoreLoading(true);
        if (!hasNextPage) {
            return;
        }
        try {
            const response = await axios.get(
                `${config.API_BASE_URL}/category?page=${currentPage + 1}`
            );
            console.log(response.data);
            setHasNextPage(response.data.data.hasNextPage);
            setCategories((prevCategories) => [
                ...prevCategories,
                ...response.data.data.docs,
            ]);
        } catch (err) {
            console.log("Error fetching more products:", err);
        } finally {
            setMoreLoading(false);
        }
    };

    return (
        <ProductCategoryContext.Provider
            value={{ categories, loading, loadMore, moreLoading, hasNextPage }}>
            {children}
        </ProductCategoryContext.Provider>
    );
};

export default ProductCategoryContext;

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import config from "config";
import { AuthContext } from "./AuthContext";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: userLoading } = useContext(AuthContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `${config.API_BASE_URL}/product/general`
                );
                setProducts(response.data.data.docs);
            } catch (error) {
                console.error("Error fetching product products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [user, userLoading]);

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);

export default ProductContext;

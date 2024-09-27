// import { createContext, useContext, useState, useEffect } from "react";

// // Create CartContext
// const CartContext = createContext();

// // CartProvider component to wrap your app
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//     const [isMounted, setIsMounted] = useState(false); // To track if the component is mounted

//     // Load cart items from localStorage when the component mounts
//     useEffect(() => {
//         const storedCart = localStorage.getItem("cartItems");
//         if (storedCart) {
//             setCartItems(JSON.parse(storedCart));
//         }
//         setIsMounted(true); // Mark that the component has mounted
//     }, []);

//     // Sync cartItems to localStorage whenever cartItems changes and after the component has mounted
//     useEffect(() => {
//         if (isMounted) {
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         }
//     }, [cartItems, isMounted]);

//     // Add item to cart
//     const addToCart = (item) => {
//         if (!isInCart(item._id)) {
//             setCartItems((prevItems) => [...prevItems, item]);
//         }
//     };

//     // Remove item from cart
//     const removeFromCart = (id) => {
//         setCartItems((prevItems) =>
//             prevItems.filter((item) => item._id !== id)
//         );
//     };

//     // Check if item is in cart
//     const isInCart = (id) => cartItems.some((item) => item._id === id);

//     return (
//         <CartContext.Provider
//             value={{ cartItems, addToCart, removeFromCart, isInCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// // Custom hook for using the CartContext
// export const useCart = () => useContext(CartContext);

import { createContext, useContext, useState, useEffect } from "react";

// Create CartContext
const CartContext = createContext();

// CartProvider component to wrap your app
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);

    // Load cart items from localStorage when the component mounts
    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        console.log(storedCart);
        setIsMounted(true);
    }, []);

    // Sync cartItems to localStorage whenever cartItems changes and after component has mounted
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems, isMounted]);

    // Add item to cart
    const addToCart = (id) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.product === id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.product === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { product: id, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.product !== id)
        );
    };

    // Update the quantity of an item in the cart
    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.product === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const updateCartTotal = (total) => {
        setCartTotal(total);
    };

    // Check if item is in cart
    const isInCart = (id) => cartItems.some((item) => item.product === id);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                isInCart,
                updateQuantity,
                updateCartTotal,
                cartTotal,
            }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using the CartContext
export const useCart = () => useContext(CartContext);

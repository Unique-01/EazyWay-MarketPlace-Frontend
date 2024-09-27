import { createContext, useContext, useState, useEffect } from "react";

// Create WishlistContext
const WishlistContext = createContext();

// WishlistProvider component to wrap your app
export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isMounted, setIsMounted] = useState(false); // To track if the component is mounted

    // Load wishlist items from localStorage when the component mounts
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlistItems");
        if (storedWishlist) {
            setWishlistItems(JSON.parse(storedWishlist));
        }
        setIsMounted(true); // Mark that the component has mounted
    }, []);

    // Sync wishlistItems to localStorage whenever wishlistItems changes and after the component has mounted
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem(
                "wishlistItems",
                JSON.stringify(wishlistItems)
            );
        }
    }, [wishlistItems, isMounted]);

    // Add item to wishlist
    const addToWishlist = (item) => {
        if (!isInWishlist(item._id)) {
            setWishlistItems((prevItems) => [...prevItems, item]);
        }
    };

    // Remove item from wishlist
    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) =>
            prevItems.filter((item) => item._id !== id)
        );
    };

    // Check if item is in wishlist
    const isInWishlist = (id) => wishlistItems.some((item) => item._id === id);

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
            }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Custom hook for using the WishlistContext
export const useWishlist = () => useContext(WishlistContext);

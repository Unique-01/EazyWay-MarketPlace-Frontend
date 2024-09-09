import { createContext, useState, useContext } from "react";

// Create the context
const EmailContext = createContext();

// Create a provider component
export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState("");

    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            {children}
        </EmailContext.Provider>
    );
};

// Create a custom hook to use the EmailContext
export const useEmail = () => {
    return useContext(EmailContext);
};

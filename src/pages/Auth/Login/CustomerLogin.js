import { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CustomerLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/user/login`,
                formData
            );
            setLoading(false);
            localStorage.setItem("authToken", response.data.token);
            console.log(response.data.token);
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
            setLoading(false);
        }
    };

    return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
};

export default CustomerLogin;

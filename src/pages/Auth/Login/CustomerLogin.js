import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CustomerLogin = () => {
    const { login } = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/user/login`,
                formData
            );
            setLoading(false);
            const { token: authToken, data: userData } = response.data;
            login(userData, authToken);
            navigate("/");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
            setLoading(false);
        }
    };

    return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
};

export default CustomerLogin;

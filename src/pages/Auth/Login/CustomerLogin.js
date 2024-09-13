import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import HandleApiError from "components/HandleApiError";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CustomerLogin = () => {
    const { login } = React.useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const redirect_uri = queryParams.get("redirect_uri");

    const handleLogin = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${API_BASE_URL}/user/login`,
                formData
            );
            const { token: authToken, data: userData } = response.data;
            await login(userData, authToken);
            if (redirect_uri) {
                navigate(redirect_uri);
            } else {
                navigate("/customer");
            }
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
        }
    };

    return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
};

export default CustomerLogin;

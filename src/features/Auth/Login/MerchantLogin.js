import LoginForm from "../components/LoginForm";
import { AuthContext } from "shared/context/AuthContext";
import { NotificationContext } from "shared/context/NotificationContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import config from "config";
import { useContext } from "react";
import axios from "axios";
import HandleApiError from "shared/components/HandleApiError";

const MerchantLogin = () => {
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const redirect_uri = queryParams.get("redirect_uri");
    const { showNotification } = useContext(NotificationContext);

    const handleLogin = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/user/login`,
                formData
            );
            const { token: authToken, data: userData } = response.data;
            await login(userData, authToken);
            showNotification("Login Successful");

            if (redirect_uri) {
                navigate(redirect_uri);
            } else {
                navigate("/merchant");
            }
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
        }
    };

    return <LoginForm onSubmit={handleLogin} loading={loading} error={error} />;
};

export default MerchantLogin;

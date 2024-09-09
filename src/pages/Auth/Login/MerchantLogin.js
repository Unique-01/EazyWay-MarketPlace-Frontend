import LoginForm from "../components/LoginForm";
import { AuthContext } from "context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "config";
import { useContext } from "react";
import axios from "axios";

const MerchantLogin = () => {
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/user/login`,
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

export default MerchantLogin;

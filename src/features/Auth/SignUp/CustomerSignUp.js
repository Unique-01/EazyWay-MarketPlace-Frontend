import CustomerSignUpForm from "../components/CustomerSignUpForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEmail } from "shared/context/EmailContext";
import HandleApiError from "shared/components/HandleApiError";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CustomerSignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { setEmail } = useEmail();
    const privilege = "buyer";

    const handleSubmit = async (formData) => {
        setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/user`, {
                ...formData,
                privilege,
            });
            setEmail(formData.email);
            navigate("/signup/verify_email");
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <CustomerSignUpForm
                onSubmit={handleSubmit}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default CustomerSignUp;

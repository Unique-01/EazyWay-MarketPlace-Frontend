import { useNavigate } from "react-router-dom";
import OTPVerification from "../components/OtpVerification";
import axios from "axios";
import { useState } from "react";
import { useEmail } from "context/EmailContext";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const EmailVerification = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { email } = useEmail();

    const handleResendOTP = async () => {
        try {
            await axios.put(`${API_BASE_URL}/user/resend-otp`, { email });
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
        }
    };

    const handleEmailVerificationSubmit = async (otp) => {
        setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/user/otp`, { otp });
            setLoading(false);
            navigate("/signup/success");
        } catch (error) {
            setError(error.response.data.message);
            console.log(error);
        }
        navigate("/signup/success");
    };

    return (
        <OTPVerification
            length={5}
            onSubmit={handleEmailVerificationSubmit}
            onResendOTP={handleResendOTP}
            loading={loading}
            error={error}
        />
    );
};

export default EmailVerification;

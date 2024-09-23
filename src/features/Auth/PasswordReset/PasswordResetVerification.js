import { useNavigate } from "react-router-dom";
import OTPVerification from "../components/OtpVerification";
import PasswordResetNewPassword from "./PasswordResetNewPassword";
import { useState } from "react";
import axios from "axios";
import config from "config";
import HandleApiError from "shared/components/HandleApiError";

const PasswordResetVerification = () => {
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState(""); // Moved password state here
    const [confirmPassword, setConfirmPassword] = useState(""); // Moved confirmPassword state here
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleOTP = (otp) => {
        setOtp(otp);
        setStep(2);
    };

    const handlePasswordReset = async () => {
        setLoading(true);
        try {
            await axios.post(`${config.API_BASE_URL}/user/reset-password`, {
                otp,
                password,
            });

            navigate("reset_password/success");
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {step === 1 ? (
                <OTPVerification
                    length={5}
                    onSubmit={handleOTP}
                    defaultCode={otp}
                />
            ) : (
                <PasswordResetNewPassword
                    setStep={setStep}
                    loading={loading}
                    error={error}
                    password={password}
                    setPassword={setPassword} // Pass down state
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword} // Pass down state
                    onSubmit={handlePasswordReset}
                />
            )}
        </>
    );
};

export default PasswordResetVerification;

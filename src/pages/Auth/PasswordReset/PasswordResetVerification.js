import { useNavigate } from "react-router-dom";
import OTPVerification from "../components/OtpVerification";
import PasswordResetNewPassword from "./PasswordResetNewPassword";
import { useState } from "react";
import axios from "axios";
import config from "config";

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
        } catch (error) {
            console.log(error);
            if (
                error.response &&
                error.response.data &&
                error.response.data.error
            ) {
                const errors = error.response.data.error;

                // If the error array exists, map over it to extract the messages
                if (Array.isArray(errors)) {
                    const errorMessages = errors
                        .map((err) => err.message)
                        .join(", ");
                    setError(errorMessages);
                } else {
                    // Fallback in case error is not an array
                    setError("An unknown error occurred.");
                }
            } else {
                // Handle other errors like network issues
                setError("Something went wrong. Please try again later.");
            }
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

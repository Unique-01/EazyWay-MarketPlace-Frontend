import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConfirmationCodeInput from "features/Auth/components/ConfirmationCodeInput";
import ButtonLoading from "shared/components/ButtonLoading";
import registrationBanner from "assets/images/registrationImg.svg";

const OTPVerification = ({ onSubmit, onResendOTP, length, loading, error }) => {
    const [verificationCode, setVerificationCode] = useState("");
    const [countdown, setCountdown] = useState(60); // 1-minute countdown

    // Handle OTP code input
    const handleCodeChange = (newCode) => {
        setVerificationCode(newCode);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(verificationCode);
    };

    // Handle resend OTP
    const handleResendOTP = () => {
        onResendOTP(); // Function to handle OTP resend
        setCountdown(60); // Reset the countdown
    };

    // Countdown effect
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer); // Clean up the timer
        }
    }, [countdown]);

    return (
        <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
                <img src={registrationBanner} alt="Banner" className="w-100" />
            </div>
            <div className="col-lg-6">
                <div className="signInForm text-center">
                    <h3 className="text-black signIn-heading">Enter Code</h3>
                    <p className="text-muted">
                        Enter the verification code we sent to your email.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="pb-4">
                            {error && <p className="text-danger">{error}</p>}
                            <ConfirmationCodeInput
                                onChange={handleCodeChange}
                                length={length}
                                disabled={loading}
                            />
                        </div>
                        <button
                            className="btn btn-primary text-white login-btn w-100 rounded-pill"
                            type="submit"
                            disabled={loading}>
                            Submit {loading && <ButtonLoading />}
                        </button>

                        {/* Resend OTP button */}
                        <p className="mt-3 no-account">
                            Didn't receive the code?{" "}
                            <button
                                type="button"
                                className="btn btn-link p-0"
                                style={{ fontSize: "12px" }}
                                onClick={handleResendOTP}
                                disabled={countdown > 0 || loading}>
                                Resend OTP {countdown > 0 && `(${countdown}s)`}
                            </button>
                        </p>

                        <p className="no-account mt-3">
                            Already have an account?{" "}
                            <Link
                                to="/login/customer"
                                className="text-black fw-semibold">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
                <p className="text-primary fw-semibold">
                    &copy; 2024 EazyWay Marketplace
                </p>
            </div>
        </div>
    );
};

export default OTPVerification;

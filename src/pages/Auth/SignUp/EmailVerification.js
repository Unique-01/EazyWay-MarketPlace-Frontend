import { useNavigate } from "react-router-dom";
import OTPVerification from "../components/OtpVerification";

const EmailVerification = () => {
    const navigate = useNavigate();

    const handleEmailVerificationSubmit = (otp) => {
        navigate("/signup/success");
    };

    return <OTPVerification onSubmit={handleEmailVerificationSubmit} />;
};

export default EmailVerification;

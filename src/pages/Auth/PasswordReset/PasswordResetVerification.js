import { useNavigate } from "react-router-dom";
import OTPVerification from "../components/OtpVerification";

const PasswordResetVerification = () => {
    const navigate = useNavigate();

    const handlePasswordResetSubmit = (otp) => {
        navigate("/reset_password/newPassword");
    };

    return <OTPVerification onSubmit={handlePasswordResetSubmit} />;
};

export default PasswordResetVerification;

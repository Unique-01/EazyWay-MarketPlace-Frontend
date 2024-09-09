import MerchantMultiStepSignUpForm from "../components/MerchantMultiStepSignUpForm";
import { useNavigate } from "react-router-dom";
import registrationBanner from "assets/images/registrationImg.svg";
import { useEmail } from "context/EmailContext";
import { useState } from "react";
import config from "config";
import axios from "axios";

const MerchantSignUp = () => {
    const { setEmail } = useEmail();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const privilege = "merchant";

    const handleSubmit = async (formData) => {
        setLoading(true);
        try {
            await axios.post(`${config.API_BASE_URL}/user`, {
                ...formData,
                privilege,
            });
            setEmail(formData.email);
            setLoading(false);
            navigate("/signup/verify_email");
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    };
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 d-none d-lg-block ">
                    <img
                        src={registrationBanner}
                        alt="Banner"
                        className="w-100"
                    />
                </div>

                <div className="col-lg-6">
                    <MerchantMultiStepSignUpForm
                        handleFinalSubmit={handleSubmit}
                        loading={loading}
                        error={error}
                    />
                </div>
            </div>
        </div>
    );
};

export default MerchantSignUp;

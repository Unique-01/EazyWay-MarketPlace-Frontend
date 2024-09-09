import MerchantMultiStepSignUpForm from "../components/MerchantMultiStepSignUpForm";
import { useNavigate } from "react-router-dom";
import registrationBanner from "assets/images/registrationImg.svg";

const MerchantSignUp = () => {
    const navigate = useNavigate();
    const privilege = 'merchant'

    const handleSubmit = (formData) => {
        navigate("/signup/verify_email");
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
                    />
                </div>
            </div>
        </div>
    );
};

export default MerchantSignUp;

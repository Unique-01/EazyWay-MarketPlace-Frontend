import ConfirmationCodeInput from "components/common/ConfirmationCodeInput";
import { useState } from "react";
import registrationBanner from "assets/images/registrationImg.svg";
import { Link } from "react-router-dom";

const EmailVerification = () => {
    const [verificationCode, setVerificationCode] = useState("");

    const handleCodeChange = (newCode) => {
        setVerificationCode(newCode);
    };
    return (
        <div className="row">
            <div className="col-lg-6 d-none d-lg-block ">
                <img src={registrationBanner} alt="Banner" className="w-100" />
            </div>
            <div className="col-lg-6">
                <div className="signInForm text-center">
                    <h3 className="text-black signIn-heading">Enter Code</h3>
                    <p className="text-muted">
                        Enter the verification code we sent to ....
                    </p>
                    <form>
                        <div className="pb-4">
                            <ConfirmationCodeInput
                                onChange={handleCodeChange}
                            />
                        </div>
                        <button className="btn btn-primary text-white login-btn  w-100 rounded-pill">
                            Submit
                        </button>
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

export default EmailVerification;

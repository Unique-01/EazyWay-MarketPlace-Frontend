import registrationBanner from "assets/images/registrationImg.svg";
import axios from "axios";
import ButtonLoading from "shared/components/ButtonLoading";
import HandleApiError from "shared/components/HandleApiError";
import config from "config";
import { useEmail } from "shared/context/EmailContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResendEmailVerify = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { setEmail } = useEmail();
    const [emailInput, setEmailInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`${config.API_BASE_URL}/user/resend-otp`, {
                email: emailInput,
            });
            setEmail(emailInput);
            navigate("/signup/verify_email");
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
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
                    <div className="signUpForm text-center">
                        <div>
                            <h2 className="signIn-heading text-black">
                                Resend Email Verification OTP
                            </h2>
                            <form
                                className="row row-gap-4 mt-4"
                                onSubmit={handleSubmit}>
                                {error && (
                                    <p className="form-error text-danger">
                                        {error}
                                    </p>
                                )}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control input"
                                    value={emailInput}
                                    required
                                    onChange={(e) =>
                                        setEmailInput(e.target.value)
                                    }
                                />

                                <button
                                    className="btn btn-primary text-white login-btn  w-100 rounded-pill"
                                    disabled={loading}
                                    type="submit">
                                    Submit {loading && <ButtonLoading />}
                                </button>
                            </form>
                        </div>
                    </div>
                    <p className="text-primary fw-semibold">
                        &copy; 2024 EazyWay Marketplace
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResendEmailVerify;

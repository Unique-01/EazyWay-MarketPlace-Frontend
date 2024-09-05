import registrationBanner from "assets/images/registrationImg.svg";
import { useNavigate } from "react-router-dom";

const PasswordResetOverview = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/reset_password/verification");
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
                                Reset Password
                            </h2>
                            <form className="row row-gap-4 mt-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control input"
                                />

                                <button
                                    className="btn btn-primary text-white login-btn  w-100 rounded-pill"
                                    onClick={handleSubmit}>
                                    Submit
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

export default PasswordResetOverview;

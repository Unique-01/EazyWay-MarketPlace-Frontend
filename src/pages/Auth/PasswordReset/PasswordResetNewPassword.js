import registrationBanner from "assets/images/registrationImg.svg";
import { useNavigate } from "react-router-dom";

const PasswordResetNewPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/reset_password/success");
    };

    return (
        <div className="">
            <div className="row g-4">
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
                            <h2 className="signIn-heading text-black">Create Password</h2>
                            <form className="row row-gap-4 mt-4">
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="form-control input"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
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

export default PasswordResetNewPassword;

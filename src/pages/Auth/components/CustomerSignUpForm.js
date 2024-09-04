import registrationBanner from "assets/images/registrationImg.svg";
import { Link } from "react-router-dom";
import "./CustomerSignUpForm.css";

const CustomerSignUpForm = () => (
    <div className="">
        <div className="row g-4">
            <div className="col-lg-6 d-none d-lg-block ">
                <img src={registrationBanner} alt="Banner" className="w-100" />
            </div>
            <div className="col-lg-6">
                <div className="signUpForm text-center">
                    <div>
                        <h2 className="signIn-heading">Create Account</h2>
                        <form className="row row-gap-4 mt-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control input"
                            />
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="form-control input"
                            />
                            <Link
                                to="/signup/verify_email"
                                className="btn btn-primary text-white login-btn  w-100 rounded-pill">
                                Continue
                            </Link>
                        </form>
                        <p className="no-account mt-3">
                            Already have an account?{" "}
                            <Link
                                to="/login/customer"
                                className="text-black fw-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
                <p className="text-primary fw-semibold">
                    &copy; 2024 EazyWay Marketplace
                </p>
            </div>
        </div>
    </div>
);

export default CustomerSignUpForm;

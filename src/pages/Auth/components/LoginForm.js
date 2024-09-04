import registrationBanner from "assets/images/registrationImg.svg";
import { Link } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = () => (
    <div className="">
        <div className="row g-4">
            <div className="col-lg-6 d-none d-lg-block ">
                <img src={registrationBanner} alt="Banner" className="w-100" />
            </div>
            <div className="col-lg-6">
                <div className="signInForm text-center">
                    <div>
                        <h2 className="signIn-heading text-primary">Sign In</h2>
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
                            <div className="d-flex justify-content-between px-0">
                                <div className="">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="remember"
                                    />
                                    <label
                                        className="form-check-label ps-2"
                                        htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                                <Link className="forget-password">
                                    Forget Password
                                </Link>
                            </div>
                            <button className="btn btn-primary text-white login-btn  w-100 rounded-pill">
                                Login
                            </button>
                        </form>
                        <p className="no-account mt-3">
                            Don't have an account?{" "}
                            <Link
                                to="/signup/customer"
                                className="text-black fw-semibold">
                                Register
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

export default LoginForm;

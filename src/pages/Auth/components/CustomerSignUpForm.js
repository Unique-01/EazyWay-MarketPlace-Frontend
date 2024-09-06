import registrationBanner from "assets/images/registrationImg.svg";
import { Link } from "react-router-dom";
import "./CustomerSignUpForm.css";
import { useState } from "react";
import ButtonLoading from "components/common/ButtonLoading";
import PasswordInput from "./PasswordInput";

const CustomerSignUpForm = ({ onSubmit, error, loading }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
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
                            <h2 className="signIn-heading">Create Account</h2>
                            <form
                                className="row row-gap-4 mt-4"
                                method="post"
                                onSubmit={handleSubmit}>
                                {error && (
                                    <p className="text-danger">{error}</p>
                                )}
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control input"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    name="firstName"
                                    disabled={loading}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control input"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    name="lastName"
                                    disabled={loading}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control input"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    disabled={loading}
                                    required
                                />
                                <PasswordInput
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />

                                <button
                                    className="btn btn-primary text-white login-btn  w-100 rounded-pill"
                                    type="submit"
                                    disabled={loading}>
                                    Continue {loading && <ButtonLoading />}
                                </button>
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
};

export default CustomerSignUpForm;

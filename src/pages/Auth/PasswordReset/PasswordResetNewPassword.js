import { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import registrationBanner from "assets/images/registrationImg.svg";
import ButtonLoading from "components/common/ButtonLoading";

const PasswordResetNewPassword = ({
    setStep,
    loading,
    error,
    password, // Get password as prop
    setPassword, // Get setPassword as prop
    confirmPassword, // Get confirmPassword as prop
    setConfirmPassword, // Get setConfirmPassword as prop
    onSubmit,
}) => {
    const [validateError, setValidateError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    useEffect(() => {
        if (password !== confirmPassword) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    }, [password, confirmPassword]);

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
                            <button
                                className="text-primary fs-4 btn"
                                onClick={() => setStep(1)}
                                disabled={loading}>
                                <FaRegArrowAltCircleLeft />
                            </button>
                            <h2 className="signIn-heading text-black">
                                Create Password
                            </h2>
                            <form
                                className="row row-gap-4 mt-4"
                                onSubmit={handleSubmit}>
                                <div className="p-0">
                                    {validateError && (
                                        <p className="form-error text-danger">
                                            Passwords do not match
                                        </p>
                                    )}
                                    {error && (
                                        <p className="form-error text-danger">
                                            {error}
                                        </p>
                                    )}
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="form-control input"
                                        required
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    required
                                    className={`form-control input ${
                                        validateError && "error-input"
                                    }`}
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                                <button
                                    className="btn btn-primary text-white login-btn  w-100 rounded-pill"
                                    disabled={validateError || loading}
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

export default PasswordResetNewPassword;

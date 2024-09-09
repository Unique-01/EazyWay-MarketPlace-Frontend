import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import ProductCategoryContext from "context/ProductCategoryContext";
import Select from "react-select";
import ButtonLoading from "components/common/ButtonLoading";

const Step1 = ({ formData, setFormData, nextStep }) => {
    const { firstName, lastName, email } = formData;
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = "First Name is required";
        if (!lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            newErrors.email = "Email is invalid";
        }
        return newErrors;
    };

    const handleNext = () => {
        const validationErrors = validateStep1();
        if (Object.keys(validationErrors).length === 0) {
            nextStep();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <div className="signUpForm text-center">
                <h3 className="signIn-heading text-black">Create Account</h3>
                <div className="row row-gap-4 mt-4">
                    <div className="p-0">
                        {errors.firstName && (
                            <p className="text-danger form-error">
                                {errors.firstName}
                            </p>
                        )}
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`form-control input ${
                                errors.firstName && "error-input"
                            }`}
                            value={firstName}
                            name="firstName"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="p-0">
                        {errors.lastName && (
                            <p className="text-danger form-error">
                                {errors.lastName}
                            </p>
                        )}
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`form-control input ${
                                errors.lastName && "error-input"
                            }`}
                            value={lastName}
                            name="lastName"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="p-0">
                        {errors.email && (
                            <p className="text-danger form-error">
                                {errors.email}
                            </p>
                        )}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={`form-control input ${
                                errors.email && "error-input"
                            }`}
                            value={email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className="btn btn-primary text-white login-btn w-100 rounded-pill"
                        onClick={handleNext}>
                        Continue
                    </button>
                    <p className="no-account">
                        Already have an account?{" "}
                        <Link
                            to="/login/customer"
                            className="text-black fw-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
    const { storeName, businessCategory, businessAddress } = formData;
    const { categories } = useContext(ProductCategoryContext);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const formattedOptions = categories.map((category) => ({
            value: category._id,
            label: category.title,
        }));
        setCategoryOptions(formattedOptions);

        const preselectedCategories = formattedOptions.filter((option) =>
            businessCategory.includes(option.value)
        );
        setSelectedCategoryOptions(preselectedCategories);
    }, [categories, businessCategory]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (selected) => {
        setSelectedCategoryOptions(selected);
        setFormData({
            ...formData,
            businessCategory: selected.map((item) => item.value),
        });
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (businessCategory.length === 0)
            newErrors.businessCategory =
                "At least one business category is required";
        return newErrors;
    };

    const handleNext = () => {
        const validationErrors = validateStep2();
        if (Object.keys(validationErrors).length === 0) {
            nextStep();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <div className="signUpForm text-center">
                <button className="text-primary fs-4 btn" onClick={prevStep}>
                    <FaRegArrowAltCircleLeft />
                </button>
                <div className="row row-gap-4 mt-4">
                    <input
                        type="text"
                        placeholder="Store Name"
                        className="form-control input shadow-none"
                        value={storeName}
                        name="storeName"
                        onChange={handleChange}
                    />
                    <div className="p-0">
                        {errors.businessCategory && (
                            <p className="text-danger form-error">
                                {errors.businessCategory}
                            </p>
                        )}

                        <Select
                            isMulti
                            value={selectedCategoryOptions}
                            onChange={handleSelectChange}
                            options={categoryOptions}
                            placeholder="Business Categories"
                            className={`m-0 p-0 text-start business-category-select`}
                            required
                            styles={{
                                control: (baseStyles, state) => {
                                    const borderColor = errors.businessCategory
                                        ? "red"
                                        : state.isFocused
                                        ? "#00b207"
                                        : baseStyles.borderColor;

                                    return {
                                        ...baseStyles,
                                        borderColor,
                                        boxShadow: state.isFocused
                                            ? "none"
                                            : baseStyles.boxShadow,
                                        "&:hover": {
                                            borderColor,
                                        },
                                    };
                                },
                            }}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Business Address"
                        className="form-control input"
                        value={businessAddress}
                        name="businessAddress"
                        onChange={handleChange}
                    />
                    {errors.businessAddress && (
                        <p className="text-danger">{errors.businessAddress}</p>
                    )}

                    <button
                        className="btn btn-primary text-white login-btn w-100 rounded-pill"
                        onClick={handleNext}>
                        Continue
                    </button>
                    <p className="no-account">
                        Already have an account?{" "}
                        <Link
                            to="/login/customer"
                            className="text-black fw-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Step3 = ({
    formData,
    setFormData,
    prevStep,
    handleSubmit,
    loading,
    error,
}) => {
    const { username, password, confirmPassword } = formData;
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStep3 = () => {
        const newErrors = {};
        // if (!username.trim()) newErrors.username = "Username is required";
        if (!password.trim()) newErrors.password = "Password is required";
        if (!confirmPassword.trim())
            newErrors.confirmPassword = "Confirm Password is required";
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        return newErrors;
    };

    const handleNext = () => {
        const validationErrors = validateStep3();
        if (Object.keys(validationErrors).length === 0) {
            handleSubmit();
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <div className="signUpForm text-center">
                <button
                    className="text-primary fs-4 btn"
                    onClick={prevStep}
                    disabled={loading}>
                    <FaRegArrowAltCircleLeft />
                </button>
                <div className="row row-gap-4 mt-4">
                    {error && <p className="text-danger form-error">{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control input shadow-none"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        disabled={loading}
                    />
                    <div className="p-0">
                        {errors.password && (
                            <p className="text-danger form-error">
                                {errors.password}
                            </p>
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            className={`form-control input ${
                                errors.password && "error-input"
                            }`}
                            value={password}
                            name="password"
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <div className="p-0">
                        {errors.confirmPassword && (
                            <p className="text-danger form-error">
                                {errors.confirmPassword}
                            </p>
                        )}
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className={`form-control input ${
                                errors.confirmPassword && "error-input"
                            }`}
                            value={confirmPassword}
                            name="confirmPassword"
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>

                    <button
                        className={`btn btn-primary text-white login-btn w-100 rounded-pill`}
                        onClick={handleNext}
                        disabled={loading}>
                        Sign Up {loading && <ButtonLoading />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const MerchantMultiStepSignUpForm = ({ handleFinalSubmit, loading, error }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        storeName: "",
        businessCategory: [],
        businessAddress: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const handleSubmit = () => {
        const newErrors = {};
        // Add final form validation (password match, etc.) here
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (Object.keys(newErrors).length === 0) {
            handleFinalSubmit(formData);
        } else {
            // Display errors (setErrors would be needed)
        }
    };

    switch (currentStep) {
        case 1:
            return (
                <Step1
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                <Step2
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <Step3
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                />
            );
        default:
            return <div>Error: Invalid Step</div>;
    }
};

export default MerchantMultiStepSignUpForm;

// import React, { useContext, useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// import ProductCategoryContext from "context/ProductCategoryContext";
// import Select from "react-select";

// const Step1 = ({ formData, setFormData, nextStep }) => {
//     const { firstName, lastName, email } = formData;

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <div>
//             <div className="signUpForm text-center">
//                 <h3 className="signIn-heading text-black">Create Account</h3>
//                 <div className="row row-gap-4 mt-4">
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         className="form-control input"
//                         value={firstName}
//                         name="firstName"
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         className="form-control input"
//                         value={lastName}
//                         name="lastName"
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         className="form-control input"
//                         value={email}
//                         name="email"
//                         onChange={handleChange}
//                     />

//                     <button
//                         className="btn btn-primary text-white login-btn  w-100 rounded-pill"
//                         onClick={nextStep}>
//                         Continue
//                     </button>
//                     <p className="no-account">
//                         Already have an account?{" "}
//                         <Link
//                             to="/login/customer"
//                             className="text-black fw-semibold">
//                             Login
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
//     const { storeName, businessCategory, businessAddress } = formData;
//     const { categories } = useContext(ProductCategoryContext);
//     const [categoryOptions, setCategoryOptions] = useState([]);
//     const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);

//     useEffect(() => {
//         // Format options when categories are available
//         const formattedOptions = categories.map((category) => ({
//             value: category._id,
//             label: category.title,
//         }));
//         setCategoryOptions(formattedOptions);
//     }, [categories]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSelectChange = (selected) => {
//         setSelectedCategoryOptions(selected);
//         setFormData({
//             ...formData,
//             businessCategory: selected.map((item) => item.value),
//         });
//     };

//     return (
//         <div>
//             <div className="signUpForm text-center">
//                 <button className="text-primary fs-4 btn" onClick={prevStep}>
//                     <FaRegArrowAltCircleLeft />
//                 </button>
//                 <div className="row row-gap-4 mt-4">
//                     <input
//                         type="text"
//                         placeholder="Store Name"
//                         className="form-control input shadow-none"
//                         value={storeName}
//                         name="storeName"
//                         onChange={handleChange}
//                     />
//                     <Select
//                         isMulti
//                         value={selectedCategoryOptions}
//                         onChange={handleSelectChange}
//                         options={categoryOptions}
//                         placeholder="Business Categories"
//                         className="m-0 p-0 text-start business-category-select"
//                         styles={{
//                             control: (baseStyles, state) => ({
//                                 ...baseStyles,
//                                 borderColor: state.isFocused
//                                     ? "#00b207"
//                                     : baseStyles.borderColor,
//                                 boxShadow: state.isFocused && "none",
//                                 "&:hover": {
//                                     borderColor: state.isFocused
//                                         ? "#00b207"
//                                         : baseStyles.borderColor,
//                                 },
//                             }),
//                         }}
//                     />

//                     <input
//                         type="text"
//                         placeholder="Business Address"
//                         className="form-control input"
//                         value={businessAddress}
//                         name="businessAddress"
//                         onChange={handleChange}
//                     />
//                     <button
//                         className="btn btn-primary text-white login-btn w-100 rounded-pill"
//                         onClick={nextStep}>
//                         Continue
//                     </button>
//                     <p className="no-account">
//                         Already have an account?{" "}
//                         <Link
//                             to="/login/customer"
//                             className="text-black fw-semibold">
//                             Login
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Step3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
//     const { username, password, confirmPassword } = formData;

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     return (
//         <div>
//             <div>
//                 <div className="signUpForm text-center">
//                     <button
//                         className="text-primary fs-4 btn"
//                         onClick={prevStep}>
//                         <FaRegArrowAltCircleLeft />
//                     </button>
//                     <div className="row row-gap-4 mt-4">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             className="form-control input"
//                             value={username}
//                             name="username"
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="form-control input"
//                             value={password}
//                             name="password"
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Confirm Password"
//                             className="form-control input"
//                             value={confirmPassword}
//                             name="confirmPassword"
//                             onChange={handleChange}
//                         />
//                         <button
//                             className="btn btn-primary text-white login-btn  w-100 rounded-pill"
//                             onClick={handleSubmit}>
//                             Create Account
//                         </button>
//                         <p className="no-account">
//                             Already have an account?{" "}
//                             <Link
//                                 to="/login/customer"
//                                 className="text-black fw-semibold">
//                                 Login
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const MerchantMultiStepSignUpForm = ({ handleFinalSubmit }) => {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         storeName: "",
//         businessCategory: [],
//         businessAddress: "",
//         username: "",
//         password: "",
//     });

//     const nextStep = () => setCurrentStep(currentStep + 1);
//     const prevStep = () => setCurrentStep(currentStep - 1);

//     const handleSubmit = () => {
//         handleFinalSubmit(formData);
//     };

//     switch (currentStep) {
//         case 1:
//             return (
//                 <Step1
//                     formData={formData}
//                     setFormData={setFormData}
//                     nextStep={nextStep}
//                 />
//             );
//         case 2:
//             return (
//                 <Step2
//                     formData={formData}
//                     setFormData={setFormData}
//                     nextStep={nextStep}
//                     prevStep={prevStep}
//                 />
//             );
//         case 3:
//             return (
//                 <Step3
//                     formData={formData}
//                     setFormData={setFormData}
//                     prevStep={prevStep}
//                     handleSubmit={handleSubmit}
//                 />
//             );
//         default:
//             return <div>Error: Invalid Step</div>;
//     }
// };

// export default MerchantMultiStepSignUpForm;



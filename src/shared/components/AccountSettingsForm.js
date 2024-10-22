import { AuthContext } from "shared/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import "./AccountSettingsForm.css";
import UserIcon from "assets/icons/user.svg";
import { apiClient } from "shared/api/apiClient";
import config from "config";
import ButtonLoading from "shared/components/ButtonLoading";
import HandleApiError from "shared/components/HandleApiError";
import { NotificationContext } from "shared/context/NotificationContext";
import Select from "react-select";
import ProductCategoryContext from "shared/context/ProductCategoryContext";

const AccountSettingsForm = ({ merchant = false }) => {
    const { user, loading, set_user } = useContext(AuthContext);
    const { showNotification } = useContext(NotificationContext);
    const { categories } = useContext(ProductCategoryContext);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [selectedCategoryOptions, setSelectedCategoryOptions] = useState([]);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        image: "",
        username: "",
        storeName: "",
        businessAddress: "",
        businessCategory: [],
    });
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!loading) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                ...user,
                image: user.image ? user.image.playback_url : "",
            }));
            console.log(user)
        }
    }, [loading, user]);

    useEffect(() => {
        const formattedOptions = categories.map((category) => ({
            value: category._id,
            label: category.title,
        }));
        setCategoryOptions(formattedOptions);

        const preselectedCategories = formattedOptions.filter((option) =>
            formData.businessCategory.includes(option.value)
        );
        setSelectedCategoryOptions(preselectedCategories);
    }, [categories, formData]);

    const handleSelectChange = (selected) => {
        setSelectedCategoryOptions(selected);
        setFormData({
            ...formData,
            businessCategory: selected.map((item) => item.value),
        });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFormData({ ...formData, image: fileURL });
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        const formDataToSend = new FormData();
        formDataToSend.append("firstName", formData.firstName);
        formDataToSend.append("lastName", formData.lastName);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("telephone", formData.telephone);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("storeName", formData.storeName);
        formDataToSend.append("businessAddress", formData.businessAddress);
        formDataToSend.append("businessCategory", formData.businessCategory);
        formDataToSend.append("intendedFileName", "image");

        if (selectedImage) {
            formDataToSend.append("intendedFile", selectedImage);
        }

        console.log(formData,formDataToSend)
        try {
            const response = await apiClient.put(
                `${config.API_BASE_URL}/user`,
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            set_user(response.data.data);
            showNotification("Profile Updated Successfully");
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setSubmitLoading(false);
        }
    };
    return (
        <div className="poppins">
            <div className="row">
                <div className="col-md-7">
                    <form className="py-3 px-4 account-settings-form">
                        {error && <p className="small text-danger">{error}</p>}
                        <div className="mb-2">
                            <label
                                htmlFor="firstName"
                                className="form-label billing-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="form-control input"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                disabled={submitLoading}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="lastName"
                                className="form-label billing-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="form-control input"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                disabled={submitLoading}
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="telephone"
                                className="form-label billing-label">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                className="form-control input"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleInputChange}
                                disabled={submitLoading}
                            />
                        </div>
                        {merchant && (
                            <div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="username"
                                        className="form-label billing-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control input"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        disabled={submitLoading}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="storeName"
                                        className="form-label billing-label">
                                        Store Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control input"
                                        name="storeName"
                                        value={formData.storeName}
                                        onChange={handleInputChange}
                                        disabled={submitLoading}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        htmlFor="businessAddress"
                                        className="form-label billing-label">
                                        Business Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control input"
                                        name="businessAddress"
                                        value={formData.businessAddress}
                                        onChange={handleInputChange}
                                        disabled={submitLoading}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="businessAddress"
                                        className="form-label billing-label">
                                        Business Category
                                    </label>
                                    <Select
                                        isMulti
                                        value={selectedCategoryOptions}
                                        onChange={handleSelectChange}
                                        options={categoryOptions}
                                        placeholder="Business Categories"
                                        className={`m-0 p-0 text-start business-category-select`}
                                        required
                                        // styles={{
                                        //     control: (baseStyles, state) => {
                                        //         const borderColor = errors.businessCategory
                                        //             ? "red"
                                        //             : state.isFocused
                                        //             ? "#00b207"
                                        //             : baseStyles.borderColor;

                                        //         return {
                                        //             ...baseStyles,
                                        //             borderColor,
                                        //             boxShadow: state.isFocused
                                        //                 ? "none"
                                        //                 : baseStyles.boxShadow,
                                        //             "&:hover": {
                                        //                 borderColor,
                                        //             },
                                        //         };
                                        //     },
                                        // }}
                                    />
                                </div>
                            </div>
                        )}
                        <button
                            className="btn-primary btn text-white rounded-pill fw-semibold p-3"
                            style={{ fontSize: "13px" }}
                            onClick={handleSubmit}
                            disabled={submitLoading}>
                            Save Changes {submitLoading && <ButtonLoading />}
                        </button>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-content-center align-items-center h-100  ">
                        <div className="text-center">
                            <img
                                src={formData.image ? formData.image : UserIcon}
                                alt="User"
                                className="account-settings-image"
                            />
                            <div className="mt-3">
                                <label
                                    htmlFor="imageUpload"
                                    className="custom-file-upload btn btn-outline-primary rounded-pill p-2 px-4">
                                    Choose Image
                                </label>
                                <input
                                    id="imageUpload"
                                    type="file"
                                    className="form-control"
                                    onChange={handleFileChange}
                                    accept=".png,.jpg,.jpeg "
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsForm;

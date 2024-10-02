import { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useAuth } from "shared/context/AuthContext";
import HandleApiError from "shared/components/HandleApiError";
import { apiClient } from "shared/api/apiClient";
import config from "config";
import { useNavigate } from "react-router-dom";
import { useNotification } from "shared/context/NotificationContext";

const BillingInfo = ({
    isSubmitted,
    setIsSubmitted,
    isCheckout,
    setParentLoading,
}) => {
    const { user, loading: userLoading, set_user } = useAuth();
    const [billingData, setBillingData] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { showNotification } = useNotification();
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        streetAddress: "",
        countryRegion: "",
        states: "",
        email: "",
        telephone: "",
        zipCode: "",
    });

    useEffect(() => {
        if (!userLoading) {
            setBillingData(user.extras);
        }
    }, [userLoading, user]);

    useEffect(() => {
        if (!userLoading) {
            setFormData({
                firstName: billingData ? billingData.firstName : user.firstName,
                lastName: billingData ? billingData.lastName : user.lastName,
                email: billingData ? billingData.email : user.email,
                telephone: billingData ? billingData.telephone : user.telephone,
                companyName: billingData ? billingData.companyName : "",
                streetAddress: billingData ? billingData.streetAddress : "",
                countryRegion: billingData ? billingData.countryRegion : "",
                states: billingData ? billingData.states : "",
                zipCode: billingData ? billingData.zipCode : "",
            });
        }
    }, [billingData, user, userLoading]);

    const handleInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (isSubmitted) {
            setIsSubmitted(false);
            const handleSubmit = async () => {
                setLoading(true);
                setParentLoading(true);
                try {
                    const response = await apiClient.put(
                        `${config.API_BASE_URL}/user/billing`,
                        formData
                    );
                    set_user(response.data.data);
                    if (isCheckout) {
                        navigate("/checkout/payment");
                    } else {
                        showNotification(
                            "Billing Information Updated Successfully"
                        );
                    }
                    console.log(response);
                } catch (err) {
                    HandleApiError(err, setError);
                } finally {
                    setLoading(false);
                    setParentLoading(false);
                }
            };
            handleSubmit();
        }
    }, [
        isSubmitted,
        formData,
        isCheckout,
        setIsSubmitted,
        setParentLoading,
        navigate,
        set_user,
        showNotification,
    ]);

    return (
        <div>
            <div>
                {error && <p className="text-danger">{error}</p>}
                <form className="row g-3">
                    <div className="col-md-4">
                        <label
                            htmlFor="firstName"
                            className="form-label billing-label">
                            First name
                        </label>
                        <input
                            type="text"
                            className="form-control billing-input"
                            placeholder="Your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="lastName"
                            className="form-label billing-label">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="form-control billing-input"
                            placeholder="Your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="companyName"
                            className="form-label billing-label">
                            Company Name{" "}
                            <span className="text-muted">(optional)</span>
                        </label>
                        <input
                            type="text"
                            className="form-control billing-input"
                            placeholder="Company name"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-12">
                        <label
                            htmlFor="streetAddress"
                            className="form-label billing-label">
                            Street Address
                        </label>
                        <input
                            type="text"
                            className="form-control billing-input"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="country"
                            className="form-label billing-label">
                            Country
                        </label>
                        <CountryDropdown
                            value={formData.countryRegion}
                            onChange={(value) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    countryRegion: value,
                                }))
                            }
                            name="countryRegion"
                            classes="form-select w-100 billing-input"
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="region"
                            className="form-label billing-label">
                            Region
                        </label>
                        <RegionDropdown
                            country={formData.countryRegion}
                            value={formData.states}
                            onChange={(value) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    states: value,
                                }))
                            }
                            name="states"
                            classes="form-select billing-input w-100"
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="streetAddress"
                            className="form-label billing-label">
                            ZipCode
                        </label>
                        <input
                            type="number"
                            className="form-control billing-input"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="email"
                            className="form-label billing-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control billing-input"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="phoneNumber"
                            className="form-label billing-label">
                            Phone
                        </label>
                        <input
                            type="number"
                            className="form-control billing-input"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BillingInfo;

import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
const BillingInfo = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    return (
        <div>
            <div>
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
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="country"
                            className="form-label billing-label">
                            Country
                        </label>
                        <CountryDropdown
                            value={country}
                            onChange={(value) => setCountry(value)}
                            name="country"
                            classes="form-select w-100 billing-input"
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="region"
                            className="form-label billing-label">
                            Region
                        </label>
                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(value) => setRegion(value)}
                            name="region"
                            classes="form-select billing-input"
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
                            name="phoneNumber"
                        />
                    </div>
                    
                </form>
                
            </div>
        </div>
    );
};

export default BillingInfo;

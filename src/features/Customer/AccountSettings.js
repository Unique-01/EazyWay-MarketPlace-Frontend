import AccountSettingsForm from "shared/components/AccountSettingsForm";
import BillingInfo from "features/Checkout/BillingInfo";
import ChangePassword from "features/Auth/components/ChangePassword";
import { useState } from "react";
import ButtonLoading from "shared/components/ButtonLoading";

const CustomerAccountSettings = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleIsSubmitted = () => {
        setIsSubmitted(true);
    };

    return (
        <div className="poppins">
            <div className="">
                <div className="card">
                    <div className="card-header pt-3">
                        <h5>Account Settings</h5>
                    </div>
                    <div className="">
                        <div className="">
                            <AccountSettingsForm />
                        </div>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header pt-3">
                        <h5>Billing Address</h5>
                    </div>
                    <div className="card-body">
                        <BillingInfo
                            isSubmitted={isSubmitted}
                            setIsSubmitted={setIsSubmitted}
                            setParentLoading={setLoading}
                        />
                        <button
                            onClick={handleIsSubmitted}
                            disabled={loading}
                            className="btn-primary btn text-white rounded-pill fw-semibold p-3 mt-4"
                            style={{ fontSize: "13px" }}>
                            Save Changes {loading && <ButtonLoading />}
                        </button>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header pt-3">
                        <h5>Change Password</h5>
                    </div>
                    <div className="card-body">
                        <ChangePassword />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerAccountSettings;

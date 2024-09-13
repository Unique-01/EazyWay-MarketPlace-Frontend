import AccountSettingsForm from "./Components/AccountSettingsForm";
import BillingInfo from "pages/Checkout/BillingInfo";
import ChangePassword from "pages/Auth/components/ChangePassword";

const CustomerAccountSettings = () => {
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
                        <BillingInfo />
                        <button
                            className="btn-primary btn text-white rounded-pill fw-semibold p-3 mt-4"
                            style={{ fontSize: "13px" }}>
                            Save Changes
                        </button>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-header pt-3">
                        <h5>Change Password</h5>
                    </div>
                    <div className="card-body">
                        <ChangePassword/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerAccountSettings;

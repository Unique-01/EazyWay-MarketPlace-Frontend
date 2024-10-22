import AccountSettingsForm from "shared/components/AccountSettingsForm";
import ChangePassword from "features/Auth/components/ChangePassword";

const MerchantAccountSettings = () => {
    return (
        <div className="poppins">
            <div className="">
                <div className="card">
                    <div className="card-header pt-3">
                        <h5>Account Settings</h5>
                    </div>
                    <div className="">
                        <div className="">
                            <AccountSettingsForm merchant={true} />
                        </div>
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

export default MerchantAccountSettings;

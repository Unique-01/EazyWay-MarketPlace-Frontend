import { useState, useEffect,useContext } from "react";
import PasswordInput from "./PasswordInput";
import { apiClient } from "shared/api/apiClient";
import config from "config";
import HandleApiError from "shared/components/HandleApiError";
import ButtonLoading from "shared/components/ButtonLoading";
import { NotificationContext } from "shared/context/NotificationContext";


const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [validateError, setValidateError] = useState(false);
    const [error, setError] = useState("");
    const { showNotification } = useContext(NotificationContext);

    const initialFormState = {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    };
    const [formData, setFormData] = useState(initialFormState);
    useEffect(() => {
        if (formData.newPassword !== formData.confirmNewPassword) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    }, [formData.newPassword, formData.confirmNewPassword]);
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        setError("");
        try {
            await apiClient.put(
                `${config.API_BASE_URL}/user/update-password`,
                formData
            );
            showNotification("Password Changed Successfully")

        } catch (err) {
            console.log(err);
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
            setFormData(initialFormState);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row row-gap-3">
                    {validateError && (
                        <p className="form-error text-danger">
                            Passwords do not match
                        </p>
                    )}
                    {error && <p className="form-error text-danger">{error}</p>}
                    <div className="col-12">
                        <label
                            htmlFor="oldPassword"
                            className="form-label billing-label">
                            Current Password
                        </label>
                        <PasswordInput
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleInputChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="newPassword"
                            className="form-label billing-label">
                            New Password
                        </label>
                        <PasswordInput
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            className={validateError && "error-input"}
                            disabled={loading}
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            htmlFor="confirmNewPassword"
                            className="form-label billing-label">
                            Confirm New Password
                        </label>
                        <PasswordInput
                            name="confirmNewPassword"
                            value={formData.confirmNewPassword}
                            onChange={handleInputChange}
                            className={validateError && "error-input"}
                            disabled={loading}
                        />
                    </div>
                </div>
                <button
                    className="btn-primary btn text-white rounded-pill fw-semibold p-3 mt-4"
                    style={{ fontSize: "13px" }}
                   type="submit"
                    disabled={loading || validateError}>
                    Change Password {loading && <ButtonLoading />}
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;

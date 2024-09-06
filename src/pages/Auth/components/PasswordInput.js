import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const PasswordInput = ({ value, onChange, disabled }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="position-relative p-0">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control input"
                value={value}
                onChange={onChange}
                name="password"
                disabled={disabled}
                required
            />
            <button
                type="button"
                className="position-absolute btn end-0 top-50 translate-middle-y "
                onClick={togglePasswordVisibility}
                style={{ border: "none" }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};

export default PasswordInput;

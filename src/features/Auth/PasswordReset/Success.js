import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const PasswordResetSuccess = () => {
    return (
        <div className="signup_success d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div>
                    <BsFillPatchCheckFill className="text-primary fs-1" />
                    <p className="text-primary fw-bold mt-3">
                        Password Reset Successfully
                    </p>
                    <Link
                        to="/login"
                        className="btn btn-primary text-white fw-bold  w-100 rounded-pill">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetSuccess;

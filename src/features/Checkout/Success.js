import { LuPackageOpen } from "react-icons/lu";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <div className="signup_success d-flex justify-content-center align-items-center">
            <div className="text-center">
                <div>
                    <LuPackageOpen className="text-primary fs-1" />
                    <p className="text-primary fw-bold mt-3">Order Received</p>
                    <Link
                        to="/customer"
                        className="btn btn-primary text-white fw-bold px-4 w-100 rounded-pill">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSuccess;

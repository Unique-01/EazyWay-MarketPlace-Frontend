import { TbUserDollar } from "react-icons/tb";
// import MerchantIcon from "assets/icons/merchant.svg";
import "./AccountSelector.css";
import { Link } from "react-router-dom";
import { ReactComponent as MerchantIcon } from "assets/icons/merchant.svg";

const AccountSelector = ({ customerLink, merchantLink }) => (
    <div className="container">
        <div className="h-100 w-100">
            <div className="d-flex justify-content-center align-items-center py-5 my-5">
                <div>
                    <h4 className="text-center selector-heading text-primary">
                        Sign in as
                    </h4>
                    <div className="d-flex gap-5 pt-5">
                        <Link to={customerLink} className="user-selector">
                            <div>
                                <TbUserDollar className="text-primary selector-user-icon" />
                                <p className="mb-0 selector-text">Customer</p>
                            </div>
                        </Link>

                        <Link to={merchantLink} className="merchant-selector">
                            <div>
                                <MerchantIcon className="selector-merchant-icon" />
                                <p className="mb-0 selector-text">Merchant</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AccountSelector;

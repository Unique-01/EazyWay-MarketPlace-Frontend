import AccountSelector from "../components/AccountSelector";
import "./Signup.css";

const SignUpOverview = () => {
    return (
        <div>
            <AccountSelector
                customerLink="/signup/customer"
                merchantLink="/signup/merchant"
            />
        </div>
    );
};

export default SignUpOverview;

import AccountSelector from "../components/AccountSelector";

const LoginOverview = () => {
    return (
        <div>
            <AccountSelector
                customerLink="/login/customer"
                merchantLink="/login/merchant"
            />
        </div>
    );
};

export default LoginOverview;

import Button from "../Button";
import "./SubscribeForm.css"

const SubscribeForm = () => {
    return (
        <div className=" subscribe-form">
            <div className="d-flex border rounded-pill align-items-center ps-3 justify-content-between  bg-white w-lg-75">
                <input type="text" placeholder="Your email address" className="  form-control border-0 shadow-none" />
                <Button text="Subscribe" />
            </div>
        </div>
    );
};

export default SubscribeForm
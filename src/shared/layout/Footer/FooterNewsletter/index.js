import SubscribeForm from "shared/components/SubscribeForm";
import "./Subscribe.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Subscribe = () => {
    return (
        <div className=" bg-light">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
                    <div>
                        <h4 className="fw-semibold">
                            Subscribe our Newsletter
                        </h4>
                        
                    </div>
                    <div className="d-flex flex-wrap  align-items-center justify-content-between gap-md-5 gap-3 ">
                        <form>
                            <SubscribeForm />
                        </form>
                        <div className="d-flex justify-content-between gap-3">
                            <div className=" bg-primary rounded-circle  px-1">
                                <Link to="" className="text-white">
                                    <FaFacebookF />
                                </Link>
                            </div>
                            <Link to="" className="text-dark">
                                <FaTwitter />
                            </Link>
                            <Link to="" className="text-dark">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;

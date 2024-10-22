import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { PiEnvelope } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { useNotification } from "shared/context/NotificationContext";
import axios from "axios";
import config from "config";
import HandleApiError from "shared/components/HandleApiError";
import ButtonLoading from "shared/components/ButtonLoading";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        description: "",
        telephone: "",
        subject: "",
    });
    const [loading, setLoading] = useState(false);
    const { showNotification } = useNotification();
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await axios.post(`${config.API_BASE_URL}/support`, formData);
            showNotification("Your message has been sent successfully!");
        } catch (err) {
            HandleApiError(err, setError);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="container poppins contact pb-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card my-border shadow-sm">
                        <div className="card-body text-center">
                            <div>
                                <IoLocationOutline className="icon" />
                                <p className="small mt-3">
                                    2715 Ash Dr. San Jose, South Dakota 83475
                                </p>
                            </div>
                            <hr />
                            <div>
                                <PiEnvelope className="icon" />
                                <p className="small mt-3">
                                    Proxy@gmail.com <br /> Help.proxy@gmail.com
                                </p>
                            </div>
                            <hr />
                            <div>
                                <FiPhoneCall className="icon" />
                                <p className="small mt-3">
                                    (219) 555-0114 <br /> (219) 555-0114
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card border-primary">
                        <div className="card-body p-5">
                            <h5 className="fw-semibold">Just Say Hello!</h5>
                            <p className="small text-muted">
                                Kindly reach out for your complains or any
                                issues on your order
                            </p>
                            <div className="mt-4">
                                <form onSubmit={handleSubmit}>
                                    {error && (
                                        <p className="text-danger small">
                                            {error}
                                        </p>
                                    )}
                                    <div className="row g-2">
                                        <div className="col-md-6 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="form-control py-2"
                                                name="fullname"
                                                value={formData.fullname}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                // required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control py-2"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                // required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="form-control py-2"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                // required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="form-control py-2"
                                                name="telephone"
                                                value={formData.telephone}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                // required
                                            />
                                        </div>
                                        <div className="col-12 mb-2">
                                            <textarea
                                                rows={4}
                                                className="form-control py-2"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                // required
                                                placeholder="Description"></textarea>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-primary text-white px-4 py-2 mt-3  rounded-pill fw-semibold">
                                        Send Message
                                        {loading && <ButtonLoading />}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

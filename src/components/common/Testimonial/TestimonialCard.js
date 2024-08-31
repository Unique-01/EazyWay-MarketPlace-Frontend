import React from "react";
import "./Testimonial.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card px-4 py-3 pb-4 shadow rounded-lg position-relative">
            <div className="p-0">
                <RiDoubleQuotesR className="testimonial-quote" />
            </div>
            <p className="poppins testimonial-feedback">
                {testimonial.feedback}
            </p>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex align-items-center gap-2">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={54}
                        height={54}
                        className="rounded-circle"
                    />

                    <p className="mb-0 poppins testimonial-name">
                        {testimonial.name}
                        <br />
                        <span className="testimonial-role">{testimonial.role}</span>
                    </p>
                </div>
                <div>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="star-icon">
                            <FaStar
                                color={
                                    i < testimonial.rating
                                        ? "gold"
                                        : "lightgray"
                                }
                            />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;

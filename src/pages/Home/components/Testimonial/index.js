import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";
import Paul from "assets/images/user/paul.webp";
import John from "assets/images/user/john.webp";
import Nia from "assets/images/user/user.webp";
import Ethan from "assets/images/user/ethan.webp";

const testimonials = [
    {
        name: "Paul Emurotu",
        role: "Customer",
        position: "CEO, ACME",
        rating: 2.0,
        image: Paul,
        feedback:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        name: "John Dara",
        role: "Customer",
        position: "CEO, Sumi Empire",
        rating: 3.0,
        image: John,
        feedback:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        name: "Ethan Hall",
        role: "Customer",
        position: "CEO at NovaTech",
        rating: 5.0,
        image: Ethan,
        feedback:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
    {
        name: "Nia Thompson",
        role: "Customer",
        position: "Software Engineer, Apex Technologies",
        rating: 5.0,
        image: Nia,
        feedback:
            "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                      initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-5 text-dark">
            <h4 className=" ps-2 testimonial-heading poppins">Client Testimonials</h4>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div className="px-2 pt-4" key={index}>
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;

import "./HomeSlider.css";
import Slider1 from "assets/images/slider/slider-1.webp";
import Slider2 from "assets/images/slider/slider-2.webp";
import Slider3 from "assets/images/slider/slider-3.webp";
import { HiArrowRight } from "react-icons/hi";

const HomeSlider = () => {
    const CarouselCaption = ({ className = "" }) => (
        <div className={`carousel-caption text-start ms-0 ${className}`}>
            <div className="row">
                <div className="col-md-8">
                    <h1 className={className}>Fresh & Healthy Organic Food</h1>
                    <p className="lead">
                        Sale up to
                        <br /> 48% off
                    </p>
                    <div className="poppins mt-4 ">
                    <a
                        href="#your-link"
                        className="btn btn-primary rounded-pill text-white slide-btn p-2 px-3">
                        Shop now <HiArrowRight />

                    </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img
                            src={Slider1}
                            className="d-block w-100 "
                            alt="..."
                        />
                        <CarouselCaption className={"text-black"} />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={Slider2}
                            className="d-block w-70 "
                            alt="..."
                        />
                        <CarouselCaption />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={Slider3}
                            className="d-block w-100 "
                            alt="..."
                        />
                        <CarouselCaption />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;

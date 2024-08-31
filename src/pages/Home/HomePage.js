import HomeSlider from "components/common/HomeSlider";
import CategoryData from "./category.json";
import CategoryCard from "components/common/CategoryCard";
import "./Home.css";
import { HiArrowRight } from "react-icons/hi";
import ProductData from "pages/Products/products.json";
import ProductCard from "components/common/ProductCard";
import Testimonial from "components/common/Testimonial";
import CategoriesSidebar from "./CategoriesSidebar";

const HomePage = () => {
    const limit = 6;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <CategoriesSidebar/>
                    </div>
                    <div className="col-lg-9">
                        <HomeSlider />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-center home-category mb-5 pb-3">
                        <h3 className="text-primary ">CATEGORY</h3>
                        <h4>Shop by Top Categories</h4>
                    </div>
                    <div className="row row-gap-4">
                        {CategoryData.map((category) => (
                            <div className="col-6 col-md-4 col-lg-2">
                                <CategoryCard category={category} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-5 pt-3">
                    <div className="d-flex justify-content-between align-items-center home-feature-product mb-3">
                        <h4 className="home-feature-product">
                            Featured Products
                        </h4>
                        <a
                            href=" "
                            className="d-inline-flex align-items-center gap-2">
                            View All <HiArrowRight />
                        </a>
                    </div>
                    <div className="row g-0">
                        {ProductData.slice(0, limit).map((related, index) => (
                            <div className="col-6 col-md-4 col-lg-2 mx-auto">
                                <ProductCard product={related} key={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="home-testimonial">
                <div className="container">
                <Testimonial />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

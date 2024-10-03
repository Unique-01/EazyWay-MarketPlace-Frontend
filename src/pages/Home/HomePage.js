import HomeSlider from "pages/Home/components/HomeSlider";
import CategoryCard from "shared/components/CategoryCard";
import "./Home.css";
import { HiArrowRight } from "react-icons/hi";
import ProductCard from "shared/components/ProductCard";
import Testimonial from "pages/Home/components/Testimonial";
import CategoriesSidebar from "./components/CategoriesSidebar";
import { useContext, useEffect, useState } from "react";
import ProductCategoryContext from "shared/context/ProductCategoryContext";
import ProductContext from "shared/context/ProductContext";
import Loading from "shared/components/Loading";
import { Link } from "react-router-dom";

const HomePage = () => {
    const limit = 5;
    const { categories, loading: categoryLoading } = useContext(
        ProductCategoryContext
    );
    const [categoryList, setCategoryList] = useState([]);
    const { products, loading: productsLoading } = useContext(ProductContext);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (!categoryLoading) {
            setCategoryList(categories);
        }
    }, [categories, categoryLoading]);

    useEffect(() => {
        if (!productsLoading) {
            setProductList(products);
        }
    }, [productsLoading, products]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-none d-lg-block">
                        <CategoriesSidebar />
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
                        {categoryLoading && <Loading />}
                        {categoryList.map((category) => (
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
                        <Link
                            to="/products"
                            className="d-inline-flex align-items-center gap-2">
                            View All <HiArrowRight />
                        </Link>
                    </div>
                    <div className="row row-gap-3">
                        {productsLoading && <Loading />}
                        {productList.slice(0, limit).map((product, index) => (
                            <div className="col-6 col-md-4 col-lg mx-auto">
                                <ProductCard product={product} key={index} />
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

import { useParams } from "react-router-dom";
import ProductData from "./products.json";
import { useEffect, useState } from "react";
import Loading from "components/common/Loading";
import TabComponent from "components/common/TabComponent";
import "./ProductDetail.css";
import StarRating from "components/common/StarRating";
import QuantitySelector from "components/common/QuantitySelector";
import { ReactComponent as ShoppingBasket } from "assets/icons/shopping-basket.svg";
import { FaRegHeart } from "react-icons/fa";
import ReviewData from "./review.json";
import ReviewCard from "components/common/ReviewCard";
import ProductCard from "components/common/ProductCard";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const limit = 4;

    useEffect(() => {
        const foundProduct = ProductData.find(
            (item) => item.id.toString() === productId.toString()
        );
        setProduct(foundProduct);
    }, [productId]);

    if (!product) {
        return <Loading />;
    }

    return (
        <div className="mb-5 pb-5 container">
            <div className="mx-md-5 row">
                <div className="col-md-6 ">
                    <div className="d-flex justify-content-end">
                        <img
                            src={require(`/src/assets/images/products/${product.image}`)}
                            alt={product.name}
                            height={"400px"}
                        />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div>
                        <h3 className="product-detail-name d-inline-flex align-items-center gap-1">
                            {product.name}
                            <span
                                className={`status rounded-pill p-1 ${
                                    product.status === "available"
                                        ? "text-primary available"
                                        : "unavailable"
                                } `}>
                                {product.status === "available"
                                    ? "Available"
                                    : "Unavailable"}
                            </span>
                        </h3>
                        <div>
                            <StarRating rating={product.rating} />
                        </div>
                        <div className="mt-3">
                            <span className="poppins fw-medium text-primary">
                                ${product.price}
                            </span>
                        </div>
                        <hr className="border-secondary" />
                        <div className="d-flex align-items-center gap-2">
                            <QuantitySelector />
                            {/* <div className="text-white"> */}
                            <button className="btn btn-primary w-100 justify-content-center gap-2 product-detail-cart-btn rounded-pill text-white d-flex align-items-center py-1">
                                Add to Cart{" "}
                                <ShoppingBasket className="add-to-cart-icon" />
                            </button>
                            {/* </div> */}
                            <div>
                                <button className="text-primary product-detail-wishlist">
                                    <FaRegHeart />
                                </button>
                            </div>
                        </div>

                        <div className="product-detail-category poppins text-secondary mt-4">
                            <div>
                                <span className="text-black fw-medium">
                                    Category:&nbsp;
                                </span>
                                {product.category}
                            </div>
                            <div className="mt-2">
                                <span className="text-black fw-medium">
                                    Tag:&nbsp;
                                </span>
                                {product.category}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-md-3 mt-4 mt-md-0">
                    <TabComponent description={product.description} />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center product-detail-review poppins">
                        <h4 className="">Reviews</h4>
                        <a href=" ">View All</a>
                    </div>
                    <div>
                        {ReviewData.map((review, index) => (
                            <div className="mt-3">
                                <ReviewCard key={index} review={review} />
                                <hr className="border-secondary" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h4 className="text-center poppins fw-semibold text-black">
                    Related Products
                </h4>
                <div className="row  pt-3">
                    {ProductData.filter(
                        (related) => related.category === product.category
                    )
                        .slice(0, limit)
                        .map((related) => (
                            <div className="col-md-3">
                                <ProductCard product={related} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

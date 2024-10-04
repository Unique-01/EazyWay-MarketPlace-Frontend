import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loading from "shared/components/Loading";
import TabComponent from "features/Products/components/TabComponent";
import "./ProductDetail.css";
import StarRating from "shared/components/StarRating";
import QuantitySelector from "shared/components/QuantitySelector";
import { ReactComponent as ShoppingBasket } from "assets/icons/shopping-basket.svg";
import { FaRegHeart } from "react-icons/fa";
import ReviewData from "./review.json";
import ReviewCard from "features/Products/components/ReviewCard";
import ProductCard from "shared/components/ProductCard";
import MerchantProductContext from "shared/context/MerchantProductContext";
import picture from "assets/images/eazyWay-logo.png";
import ProductContext from "shared/context/ProductContext";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import { useCart } from "shared/context/CartContext";
import { useWishlist } from "shared/context/WishListContext";

const ProductDetail = () => {
    const { productId } = useParams();
    const { products, loading } = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, isInCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();
    const limit = 4;

    useEffect(() => {
        if (!loading) {
            const foundProduct = products.find(
                (item) => item._id.toString() === productId.toString()
            );
            setProduct(foundProduct);
            console.log(foundProduct);
        }
    }, [productId, loading, products]);

    if (loading) {
        return <Loading />;
    }
    if (!product) {
        return <NotFoundPage />;
    }
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    return (
        <div className="mb-5 pb-5 container">
            <div className="mx-md-5 row">
                <div className="col-md-6 ">
                    <div className="d-flex justify-content-end">
                        {product.image.length > 0 ? (
                            <img
                                src={product.image[0].url}
                                alt={product.title}
                                height={"400px"}
                            />
                        ) : (
                            <img
                                src={picture}
                                alt={product.title}
                                height={"400px"}
                            />
                        )}
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div>
                        <h3 className="product-detail-name d-inline-flex align-items-center gap-1">
                            {product.title}
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
                                ${product.amount}
                            </span>
                        </div>
                        <hr className="border-secondary" />
                        <div className="d-flex align-items-center gap-2">
                            <QuantitySelector
                                onQuantityChange={handleQuantityChange}
                            />
                            {/* <div className="text-white"> */}
                            <button
                                disabled={isInCart(product._id)}
                                className="btn btn-primary w-100 justify-content-center gap-2 product-detail-cart-btn rounded-pill text-white d-flex align-items-center py-1"
                                onClick={() =>
                                    addToCart(product._id, quantity)
                                }>
                                Add to Cart{" "}
                                <ShoppingBasket className="add-to-cart-icon" />
                            </button>
                            {/* </div> */}
                            <div>
                                <button
                                    disabled={isInWishlist(product._id)}
                                    className="text-primary product-detail-wishlist"
                                    onClick={() => addToWishlist(product)}>
                                    <FaRegHeart />
                                </button>
                            </div>
                        </div>

                        <div className="product-detail-category poppins text-secondary mt-4">
                            <div>
                                <span className="text-black fw-medium">
                                    Category:&nbsp;
                                </span>
                                <span className="text-capitalize">
                                    {product.category.title}
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="text-black fw-medium">
                                    Tag:&nbsp;
                                </span>
                                {product.tags.map((tag) => (
                                    <>{tag}, </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-md-3 mt-4 mt-md-0">
                    <TabComponent description={product.description} />
                </div>
                {/* <div className="col-md-6">
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
                </div> */}
            </div>
            <div className="mt-4">
                <h4 className="text-center poppins fw-semibold text-black">
                    Related Products
                </h4>
                <div className="row  pt-3">
                    {products
                        .filter(
                            (related) =>
                                related.category._id === product.category._id
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

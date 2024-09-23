import { LuSettings2 } from "react-icons/lu";
import "./ProductList.css";
import FilterAccordion from "features/Products/components/FilterAccordion";
import { useContext, useEffect, useState } from "react";
import ProductCard from "shared/components/ProductCard";
import MerchantProductContext from "shared/context/MerchantProductContext";
import Loading from "shared/components/Loading";

const ProductList = () => {
    const { products, loading } = useContext(MerchantProductContext);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (!loading) {
            setProductList(products);
        }
    }, [products, loading]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-5 poppins mb-5 pb-5">
            <div className="row">
                <div className="col-md-4">
                    <span className="bg-primary p-2 rounded rounded-pill text-white d-inline-flex gap-2 align-items-center px-3 fw-semibold filter">
                        Filter <LuSettings2 className="fs-5" />
                    </span>
                    <div className="pe-4 pt-4">
                        <FilterAccordion />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2 text-body-secondary">
                            <label
                                htmlFor="sort-select"
                                className="form-label text-nowrap fs-small">
                                Sort by:
                            </label>
                            <select
                                className="form-select shadow-none text-muted fs-small border"
                                id="sort-select">
                                <option>Latest</option>
                                <option>Price</option>
                            </select>
                        </div>
                        <div className="text-muted fs-small">
                            <span className="fw-semibold text-black">
                                {products.length}
                            </span>
                            &nbsp;Results Found
                        </div>
                    </div>
                    <div className="row row-gap-4 pt-5">
                        {productList.map((product, index) => (
                            <div className="col-md-4">
                                <ProductCard key={index} product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;

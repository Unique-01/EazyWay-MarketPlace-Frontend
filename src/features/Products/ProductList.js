import { LuSettings2 } from "react-icons/lu";
import "./ProductList.css";
import FilterAccordion from "features/Products/components/FilterAccordion";
import { useContext, useEffect, useState } from "react";
import ProductCard from "shared/components/ProductCard";
import ProductContext from "shared/context/ProductContext";
import Loading from "shared/components/Loading";
import { Pagination } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ButtonLoading from "shared/components/ButtonLoading";
import { useLocation } from "react-router-dom";

const ProductList = () => {
    const { products, loading, moreLoading, hasNextPage, loadMore } =
        useContext(ProductContext);
    const [productList, setProductList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOption, setSortOption] = useState("latest");
    const itemsPerPage = 10;
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const categoryId = query.get("categoryId");
    const searchQuery = query.get("q");

    useEffect(() => {
        let filteredProducts = [...products];

        // Filter products based on selected category
        if (selectedCategory) {
            filteredProducts = products.filter(
                (product) => product.category.title === selectedCategory
            );
        }

        // Sort products based on selected sort option
        if (sortOption === "price") {
            filteredProducts.sort((a, b) => b.amount - a.amount);
        }

        if (sortOption === "latest") {
            filteredProducts.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            // Sorting by createdAt field
        }

        setProductList(filteredProducts);
    }, [products, selectedCategory, sortOption]);

    useEffect(() => {
        if (categoryId) {
            setProductList(
                products.filter(
                    (product) => product.category.title === categoryId
                )
            );
        }
    }, [categoryId, products]);

    useEffect(() => {
        if (searchQuery) {
            setProductList(
                products.filter(
                    (product) =>
                        product.title.includes(searchQuery) ||
                        product.category.title.includes(searchQuery)
                )
            );
        }
    }, [searchQuery, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        console.log(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(productList.length / itemsPerPage);

    const startIdx = (currentPage - 1) * itemsPerPage;
    let currentProducts = productList.slice(startIdx, startIdx + itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-5 poppins product-list mb-5 pb-5">
            <div className="row">
                <div className="col-md-4">
                    <span className="bg-primary p-2 rounded rounded-pill text-white d-inline-flex gap-2 align-items-center px-3 fw-semibold filter">
                        Filter <LuSettings2 className="fs-5" />
                    </span>
                    <div className="pe-4 pt-4">
                        <FilterAccordion
                            onCategoryChange={handleCategoryChange}
                        />
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
                                id="sort-select"
                                value={sortOption}
                                onChange={handleSortChange}>
                                <option value="latest">Latest</option>
                                <option value="price">Price</option>
                            </select>
                        </div>
                        <div className="text-muted fs-small">
                            <span className="fw-semibold text-black">
                                {productList.length}
                            </span>
                            &nbsp;Results Found
                        </div>
                    </div>
                    <div className="row row-gap-4 pt-5">
                        {currentProducts.map((product, index) => (
                            <div key={index} className="col-md-4">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-3">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}>
                                <MdArrowBackIosNew />
                            </Pagination.Prev>

                            {Array.from({ length: totalPages }, (_, idx) => (
                                <Pagination.Item
                                    key={idx + 1}
                                    active={idx + 1 === currentPage}
                                    onClick={() => handlePageChange(idx + 1)}>
                                    {idx + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}>
                                <MdArrowForwardIos />
                            </Pagination.Next>
                        </Pagination>
                    </div>
                    {totalPages === currentPage && (
                        <div className="text-center mb-2">
                            <button
                                className="btn btn-primary text-white"
                                onClick={loadMore}
                                disabled={moreLoading || !hasNextPage}>
                                Load More {moreLoading && <ButtonLoading />}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;

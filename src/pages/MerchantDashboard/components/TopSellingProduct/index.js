import "./TopSellingProduct.css";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const TopSellingProduct = ({ productList, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = productList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate the current start and end indices for the items
    const startIdx = (currentPage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

    // Get the products for the current page
    const currentProduct = productList.slice(startIdx - 1, endIdx);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="top-selling-product inter">
            <div className="bg-white rounded shadow-sm">
                <div className="d-flex bg-white justify-content-between align-items-center p-3">
                    <h5 className=" m-0 heading text-capitalize">
                        Top Selling Product
                    </h5>
                    <button className="btn btn-white border filter-btn"><VscSettings className="me-1" style={{fontSize:"16px"}} />Filters</button>
                </div>
                <div className="table-responsive">
                    <table className=" table">
                        <thead className="table-head mb-5">
                            <tr className="text-capitalize">
                                <th scope="col" className="ps-4">
                                    product
                                </th>
                                <th scope="col" className="product-column">
                                    sales
                                </th>
                                <th scope="col" className="product-column">
                                    Amount
                                </th>
                                <th scope="col" className="product-column">
                                    price
                                </th>
                                <th scope="col" className="product-column">
                                    status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="body mt-5 pt-5">
                            {currentProduct.map((product, index) => (
                                <tr className="align-middle px-0" key={index}>
                                    <td className="ps-4">
                                        <div className="d-inline-flex align-items-center gap-3 ">
                                            <img
                                                src={require(`/src/assets/images/products/${product.image}`)}
                                                alt={product.name}
                                                className="img-fluid"
                                                style={{ maxWidth: "50px" }}
                                            />
                                            <div className="product-text fw-normal">
                                                <span className="item-name">
                                                    {product.name}
                                                </span>
                                                <br />
                                                <span className="sku">
                                                    SKU: 30283
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="product-text product-column">
                                        401
                                    </td>
                                    <td className="product-text product-column">
                                        ${product.price}
                                    </td>
                                    <td className="product-text product-column">
                                        ${product.price}
                                    </td>
                                    <td className="product-column">
                                        <div className="status">
                                            {product.isAvailable ? (
                                                <span className="low-stock rounded-pill">
                                                    In Stock
                                                </span>
                                            ) : (
                                                <span className="in-stock rounded-pill">
                                                    Low Stock
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="d-flex justify-content-between  px-4 py-2">
                    {/* Pagination Info */}
                    <div className="pagination-info ">
                        Showing {startIdx}-{endIdx} of {totalItems} products
                    </div>

                    {/* Pagination Controls */}
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage - 1)}
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
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}>
                            <MdArrowForwardIos />
                        </Pagination.Next>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;

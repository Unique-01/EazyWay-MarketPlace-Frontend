// import "./MerchantProductTable.css";
import { useState } from "react";
import MerchantPagination from "../MerchantPagination";
import picture from "assets/images/category/bakery.png";
import { BsEye } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MerchantProductTable = ({ productList, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = productList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate the current start and end indices for the items
    const startIdx = (currentPage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

    // Get the orders for the current page
    const currentProducts = productList.slice(startIdx - 1, endIdx);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="merchant-order-table inter">
            <div className="bg-white rounded shadow-sm">
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-head mb-5">
                            <tr className="text-capitalize">
                                <th scope="col" className="ps-4 order-column">
                                    <span className="d-flex  gap-2 align-items-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input shadow-none"
                                            id="select"
                                        />
                                        <span
                                            htmlFor="select"
                                            className="form-check-label">
                                            Product
                                        </span>
                                    </span>
                                </th>
                                <th scope="col" className="order-column">
                                    SKU
                                </th>
                                <th scope="col" className="order-column">
                                    category
                                </th>
                                <th scope="col" className="order-column">
                                    stock
                                </th>
                                <th scope="col" className="order-column">
                                    price
                                </th>
                                <th scope="col" className="order-column">
                                    status
                                </th>
                                <th scope="col" className="order-column">
                                    Added
                                </th>
                                <th scope="col" className="order-column">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="body mt-5 pt-5">
                            {currentProducts.map((product, index) => (
                                <tr className="align-middle px-0" key={index}>
                                    <td className="ps-4 order-column">
                                        <span className="d-flex  gap-2 align-items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input shadow-none"
                                                id="select"
                                            />
                                            <div className="d-inline-flex align-items-center gap-1 ">
                                                <img
                                                    src={picture}
                                                    alt={product.name}
                                                    className="img-fluid rounded"
                                                    style={{ maxWidth: "50px" }}
                                                />
                                                <div className="order-text fw-normal">
                                                    <span className="item-name">
                                                        {product.name}
                                                    </span>
                                                    <br />
                                                    <span className="other-product fade-color">
                                                        + 3 Variants
                                                    </span>
                                                </div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="order-column" style={{color:"#5C59E8",fontWeight:"600"}}>30220</td>
                                    <td className="order-text order-column fade-color">
                                        Bags and Pouch
                                    </td>
                                    <td className="order-text order-column">
                                        20
                                    </td>
                                    <td className="order-text order-column fade-color">
                                        ${product.price}
                                    </td>
                                    <td className="">
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
                                    <td className="order-column fade-color">
                                        Jun 22, 2024
                                    </td>
                                    <td>
                                        <div className="action d-flex gap-2">
                                            <Link>
                                                <BsEye />
                                            </Link>
                                            <Link>
                                                <RiPencilLine />
                                            </Link>
                                            <Link>
                                                <FaRegTrashAlt />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <MerchantPagination
                    startIdx={startIdx}
                    endIdx={endIdx}
                    totalItems={totalItems}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default MerchantProductTable;

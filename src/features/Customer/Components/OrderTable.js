import { CiSaveDown1 } from "react-icons/ci";
import "./OrderTable.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import FormattedDate from "shared/components/FormattedDate";

const OrderTable = ({
    orderList,
    itemsPerPage,
    heading,
    full = false,
    limit,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(orderList.length / itemsPerPage);

    const startIdx = (currentPage - 1) * itemsPerPage;
    let currentOrder = [];
    full
        ? (currentOrder = orderList.slice(startIdx, startIdx + itemsPerPage))
        : (currentOrder = orderList);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="order-table">
            <div className="border rounded">
                <div className="d-flex justify-content-between align-items-center p-3">
                    <h5 className="text-black fw-semibold text-capitalize">
                        {heading}
                    </h5>
                    <Link
                        to="/customer/order_history"
                        className="poppins small">
                        View All
                    </Link>
                </div>
                <div className="table-responsive">
                    <table className=" table table-borderless">
                        <thead className="order-head mb-5">
                            <tr className="text-uppercase table-head text-center ">
                                <th scope="col">order id</th>
                                <th scope="col">date</th>
                                <th scope="col">total</th>
                                <th scope="col">status</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody className="order-body mt-5 pt-5">
                            {currentOrder
                                .slice(0, limit)
                                .map((order, index) => (
                                    <tr
                                        className="align-middle text-center "
                                        key={index}>
                                        <td className="">{order.itemId}</td>
                                        <td className="">
                                            <FormattedDate
                                                date={order.createdAt}
                                            />
                                        </td>
                                        <td>
                                            ${order.amount}&nbsp;(
                                            {order.carts.length} Products)
                                        </td>
                                        <td className="orderStatus">
                                            {order.isCompleted ? (
                                                <span className="order-completed rounded-pill">
                                                    Completed
                                                </span>
                                            ) : (
                                                <span className="order-not-completed rounded-pill">
                                                    In Transit
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <span className="d-inline-flex align-items-center gap-3">
                                                {full && (
                                                    <Link
                                                        to={`/customer/order_history/${order._id}`}>
                                                        View
                                                    </Link>
                                                )}
                                                <CiSaveDown1
                                                    style={{ fontSize: "20px" }}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {full && (
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
            )}
        </div>
    );
};

export default OrderTable;

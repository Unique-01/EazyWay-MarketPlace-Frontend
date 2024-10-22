import "./OrderProduct.css";

const OrderProductTable = ({ orderProduct }) => {
    return (
        <div className="table-responsive">
            <table className="table order-product-table">
                <thead>
                    <tr className="text-uppercase text-center order-product-head">
                        <th scope="col" className="ps-0">
                            Product
                        </th>
                        <th scope="col">Price</th>
                        <th scope="col"> Quantity</th>
                        <th scope="col"> Subtotal</th>
                    </tr>
                </thead>
                <tbody className="">
                    {orderProduct.map((item, index) => (
                        <tr
                            className="align-middle poppins text-center"
                            key={item._id}>
                            <td className="">
                                <div className="d-inline-flex align-items-center gap-3 ">
                                    <img
                                        src={
                                            item.product.image &&
                                            item.product.image.length > 0
                                                ? item.product.image[0].url
                                                : ""
                                        }
                                        alt={item.product.title}
                                        className="img-fluid"
                                        style={{ maxWidth: "70px" }}
                                    />
                                    <span className="product-text fw-normal">
                                        {item.product.title}
                                    </span>
                                </div>
                            </td>
                            <td className="text-center poppins">
                                <span className="product-text fw-normal">
                                    ${item.price}
                                </span>
                            </td>
                            <td>
                                <span className="product-text">
                                    x{item.quantity}
                                </span>
                            </td>
                            <td>
                                <span className="poppins fw-medium product-text">
                                    ${item.price * item.quantity}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderProductTable;

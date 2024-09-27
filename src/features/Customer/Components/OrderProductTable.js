import CartItems from "features/Products/products.json";
import "./OrderProduct.css";

const OrderProductTable = () => {
    return (
        <div className="table-responsive">
            <table className="table order-product-table">
                <thead>
                    <tr className="text-uppercase text-center order-product-head">
                        <th scope="col" className="ps-0">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col"> Quantity</th>
                        <th scope="col"> Subtotal</th>
                    </tr>
                </thead>
                <tbody className="">
                    {CartItems.map((product, index) => (
                        <tr className="align-middle poppins text-center">
                            <td className="">
                                <div className="d-inline-flex align-items-center gap-3 ">
                                    <img
                                        src={require(`/src/assets/images/products/${product.image}`)}
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{ maxWidth: "70px" }}
                                    />
                                    <span className="product-text fw-normal">
                                        {product.name}
                                    </span>
                                </div>
                            </td>
                            <td className="text-center poppins">
                                <span className="product-text fw-normal">
                                    ${product.price}
                                </span>
                            </td>
                            <td>
                                <span className="product-text">x5</span>
                            </td>
                            <td>
                                <span className="poppins fw-medium product-text">
                                    $20
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

import { LiaTimesSolid } from "react-icons/lia";
import { FaRegSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const ProductCreate = () => {
    return (
        <div className="product-form inter py-4 mb-5">
            <div>
                <div className="d-flex justify-content-between">
                    <h5>Add Product</h5>
                    <div className="d-inline-flex gap-3">
                        <Link
                            to="/merchant/products"
                            className="btn cancel-btn btn-light border text-secondary">
                            <LiaTimesSolid /> Cancel
                        </Link>
                        <Link className="btn btn-primary text-white">
                            <FaRegSave /> Save Product
                        </Link>
                    </div>
                </div>
                <ProductForm />
            </div>
        </div>
    );
};

export default ProductCreate;

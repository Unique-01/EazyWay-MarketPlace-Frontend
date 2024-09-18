import { Link } from "react-router-dom";
import { PiExport } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import Products from "pages/Products/products.json";
import "./Products.css";
import MerchantProductTable from "../components/MerchantProductTable";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const MerchantProductList = () => {
    return (
        <div className="merchant-product-list py-4 mb-5 inter">
            <div>
                <div className="d-flex justify-content-between">
                    <h5>Product</h5>
                    <div className="d-inline-flex gap-3">
                        <button className="btn export-btn">
                            <PiExport /> Export
                        </button>
                        <Link
                            to="/merchant/products/add"
                            className="btn btn-primary text-white">
                            <IoMdAdd /> Add Product
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <form>
                        <div className="d-flex align-items-center border px-2 bg-white rounded">
                            <CgSearch className="search-icon" />
                            <input
                                type="text"
                                className="search-input form-control shadow-none border-0 bg-transparent"
                                placeholder="Search product . . ."
                            />
                        </div>
                    </form>
                    <div className="d-flex gap-3">
                        <input type="date" className="form-control" />
                        <button className="btn btn-white bg-white border filter-btn ">
                            <HiOutlineAdjustmentsHorizontal />
                            Filters
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <MerchantProductTable
                        productList={Products}
                        itemsPerPage={10}
                    />
                </div>
            </div>
        </div>
    );
};

export default MerchantProductList;

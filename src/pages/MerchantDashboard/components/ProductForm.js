import VariationForm from "pages/MerchantDashboard/components/VariationForm";
import ImageUpload from "components/common/ImageUpload";
import VideoUpload from "components/common/VideoUpload";
import { useState } from "react";
import Select from "react-select";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        sections: [],
    });
    const handleSectionsChange = (newSections) => {
        setFormData({
            ...formData,
            sections: newSections,
        });
    };
    const customSelectStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#00b207" : baseStyles.borderColor,
            boxShadow: state.isFocused ? "none" : baseStyles.boxShadow,
            "&:hover": {
                borderColor: "#00b207",
            },
        }),
        multiValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#BFECC180",
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: "#00B207",
        }),
        multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            color: "#00b207",
            ":hover": {
                backgroundColor: "#d0e9d0",
                color: "#000",
            },
        }),
    };
    return (
        <div>
            <div className="row mt-4">
                <div className="col-lg-8">
                    <form>
                        <div className=" bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">General Information</h6>
                            <div className="mb-3">
                                <label
                                    htmlFor="productName"
                                    className="form-label">
                                    Product Name
                                </label>
                                <input
                                    name="productName"
                                    id="productName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Type product name here . . ."
                                />
                            </div>
                            <div>
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    placeholder="Type product description here . . ."
                                    rows={5}
                                    className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">Media</h6>
                            <div className="mb-3">
                                <label className="form-label">Photo</label>
                                <ImageUpload />
                            </div>
                            <div>
                                <label className="form-label">Video</label>
                                <VideoUpload />
                            </div>
                        </div>
                        <div className=" bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">Pricing</h6>
                            <div className="row">
                                <div className="mb-3 col-12">
                                    <label
                                        htmlFor="basePrice"
                                        className="form-label">
                                        Base Price
                                    </label>
                                    <div className="input-group">
                                        <span class="input-group-text">$</span>
                                        <input
                                            name="basePrice"
                                            id="basePrice"
                                            type="text"
                                            className="form-control border-start-0"
                                            placeholder="Type base price here . . ."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Discount Type
                                    </label>
                                    <select className="form-select w-100">
                                        <option>Hello</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label
                                        htmlFor="discountPercentage"
                                        className="form-label">
                                        Discount Percentage (%)
                                    </label>
                                    <input
                                        name="discountPercentage"
                                        id="discountPercentage"
                                        type="text"
                                        className="form-control"
                                        placeholder="Type discount percentage . . ."
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">
                                        Tax Class
                                    </label>
                                    <select className="form-select w-100">
                                        <option>Hello</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                    <label
                                        htmlFor="VATAmount"
                                        className="form-label">
                                        VAT Amount(%)
                                    </label>
                                    <input
                                        name="VATAmount"
                                        id="VATAmount"
                                        type="text"
                                        className="form-control"
                                        placeholder="Type VAT Amount . . ."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">Inventory</h6>
                            <div className="row">
                                <div className="mb-3 col-md-4">
                                    <label htmlFor="sku" className="form-label">
                                        SKU
                                    </label>
                                    <input
                                        name="sku"
                                        id="sku"
                                        type="text"
                                        className="form-control"
                                        placeholder="Type product SKU here . . ."
                                    />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label
                                        htmlFor="basePrice"
                                        className="form-label">
                                        Barcode
                                    </label>
                                    <input
                                        name="barcode"
                                        id="barcode"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product Barcode . . ."
                                    />
                                </div>
                                <div className="mb-3 col-md-4">
                                    <label
                                        htmlFor="quantity"
                                        className="form-label">
                                        Quantity
                                    </label>
                                    <input
                                        name="quantity"
                                        id="quantity"
                                        type="text"
                                        className="form-control"
                                        placeholder="Type product quantity here . . ."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">Variation</h6>
                            <VariationForm onChange={handleSectionsChange} />
                        </div>
                        <div className=" bg-white shadow-sm p-4 rounded mb-4">
                            <h6 className="mb-3">Shipping</h6>
                            <div>
                                <input
                                    type="checkbox"
                                    className="form-check-input me-2 shadow-none"
                                />
                                <label className="form-check-label form-label text-primary">
                                    This is a physical product
                                </label>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-md-3">
                                    <label
                                        htmlFor="weight"
                                        className="form-label">
                                        Weight
                                    </label>
                                    <input
                                        name="weight"
                                        id="weight"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product weight . . ."
                                    />
                                </div>
                                <div className="mb-3 col-md-3">
                                    <label
                                        htmlFor="height"
                                        className="form-label">
                                        Height
                                    </label>
                                    <input
                                        name="height"
                                        id="height"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product height(cm) . . ."
                                    />
                                </div>
                                <div className="mb-3 col-md-3">
                                    <label
                                        htmlFor="length"
                                        className="form-label">
                                        Length
                                    </label>
                                    <input
                                        name="length"
                                        id="length"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product length(cm) . . ."
                                    />
                                </div>
                                <div className="mb-3 col-md-3">
                                    <label
                                        htmlFor="width"
                                        className="form-label">
                                        Width
                                    </label>
                                    <input
                                        name="width"
                                        id="width"
                                        type="text"
                                        className="form-control"
                                        placeholder="Product width(cm) . . ."
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className=" bg-white shadow-sm p-4 rounded mb-4">
                        <h6 className="mb-3">Category</h6>
                        <div className="mb-3">
                            <label className="form-label">
                                Product Category
                            </label>
                            <select className="form-select w-100">
                                <option>Hello</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Product Tags</label>
                            <Select
                                isMulti
                                options={[
                                    { value: 1, label: "tag1" },
                                    { value: 2, label: "tag2" },
                                    { value: 3, label: "tag3" },
                                    { value: 4, label: "tag4" },
                                ]}
                                styles={customSelectStyles}
                                placeholder="Select tags"
                                className={`m-0 p-0 text-start form-select w-100 product-tags`}
                                required
                            />
                        </div>
                    </div>
                    <div className=" bg-white shadow-sm p-4 rounded mb-4">
                        <div>
                            <h6>Status</h6>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Product Status</label>
                            <select className="form-select w-100">
                                <option>Hello</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;

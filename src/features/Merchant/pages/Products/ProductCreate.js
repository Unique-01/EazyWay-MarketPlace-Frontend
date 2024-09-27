import { LiaTimesSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { useContext, useState } from "react";
import ButtonLoading from "shared/components/ButtonLoading";
import axios from "axios";
import config from "config";
import HandleApiError from "shared/components/HandleApiError";
import { apiClient } from "shared/api/apiClient";
import MerchantProductContext from "shared/context/MerchantProductContext";
import { NotificationContext } from "shared/context/NotificationContext";

const ProductCreate = () => {
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { addOrUpdateProduct } = useContext(MerchantProductContext);
    const { showNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    const isSubmitted = () => {
        setSubmit(true);
    };

    const handleSubmit = async (formData, images, videos, setFormData) => {
        setLoading(true);

        const newFormData = { ...formData };
        const updateImageArray = (newImages) => {
            
            newFormData.image = [
                ...(Array.isArray(newImages) ? newImages : [newImages]),
            ];
        };

        try {
            if (images) {
                const imageData = new FormData();
                images.forEach((file) => {
                    imageData.append("intendedFile[]", file);
                });
                imageData.append("intendedFileName", "image");

                const imageResponse = await axios.post(
                    `${config.API_BASE_URL}/file`,
                    imageData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(imageResponse.data.data);
                updateImageArray(imageResponse.data.data);
            }
            if (videos) {
                const videoData = new FormData();
                videos.forEach((file) => {
                    videoData.append("intendedFile", file);
                });
                videoData.append("intendedFileName", "video");

                const videoResponse = await axios.post(
                    `${config.API_BASE_URL}/file`,
                    videoData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(videoResponse.data);
                setFormData({ ...formData, video: videoResponse.data.data });
            }

            const formResponse = await apiClient.post(
                `${config.API_BASE_URL}/product/manage-product`,
                newFormData
            );

            addOrUpdateProduct(formResponse.data.data);
            navigate("/merchant/products");
            showNotification("Product Added Successfully");

            console.log(formResponse);
        } catch (err) {
            HandleApiError(err, setError);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
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
                        <button
                            onClick={isSubmitted}
                            disabled={loading}
                            className="btn btn-primary text-white">
                            <IoMdAdd /> Add Product{" "}
                            {loading && <ButtonLoading />}
                        </button>
                    </div>
                </div>
                <ProductForm
                    onSubmit={handleSubmit}
                    isSubmitted={submit}
                    loading={loading}
                    error={error}
                    setSubmit={setSubmit}
                />
            </div>
        </div>
    );
};

export default ProductCreate;
